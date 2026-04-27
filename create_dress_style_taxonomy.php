<?php

use Drupal\taxonomy\Entity\Vocabulary;
use Drupal\field\Entity\FieldStorageConfig;
use Drupal\field\Entity\FieldConfig;
use Drupal\file\Entity\File;
use Drupal\taxonomy\Entity\Term;
use Drupal\Core\File\FileSystemInterface;

// 1. Create Vocabulary
$vid = 'dress_style';
$vocabulary = Vocabulary::load($vid);
if (!$vocabulary) {
  $vocabulary = Vocabulary::create([
    'vid' => $vid,
    'name' => 'Dress Style',
    'description' => 'Browse by dress style categories.',
  ]);
  $vocabulary->save();
  echo "Created vocabulary 'Dress Style'.\n";
} else {
  echo "Vocabulary 'Dress Style' already exists.\n";
}

// 2. Create Image Field
$field_name = 'field_image';
$entity_type = 'taxonomy_term';

// Field Storage
$field_storage = FieldStorageConfig::loadByName($entity_type, $field_name);
if (!$field_storage) {
  $field_storage = FieldStorageConfig::create([
    'field_name' => $field_name,
    'entity_type' => $entity_type,
    'type' => 'image',
    'settings' => [
      'target_type' => 'file',
      'display_field' => FALSE,
      'display_default' => FALSE,
      'uri_scheme' => 'public',
    ],
  ]);
  $field_storage->save();
  echo "Created field storage '$field_name'.\n";
}

// Field Instance
$field = FieldConfig::loadByName($entity_type, $vid, $field_name);
if (!$field) {
  $field = FieldConfig::create([
    'field_storage' => $field_storage,
    'bundle' => $vid,
    'label' => 'Image',
    'settings' => [
      'file_directory' => 'dress_styles',
      'alt_field' => TRUE,
      'alt_field_required' => FALSE,
      'title_field' => FALSE,
      'title_field_required' => FALSE,
    ],
  ]);
  $field->save();
  echo "Created field instance '$field_name' on bundle '$vid'.\n";
}

// 3. Create Terms and Attach Images
$styles = [
  ['name' => 'Casual', 'image' => 'image-11.png', 'weight' => 0],
  ['name' => 'Formal', 'image' => 'image-13.png', 'weight' => 1],
  ['name' => 'Party', 'image' => 'image-12.png', 'weight' => 2],
  ['name' => 'Gym', 'image' => 'image-14.png', 'weight' => 3],
];

/** @var \Drupal\Core\File\FileSystemInterface $file_system */
$file_system = \Drupal::service('file_system');
$dest_dir = 'public://dress_styles/';

foreach ($styles as $style_data) {
  // Delete existing terms to recreate them
  $existing_terms = \Drupal::entityTypeManager()
    ->getStorage('taxonomy_term')
    ->loadByProperties(['name' => $style_data['name'], 'vid' => $vid]);
  foreach ($existing_terms as $term) {
    $term->delete();
  }
    
  // Process image
  $dest_path = $dest_dir . $style_data['image'];
  $file_id = NULL;

  if (file_exists($dest_path)) {
    // Check if file entity exists
    $existing_files = \Drupal::entityTypeManager()->getStorage('file')->loadByProperties(['uri' => $dest_path]);
    if (!empty($existing_files)) {
      $file = reset($existing_files);
    } else {
      $file = File::create([
        'uri' => $dest_path,
        'uid' => 1,
        'status' => 1,
      ]);
      $file->save();
    }
    $file_id = $file->id();
    echo "Found and attached file: {$style_data['image']}\n";
  } else {
    echo "Warning: Target file not found: $dest_path\n";
  }

  // Create Term
  $term = Term::create([
    'vid' => $vid,
    'name' => $style_data['name'],
    'weight' => $style_data['weight'],
  ]);
  
  if ($file_id) {
    $term->set($field_name, [
      'target_id' => $file_id,
      'alt' => $style_data['name'],
    ]);
  }
  
  $term->save();
  echo "Created term: {$style_data['name']}\n";
}

echo "Taxonomy setup complete.\n";
