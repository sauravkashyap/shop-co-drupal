<?php

namespace Drupal\ui_builder\Controller;

use Drupal\Core\Controller\ControllerBase;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Drupal\file\Entity\File;
use Drupal\media\Entity\Media;

/**
 * Provides an upload endpoint for the UI Builder.
 */
class UploadController extends ControllerBase {

  /**
   * Handles file upload.
   */
  public function upload(Request $request) {
    $files = $request->files->get('files');
    $file_upload = $files['file'] ?? $files['image'] ?? $files['video'] ?? NULL;
    
    if (empty($file_upload)) {
      return new JsonResponse(['error' => 'No file uploaded'], 400);
    }

    $mime_type = $file_upload->getClientMimeType();
    $is_video = strpos($mime_type, 'video/') === 0;

    // Ensure the destination directory exists.
    $destination = 'public://ui-builder';
    \Drupal::service('file_system')->prepareDirectory($destination, \Drupal\Core\File\FileSystemInterface::CREATE_DIRECTORY | \Drupal\Core\File\FileSystemInterface::MODIFY_PERMISSIONS);

    // Save the file.
    $filename = $file_upload->getClientOriginalName();
    // Sanitize filename to avoid issues.
    $filename = \Drupal::service('file_system')->createFilename($filename, $destination);
    
    $file_data = file_get_contents($file_upload->getRealPath());
    $file = \Drupal::service('file.repository')->writeData($file_data, $destination . '/' . basename($filename), \Drupal\Core\File\FileSystemInterface::EXISTS_REPLACE);

    if ($file) {
      $file->setPermanent();
      $file->save();
      
      // Create Media entity.
      if ($is_video) {
        $media = Media::create([
          'bundle' => 'video',
          'uid' => \Drupal::currentUser()->id(),
          'field_media_video_file' => [
            'target_id' => $file->id(),
          ],
        ]);
      } else {
        $media = Media::create([
          'bundle' => 'image',
          'uid' => \Drupal::currentUser()->id(),
          'field_media_image' => [
            'target_id' => $file->id(),
            'alt' => $filename,
          ],
        ]);
      }
      
      $media->setName($filename);
      $media->save();
      
      $url = \Drupal::service('file_url_generator')->generateString($file->getFileUri());
      
      return new JsonResponse([
        'url' => $url,
        'fid' => $file->id(),
        'mid' => $media->id(),
        'mime' => $file->getMimeType(),
      ]);
    }

    return new JsonResponse(['error' => 'Could not save file'], 500);
  }

  /**
   * Lists existing images and videos.
   */
  public function list() {
    $query = \Drupal::entityQuery('media')
      ->condition('bundle', ['image', 'video'], 'IN')
      ->sort('created', 'DESC')
      ->range(0, 50)
      ->accessCheck(FALSE);
    $mids = $query->execute();
    
    $media_entities = Media::loadMultiple($mids);
    $result = [];
    foreach ($media_entities as $media) {
      $bundle = $media->bundle();
      $field_name = $bundle === 'video' ? 'field_media_video_file' : 'field_media_image';
      
      if ($media->hasField($field_name) && !$media->get($field_name)->isEmpty()) {
        $file_id = $media->get($field_name)->target_id;
        if ($file_id) {
          $file = File::load($file_id);
          if ($file) {
            $result[] = [
              'mid' => $media->id(),
              'fid' => $file->id(),
              'url' => \Drupal::service('file_url_generator')->generateString($file->getFileUri()),
              'name' => $media->getName(),
              'mime' => $file->getMimeType(),
            ];
          }
        }
      }
    }
    return new JsonResponse($result);
  }

}
