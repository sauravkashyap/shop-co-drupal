<?php

namespace Drupal\ui_builder\Plugin\Field\FieldFormatter;

use Drupal\Core\Field\FormatterBase;
use Drupal\Core\Field\FieldItemListInterface;

/**
 * Plugin implementation of the 'ui_builder_json_formatter' formatter.
 *
 * @FieldFormatter(
 *   id = "ui_builder_json_formatter",
 *   label = @Translation("UI Builder HTML Renderer"),
 *   field_types = {
 *     "ui_builder_json"
 *   }
 * )
 */
class UiBuilderJsonFormatter extends FormatterBase {

  /**
   * {@inheritdoc}
   */
  public function viewElements(FieldItemListInterface $items, $langcode) {
    $elements = [];

    foreach ($items as $delta => $item) {
      if (!empty($item->value)) {
        $json_data = json_decode($item->value, TRUE);
        if (json_last_error() === JSON_ERROR_NONE && is_array($json_data)) {
          $elements[$delta] = $this->buildRenderArray($json_data);
        }
        else {
          // Fallback or error logging could go here.
          $elements[$delta] = ['#markup' => '<!-- Invalid UI Builder JSON -->'];
        }
      }
    }

    return $elements;
  }

  /**
   * Recursively builds a Drupal render array from the JSON structure.
   */
  protected function buildRenderArray(array $components) {
    $build = [];

    foreach ($components as $component) {
      // Basic protection
      $tag = $component['tag'] ?? 'div';
      // Only allow safe tags for PoC. In production, we'd use Xss::filterAdmin or similar.
      $safe_tags = ['div', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'a', 'img', 'section', 'header', 'footer', 'button'];
      if (!in_array(strtolower($tag), $safe_tags)) {
        $tag = 'div';
      }

      $element = [
        '#type' => 'html_tag',
        '#tag' => $tag,
      ];

      // Add attributes
      $attributes = [];
      if (!empty($component['classes'])) {
        $attributes['class'] = explode(' ', $component['classes']);
      }
      if (!empty($component['attributes']) && is_array($component['attributes'])) {
        foreach ($component['attributes'] as $key => $val) {
          $attributes[$key] = $val;
        }
      }
      
      if (!empty($attributes)) {
        $element['#attributes'] = $attributes;
      }

      // Handle content (text)
      if (isset($component['content'])) {
        if (is_array($component['content'])) {
          // Nested components
          $element['children'] = $this->buildRenderArray($component['content']);
        }
        else {
          // Plain text content
          // Using #value for html_tag
          $element['#value'] = $component['content'];
        }
      }

      $build[] = $element;
    }

    return $build;
  }

}
