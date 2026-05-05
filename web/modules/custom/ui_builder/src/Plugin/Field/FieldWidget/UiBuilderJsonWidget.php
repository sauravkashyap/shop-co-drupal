<?php

namespace Drupal\ui_builder\Plugin\Field\FieldWidget;

use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\Field\WidgetBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Plugin implementation of the 'ui_builder_json_widget' widget.
 *
 * @FieldWidget(
 *   id = "ui_builder_json_widget",
 *   label = @Translation("UI Builder JSON Editor"),
 *   field_types = {
 *     "ui_builder_json"
 *   }
 * )
 */
class UiBuilderJsonWidget extends WidgetBase {

  /**
   * {@inheritdoc}
   */
  public function formElement(FieldItemListInterface $items, $delta, array $element, array &$form, FormStateInterface $form_state) {
    $value = isset($items[$delta]->value) ? $items[$delta]->value : '[]';

    // Load all available components.
    $storage = \Drupal::entityTypeManager()->getStorage('ui_builder_component');
    $components = $storage->loadMultiple();
    $component_data = [];
    foreach ($components as $component) {
      $component_data[] = [
        'id' => $component->id(),
        'label' => $component->label(),
        'form_schema' => json_decode($component->get('form_schema'), TRUE) ?: [],
        'layout_tree' => json_decode($component->get('layout_tree'), TRUE) ?: [],
      ];
    }

    $element['#attached']['library'][] = 'ui_builder/builder_app';
    $element['#attached']['drupalSettings']['ui_builder']['composer'] = [
      'available_components' => $component_data,
    ];

    $element['container'] = [
      '#type' => 'container',
      '#attributes' => [
        'id' => 'ui-builder-composer-mount',
        'data-field-id' => 'edit-' . str_replace('_', '-', $items->getName()) . '-' . $delta . '-value',
      ],
    ];

    $element['value'] = [
      '#type' => 'textarea',
      '#title' => t('JSON Layout'),
      '#default_value' => $value,
      '#attributes' => [
        'class' => ['ui-builder-json-data-bridge'],
        'style' => 'display:none', // Hide but keep for data syncing.
      ],
    ];

    return $element;
  }

}
