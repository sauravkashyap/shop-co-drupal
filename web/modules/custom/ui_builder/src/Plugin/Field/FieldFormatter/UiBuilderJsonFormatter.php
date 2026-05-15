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
          $dynamic_css = '';
          $render_array = $this->buildRenderArray($json_data, $item->getEntity(), $dynamic_css);

          $elements[$delta] = [
            '#type' => 'container',
            '#attributes' => [
              'class' => ['ui-builder-content'],
            ],
            'content' => $render_array,
            '#attached' => [
              'library' => [
                'ui_builder/frontend_defaults',
                'ui_builder/custom_styles',
                'ui_builder/dynamic_styles',
              ],
              'html_head' => [
                [
                  [
                    '#type' => 'html_tag',
                    '#tag' => 'style',
                    '#value' => $dynamic_css,
                  ],
                  'ui_builder_dynamic_css_' . $delta,
                ],
              ],
            ],
          ];
        }
        else {
          $elements[$delta] = ['#markup' => '<!-- Invalid UI Builder JSON -->'];
        }
      }
    }

    return $elements;
  }

  /**
   * Recursively builds a Drupal render array from the JSON structure.
   */
  protected function buildRenderArray(array $components, $entity = null, &$dynamic_css = '') {
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
            $rendered_component = $this->buildRenderArray($mapped_tree, $entity, $dynamic_css);
            
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

      // Repair logic: Convert legacy 'div' tags back to semantic tags based on label.
      $tag = $component['tag'] ?? 'div';
      $label = $component['label'] ?? '';
      
      if ($tag === 'div' || empty($tag)) {
        if (strpos($label, 'Heading 1') !== FALSE) $tag = 'h1';
        elseif (strpos($label, 'Heading 2') !== FALSE) $tag = 'h2';
        elseif (strpos($label, 'Heading 3') !== FALSE) $tag = 'h3';
        elseif (strpos($label, 'Heading 4') !== FALSE) $tag = 'h4';
        elseif (strpos($label, 'Heading 5') !== FALSE) $tag = 'h5';
        elseif (strpos($label, 'Heading 6') !== FALSE) $tag = 'h6';
        elseif (strpos($label, 'Paragraph') !== FALSE) $tag = 'p';
        elseif (strpos($label, 'Button') !== FALSE) $tag = 'button';
        elseif (strpos($label, 'Link') !== FALSE) $tag = 'a';
      }

      // Only allow safe tags for PoC.
      $safe_tags = [
        'div', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'a', 'img', 
        'section', 'header', 'footer', 'button', 'ul', 'ol', 'li', 'blockquote',
        'article', 'main', 'aside', 'nav', 'hr', 'strong', 'em', 'code', 'small',
        'table', 'thead', 'tbody', 'tr', 'th', 'td',
        'form', 'label', 'input', 'select', 'textarea', 'option',
        'svg', 'path', 'g', 'circle', 'rect'
      ];
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
        $raw_classes = explode(' ', $component['props']['class']);
        $prefixed_classes = [];
        
        // Cache valid style IDs for this request to optimize performance.
        static $valid_style_ids = null;
        if ($valid_style_ids === null) {
          $valid_style_ids = \Drupal::entityQuery('ui_builder_style')->execute();
          // Normalize IDs to include uib- prefix for comparison.
          $valid_style_ids = array_map(fn($id) => str_starts_with($id, 'uib-') ? $id : 'uib-' . $id, $valid_style_ids);
          // Add standard structural classes that should never be stripped.
          $valid_style_ids = array_merge($valid_style_ids, [
            'uib-container', 'uib-full-width', 'uib-row', 'uib-section', 'uib-article', 
            'uib-main', 'uib-aside', 'uib-nav', 'uib-grid', 'uib-plain-div'
          ]);
          // Add wildcard column pattern support - anything starting with uib-col- is valid.
        }

        foreach ($raw_classes as $cls) {
          $cls = trim($cls);
          if (empty($cls)) continue;
          // Prefix all classes with uib- to ensure they are namespaced (skip if already prefixed)
          if (!str_starts_with($cls, 'uib-')) {
            $cls = 'uib-' . $cls;
          }
          
          // DYNAMIC CLEANUP: Only output the class if it exists as a Style entity,
          // is a base structural class, or is a grid column class.
          $is_valid = in_array($cls, $valid_style_ids) || str_starts_with($cls, 'uib-col-');
          
          if ($is_valid) {
            $prefixed_classes[] = $cls;
          }
        }
        $attributes['class'] = $prefixed_classes;
      }
      else {
        $attributes['class'] = [];
      }

      // Add the corresponding UIB style class based on the tag (Site Studio Style)
      $tag_map = [
        'h1' => 'uib-h1',
        'h2' => 'uib-h2',
        'h3' => 'uib-h3',
        'h4' => 'uib-h4',
        'h5' => 'uib-h5',
        'h6' => 'uib-h6',
        'p' => 'uib-p',
        'a' => 'uib-link',
        'button' => 'uib-button',
        'ul' => 'uib-ul',
        'ol' => 'uib-ol',
        'li' => 'uib-li',
        'img' => 'uib-img',
        'blockquote' => 'uib-blockquote',
        'section' => 'uib-section',
        'article' => 'uib-article',
        'main' => 'uib-main',
        'aside' => 'uib-aside',
        'nav' => 'uib-nav',
        'span' => 'uib-span',
        'hr' => 'uib-hr',
        'strong' => 'uib-strong',
        'em' => 'uib-em',
        'code' => 'uib-code',
        'small' => 'uib-small',
        'table' => 'uib-table',
        'thead' => 'uib-thead',
        'tbody' => 'uib-tbody',
        'tr' => 'uib-tr',
        'th' => 'uib-th',
        'td' => 'uib-td',
        'form' => 'uib-form',
        'label' => 'uib-label',
        'input' => 'uib-input',
        'select' => 'uib-select',
        'option' => 'uib-option',
        'textarea' => 'uib-textarea',
        'svg' => 'uib-svg',
        'video' => 'uib-video',
      ];
      if (isset($tag_map[strtolower($tag)])) {
        $attributes['class'][] = $tag_map[strtolower($tag)];
      }

      // Add unique instance classes
      if (!empty($component['id'])) {
        $node_id = $component['id'];

        // Generate CSS for this node
        $rules = [];

        if (!empty($component['props'])) {
          foreach ($component['props'] as $key => $val) {
            if (!is_scalar($val) || empty($val)) continue;

            switch ($key) {
              case 'flexDirection': $rules[] = "flex-direction: $val !important;"; break;
              case 'justifyContent': $rules[] = "justify-content: $val !important;"; break;
              case 'alignItems': $rules[] = "align-items: $val !important;"; break;
              case 'alignSelf': $rules[] = "align-self: $val !important;"; break;
              case 'flexGrow': 
                if ($val != 0) $rules[] = "flex-grow: $val !important;"; 
                break;
              case 'flexShrink': 
                if ($val != 1) $rules[] = "flex-shrink: $val !important;"; 
                break;
              case 'width': $rules[] = "width: $val !important;"; break;
              case 'height': $rules[] = "height: $val !important;"; break;
            }
          }
        }

        if (!empty($rules)) {
          $attributes['class'][] = 'uib-' . $node_id;
          $dynamic_css .= ".uib-$node_id { " . implode(' ', $rules) . " }\n";
        }
      }
      
      // Handle special Aside props
      if ($tag === 'aside') {
        $side = $component['props']['side'] ?? 'left';
        $attributes['class'][] = 'uib-aside-' . $side;
        if (!empty($component['props']['collapsible'])) {
          $attributes['class'][] = 'uib-collapsible';
          $attributes['class'][] = 'is-open'; // Default to open
          
          // Generate a unique ID for targeting.
          $aside_id = $attributes['id'] ?? ('uib-aside-' . uniqid());
          $attributes['id'] = $aside_id;
          
          // Create the toggle button.
          $toggle_button = [
            '#type' => 'html_tag',
            '#tag' => 'button',
            '#attributes' => [
              'class' => ['uib-aside-toggle'],
              'data-aside-id' => $aside_id,
              'aria-expanded' => 'true',
              'aria-controls' => $aside_id,
              'title' => t('Toggle Sidebar'),
            ],
            '#value' => \Drupal\Core\Render\Markup::create('<span class="uib-toggle-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 18L9 12L15 6" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span class="uib-toggle-label">' . t('Close sidebar') . '</span>'),
          ];

          // Build children or content.
          $aside_content = [];
          if (!empty($component['children']) && is_array($component['children'])) {
            $aside_content = $this->buildRenderArray($component['children'], $entity);
          }
          elseif (isset($component['content'])) {
            $aside_content = ['#markup' => $component['content']];
          }

          // Wrap them in a container.
          $wrapper = [
            '#type' => 'container',
            '#attributes' => ['class' => ['uib-aside-wrapper', 'uib-aside-wrapper-' . $side]],
            'aside' => [
               '#type' => 'html_tag',
               '#tag' => 'aside',
               '#attributes' => $attributes,
            ] + $aside_content,
            'toggle' => $toggle_button,
          ];
          
          $build[] = $wrapper;
          continue; // Skip the default element construction
        }
      }
      
      if (!empty($attributes)) {
        $element['#attributes'] = $attributes;
      }

      // Special handling for <img> tags: content should be the 'src' attribute.
      if (strtolower($tag) === 'img') {
        $img_content = $component['content'] ?? '';
        if (is_array($img_content)) {
          // Handle multiple images by rendering them all.
          $element = ['#type' => 'container', '#attributes' => $attributes];
          foreach ($img_content as $url) {
            $element[] = [
              '#type' => 'html_tag',
              '#tag' => 'img',
              '#attributes' => ['src' => $url],
            ];
          }
        } else {
          $element['#attributes']['src'] = $img_content;
        }
      }
      // Handle children
      elseif (!empty($component['children']) && is_array($component['children'])) {
        $element['children'] = $this->buildRenderArray($component['children'], $entity, $dynamic_css);
      }
      // Handle text content
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

  /**
   * Helper function to get the current entity from the field items.
   */
  protected function getEntity() {
    return $this->fieldDefinition->getEntity();
  }

}
