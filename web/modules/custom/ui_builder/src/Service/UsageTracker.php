<?php

namespace Drupal\ui_builder\Service;

use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\Core\Database\Connection;
use Drupal\Core\Url;

/**
 * Service to track usage of UI Builder Components.
 */
class UsageTracker {

  /**
   * The entity type manager.
   *
   * @var \Drupal\Core\Entity\EntityTypeManagerInterface
   */
  protected $entityTypeManager;

  /**
   * The database connection.
   *
   * @var \Drupal\Core\Database\Connection
   */
  protected $database;

  /**
   * Constructs a UsageTracker object.
   */
  public function __construct(EntityTypeManagerInterface $entity_type_manager, Connection $database) {
    $this->entityTypeManager = $entity_type_manager;
    $this->database = $database;
  }

  /**
   * Gets usage of a specific component.
   *
   * @param string $component_id
   *   The component ID to check.
   *
   * @return array
   *   An array of usage information, each with 'label' and 'url'.
   */
  public function getUsage($component_id) {
    $usage = [];
    \Drupal::logger('ui_builder')->notice('Checking usage for component: @id', ['@id' => $component_id]);

    // 1. Check in other UI Builder Components (nested usage)
    $storage = $this->entityTypeManager->getStorage('ui_builder_component');
    $components = $storage->loadMultiple();
    foreach ($components as $comp) {
      if ($comp->id() === $component_id) {
        continue;
      }
      $layout = $comp->getLayoutTree();
      
      // Use regex to find the exact component_id regardless of whitespace
      $pattern = '/"component_id"\s*:\s*"' . preg_quote($component_id, '/') . '"/';
      
      if (preg_match($pattern, $layout)) {
        \Drupal::logger('ui_builder')->notice('Found component @id in parent component @parent', [
          '@id' => $component_id,
          '@parent' => $comp->label(),
        ]);
        $usage[] = [
          'label' => 'Component: ' . $comp->label(),
          'type' => 'ui_builder_component',
          'id' => $comp->id(),
          'url' => Url::fromRoute('entity.ui_builder_component.edit_form', ['ui_builder_component' => $comp->id()]),
        ];
      }
    }

    // 2. Check in all entities that have a ui_builder_json field
    $field_map = \Drupal::service('entity_field.manager')->getFieldMapByFieldType('ui_builder_json');
    
    foreach ($field_map as $entity_type_id => $fields) {
      $entity_type = $this->entityTypeManager->getDefinition($entity_type_id);
      $id_key = $entity_type->getKey('id');
      $label_key = $entity_type->getKey('label');

      foreach ($fields as $field_name => $field_info) {
        $table = $entity_type_id . '__' . $field_name;
        if (!$this->database->schema()->tableExists($table)) {
          continue;
        }

        $query = $this->database->select($table, 'f');
        $query->fields('f', ['entity_id', $field_name . '_value']);
        
        // Use a broader search to catch any mention of component_id
        $query->condition($field_name . '_value', '%"component_id"%', 'LIKE');
        
        $results = $query->execute()->fetchAll();

        foreach ($results as $result) {
          $json = $result->{$field_name . '_value'};
          
          // Use regex to find the exact component_id regardless of whitespace
          // Pattern looks for "component_id"\s*:\s*"ID"
          $pattern = '/"component_id"\s*:\s*"' . preg_quote($component_id, '/') . '"/';
          
          if (preg_match($pattern, $json)) {
            $entity = $this->entityTypeManager->getStorage($entity_type_id)->load($result->entity_id);
            if ($entity) {
              \Drupal::logger('ui_builder')->notice('Found component @id in entity @type:@eid', [
                '@id' => $component_id,
                '@type' => $entity_type_id,
                '@eid' => $entity->id(),
              ]);
              $usage[] = [
                'label' => ucfirst($entity_type_id) . ': ' . ($label_key ? $entity->label() : $entity->id()),
                'type' => $entity_type_id,
                'id' => $entity->id(),
                'url' => $entity->toUrl('edit-form'),
              ];
            }
          }
        }
      }
    }

    return $usage;
  }

}
