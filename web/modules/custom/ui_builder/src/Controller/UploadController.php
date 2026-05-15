<?php

namespace Drupal\ui_builder\Controller;

use Drupal\Core\Controller\ControllerBase;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Drupal\file\Entity\File;

/**
 * Provides an upload endpoint for the UI Builder.
 */
class UploadController extends ControllerBase {

  /**
   * Handles file upload.
   */
  public function upload(Request $request) {
    $files = $request->files->get('files');
    if (empty($files) || !isset($files['image'])) {
      return new JsonResponse(['error' => 'No image uploaded'], 400);
    }

    $file_upload = $files['image'];

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
      
      $url = \Drupal::service('file_url_generator')->generateString($file->getFileUri());
      
      return new JsonResponse([
        'url' => $url,
        'fid' => $file->id(),
      ]);
    }

    return new JsonResponse(['error' => 'Could not save file'], 500);
  }

}
