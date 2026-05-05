<?php

namespace Drupal\ui_builder\Plugin\Field\FieldFormatter;

use Drupal\Core\Field\FormatterBase;
use Drupal\Core\Field\FieldItemListInterface;
use Drupal\ui_builder\Entity\UiBuilderComponent;

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
          $elements[$delta] = $this->buildRenderArray($json_data, $item->getEntity());
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
  protected function buildRenderArray(array $components, $entity = null) {
    $build = [];

    foreach ($components as $component) {
      // Check if this is a pre-defined component instance.
      if (!empty($component['component_id'])) {
        $config_entity = UiBuilderComponent::load($component['component_id']);
        if ($config_entity) {
          $layout_tree_json = $config_entity->getLayoutTree();
          $layout_tree = json_decode($layout_tree_json, TRUE);
          
          if (is_array($layout_tree)) {
            $values = $component['values'] ?? [];
            // Map the values into the layout tree.
            $mapped_tree = $this->processTokens($layout_tree, $values, $entity);
            
            // Build the mapped tree and attach libraries.
            $rendered_component = $this->buildRenderArray($mapped_tree, $entity);
            
            // Attach CSS/JS if they exist.
            // Note: In Drupal, attaching physical files via #attached library is standard,
            // but since we are dynamically creating them, we might need to register a dynamic library
            // or just output them via inline css/js or standard <link> tags if we don't have a library defined.
            // For now, we assume a library will be created, or we can just attach the file path if supported.
            // Let's use standard html_tag to output css if needed, or simply attach it via a custom hook later.
            // For a robust solution, we can use `#attached` with `library` if we create a dynamic library hook.
            // For now, we will add them as inline assets for the PoC.
            if ($config_entity->getCss()) {
              $rendered_component['#attached']['html_head'][] = [
                [
                  '#type' => 'html_tag',
                  '#tag' => 'style',
                  '#value' => $config_entity->getCss(),
                ],
                'ui_builder_css_' . $config_entity->id(),
              ];
            }
            if ($config_entity->getJavascript()) {
              $rendered_component['#attached']['html_head'][] = [
                [
                  '#type' => 'html_tag',
                  '#tag' => 'script',
                  '#value' => $config_entity->getJavascript(),
                ],
                'ui_builder_js_' . $config_entity->id(),
              ];
            }

            $build[] = $rendered_component;
          }
        }
        continue;
      }

      // Basic protection for raw elements
      $tag = $component['tag'] ?? 'div';
      // Only allow safe tags for PoC.
      $safe_tags = ['div', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'a', 'img', 'section', 'header', 'footer', 'button'];
      if (!in_array(strtolower($tag), $safe_tags)) {
        $tag = 'div';
      }

      $element = [
        '#type' => 'html_tag',
        '#tag' => $tag,
      ];

      // Add attributes from 'props'
      $attributes = [];
      if (!empty($component['props']['class'])) {
        $attributes['class'] = explode(' ', $component['props']['class']);
      }
      
      // Add other attributes if any
      if (!empty($component['props']) && is_array($component['props'])) {
        foreach ($component['props'] as $key => $val) {
          if ($key !== 'class' && is_scalar($val)) {
            $attributes[$key] = $val;
          }
        }
      }
      
      if (!empty($attributes)) {
        $element['#attributes'] = $attributes;
      }

      // Handle children
      if (!empty($component['children']) && is_array($component['children'])) {
        $element['children'] = $this->buildRenderArray($component['children'], $entity);
      }
      // Handle text content (only if no children, or as prefix/suffix - let's use #value for now)
      elseif (isset($component['content'])) {
        $element['#value'] = $component['content'];
      }

      $build[] = $element;
    }

    return $build;
  }

  /**
   * Recursively processes the layout tree and applies overrides from $values.
   */
  protected function processTokens($data, array $values, $entity = null) {
    if (is_array($data)) {
      // 1. If this is a node array with a tag, check for direct field matching for its content.
      if (isset($data['tag'])) {
        $key = null;
        if (!empty($data['fieldLabel'])) {
          $key = preg_replace('/[^\w]/', '', str_replace(' ', '_', strtolower($data['fieldLabel'])));
        }
        elseif (!empty($data['id'])) {
          $key = 'field_' . $data['id'];
        }

        // Apply override if found in $values.
        if ($key && isset($values[$key])) {
          $value_data = $values[$key];
          $final_value = '';
          
          if (is_array($value_data) && isset($value_data['mode'])) {
            if ($value_data['mode'] === 'mapping') {
              $token_service = \Drupal::token();
              $context = $entity ? [$entity->getEntityTypeId() => $entity] : [];
              $final_value = $token_service->replace('[' . $value_data['value'] . ']', $context, ['clear' => TRUE]);
            } else {
              $final_value = $value_data['value'];
            }
          } else {
            $final_value = is_scalar($value_data) ? $value_data : '';
          }
          
          $data['content'] = $final_value;
        }
      }

      // 2. Always recurse into all array keys (to process children, nested tags, etc.)
      foreach ($data as $k => $v) {
        $data[$k] = $this->processTokens($v, $values, $entity);
      }
      return $data;
    }

    // 3. If this is a string, process template placeholders.
    if (is_string($data)) {
      foreach ($values as $key => $value_data) {
        $final_value = '';
        if (is_array($value_data) && isset($value_data['mode'])) {
          if ($value_data['mode'] === 'mapping') {
            $token_service = \Drupal::token();
            $context = $entity ? [$entity->getEntityTypeId() => $entity] : [];
            $final_value = $token_service->replace('[' . $value_data['value'] . ']', $context, ['clear' => TRUE]);
          } else {
            $final_value = $value_data['value'];
          }
        } else {
          $final_value = is_scalar($value_data) ? $value_data : '';
        }

        $data = str_replace(['{{ ' . $key . ' }}', '{{' . $key . '}}'], $final_value, $data);
      }
      return $data;
    }

    return $data;
  }

}
