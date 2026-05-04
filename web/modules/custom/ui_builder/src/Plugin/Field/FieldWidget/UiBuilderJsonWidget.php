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
    $value = isset($items[$delta]->value) ? $items[$delta]->value : '';

    $element['value'] = [
      '#type' => 'textarea',
      '#title' => t('JSON Layout'),
      '#default_value' => $value,
      '#description' => t('Paste the JSON payload representing the layout. (This will later be replaced by the React Visual Builder).'),
      '#rows' => 10,
    ];

    return $element;
  }

}
