<?php

use Drupal\block_content\Entity\BlockContentType;
use Drupal\field\Entity\FieldStorageConfig;
use Drupal\field\Entity\FieldConfig;
use Drupal\block_content\Entity\BlockContent;
use Drupal\block\Entity\Block;

$type_id = 'browse_by_style';
$type_label = 'Browse by Style';

// 1. Create Block Content Type
$block_type = BlockContentType::load($type_id);
if (!$block_type) {
  $block_type = BlockContentType::create([
    'id' => $type_id,
    'label' => $type_label,
    'revision' => FALSE,
  ]);
  $block_type->save();
  echo "Created Block Content Type: $type_label\n";
} else {
  echo "Block Content Type '$type_label' already exists.\n";
}

// 2. Create Entity Reference Field (field_styles)
$field_name = 'field_styles';
$entity_type = 'block_content';

// Field Storage
$field_storage = FieldStorageConfig::loadByName($entity_type, $field_name);
if (!$field_storage) {
  $field_storage = FieldStorageConfig::create([
    'field_name' => $field_name,
    'entity_type' => $entity_type,
    'type' => 'entity_reference',
    'cardinality' => FieldStorageConfig::CARDINALITY_UNLIMITED,
    'settings' => [
      'target_type' => 'taxonomy_term',
    ],
  ]);
  $field_storage->save();
  echo "Created field storage '$field_name'.\n";
}

// Field Instance
$field = FieldConfig::loadByName($entity_type, $type_id, $field_name);
if (!$field) {
  $field = FieldConfig::create([
    'field_storage' => $field_storage,
    'bundle' => $type_id,
    'label' => 'Styles',
    'settings' => [
      'handler' => 'default:taxonomy_term',
      'handler_settings' => [
        'target_bundles' => [
          'dress_style' => 'dress_style',
        ],
        'sort' => [
          'field' => 'weight',
          'direction' => 'ASC',
        ],
      ],
    ],
  ]);
  $field->save();
  
  // Entity Form Display
  /** @var \Drupal\Core\Entity\Entity\EntityFormDisplay $form_display */
  $form_display = \Drupal::entityTypeManager()
    ->getStorage('entity_form_display')
    ->load("block_content.$type_id.default");
  if (!$form_display) {
    $form_display = \Drupal::entityTypeManager()->getStorage('entity_form_display')->create([
      'targetEntityType' => 'block_content',
      'bundle' => $type_id,
      'mode' => 'default',
      'status' => TRUE,
    ]);
  }
  $form_display->setComponent($field_name, [
    'type' => 'entity_reference_autocomplete',
  ])->save();
  
  echo "Created field instance '$field_name' on bundle '$type_id'.\n";
}

// 3. Create Block Content Instance
// Find all dress styles terms
$terms = \Drupal::entityTypeManager()
  ->getStorage('taxonomy_term')
  ->loadByProperties(['vid' => 'dress_style']);

$target_ids = array_map(function($term) {
  return ['target_id' => $term->id()];
}, $terms);

$blocks = \Drupal::entityTypeManager()
  ->getStorage('block_content')
  ->loadByProperties(['type' => $type_id, 'info' => 'Homepage Browse by Style']);

if (empty($blocks)) {
  $block_content = BlockContent::create([
    'info' => 'Homepage Browse by Style',
    'type' => $type_id,
    'field_styles' => $target_ids,
  ]);
  $block_content->save();
  echo "Created Block Content instance.\n";
} else {
  $block_content = reset($blocks);
  $block_content->set('field_styles', $target_ids);
  $block_content->save();
  echo "Updated Block Content instance.\n";
}

// 4. Place Block in content region
$block_id = 'homepage_browse_by_style';
$block = Block::load($block_id);
if (!$block) {
  $block = Block::create([
    'id' => $block_id,
    'theme' => 'custom_theme',
    'plugin' => 'block_content:' . $block_content->uuid(),
    'region' => 'content',
    'weight' => 20, // After hero banner and product collection
    'settings' => [
      'label_display' => '0',
    ],
    'visibility' => [
      'request_path' => [
        'id' => 'request_path',
        'pages' => '<front>',
        'negate' => FALSE,
      ],
    ],
  ]);
  $block->save();
  echo "Placed block on homepage.\n";
} else {
  echo "Block already placed.\n";
}

echo "Setup complete.\n";
