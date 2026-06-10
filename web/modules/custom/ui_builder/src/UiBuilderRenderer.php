<?php

namespace Drupal\ui_builder;

use Drupal\ui_builder\Entity\UiBuilderComponent;

class UiBuilderRenderer {

  /**
   * Recursively builds a Drupal render array from the JSON structure.
   */
  public function buildRenderArray(array $components, $entity = null) {
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

            // Merge form_schema defaults
            $form_schema_raw = $config_entity->getFormSchema();
            if ($form_schema_raw) {
              $form_schema = is_string($form_schema_raw)
                ? json_decode($form_schema_raw, TRUE)
                : $form_schema_raw;
              if (is_array($form_schema)) {
                foreach ($form_schema as $field_key => $field_def) {
                  if (!isset($values[$field_key]) && isset($field_def['default'])) {
                    $values[$field_key] = $field_def['default'];
                  }
                }
              }
            }

            // Pass instance-level properties to the layout tree root
            if (isset($layout_tree[0])) {
              if (isset($component['props']['class'])) {
                $layout_tree[0]['props']['class'] = trim(($layout_tree[0]['props']['class'] ?? '') . ' ' . $component['props']['class']);
              }
              if (isset($component['props']['isBgImage'])) {
                $layout_tree[0]['props']['isBgImage'] = $component['props']['isBgImage'];
              }
              if (!empty($component['id'])) {
                 $layout_tree[0]['props']['class'] = trim(($layout_tree[0]['props']['class'] ?? '') . ' uib-' . $component['id']);
              }
            }

            // Map the values into the layout tree.
            $mapped_tree = $this->processTokens($layout_tree, $values, $entity);
            
            $rendered_component = $this->buildRenderArray($mapped_tree, $entity);
            
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

      $tag = $component['tag'] ?? 'div';
      $label = $component['label'] ?? '';
      $is_bg_image = !empty($component['props']['isBgImage']);

      if (!$is_bg_image && ($tag === 'div' || empty($tag))) {
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

      $safe_tags = [
        'div', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'a', 'img', 
        'section', 'header', 'footer', 'button', 'ul', 'ol', 'li', 'blockquote',
        'article', 'main', 'aside', 'nav', 'hr', 'strong', 'em', 'code', 'small',
        'table', 'thead', 'tbody', 'tr', 'th', 'td',
        'form', 'label', 'input', 'select', 'textarea', 'option',
        'svg', 'path', 'g', 'circle', 'rect',
        'video', 'audio', 'source', 'iframe',
        'drupal-block', 'drupal-menu'
      ];
      if (!in_array(strtolower($tag), $safe_tags)) {
        $tag = 'div';
      }

      $element = [
        '#type' => 'html_tag',
        '#tag' => $tag,
      ];

      $attributes = [];
      if (!empty($component['props']['class'])) {
        $raw_classes = explode(' ', $component['props']['class']);
        $prefixed_classes = [];
        
        static $valid_style_ids = null;
        if ($valid_style_ids === null) {
          $valid_style_ids = \Drupal::entityQuery('ui_builder_style')->execute();
          $valid_style_ids = array_map(fn($id) => str_starts_with($id, 'uib-') ? $id : 'uib-' . $id, $valid_style_ids);
          $valid_style_ids = array_merge($valid_style_ids, [
            'uib-container', 'uib-full-width', 'uib-row', 'uib-section', 'uib-article', 
            'uib-main', 'uib-aside', 'uib-nav', 'uib-grid', 'uib-plain-div'
          ]);
        }

        foreach ($raw_classes as $cls) {
          $cls = trim($cls);
          if (!empty($cls)) {
            $prefixed_classes[] = $cls;
          }
        }
        $attributes['class'] = $prefixed_classes;
      }
      else {
        $attributes['class'] = [];
      }

      $tag_map = [
        'h1' => 'uib-h1', 'h2' => 'uib-h2', 'h3' => 'uib-h3', 'h4' => 'uib-h4',
        'h5' => 'uib-h5', 'h6' => 'uib-h6', 'p' => 'uib-p', 'a' => 'uib-link',
        'button' => 'uib-button', 'ul' => 'uib-ul', 'ol' => 'uib-ol', 'li' => 'uib-li',
        'img' => 'uib-img', 'blockquote' => 'uib-blockquote', 'section' => 'uib-section',
        'article' => 'uib-article', 'main' => 'uib-main', 'aside' => 'uib-aside',
        'nav' => 'uib-nav', 'span' => 'uib-span', 'hr' => 'uib-hr',
        'strong' => 'uib-strong', 'em' => 'uib-em', 'code' => 'uib-code',
        'small' => 'uib-small', 'table' => 'uib-table', 'thead' => 'uib-thead',
        'tbody' => 'uib-tbody', 'tr' => 'uib-tr', 'th' => 'uib-th', 'td' => 'uib-td',
        'form' => 'uib-form', 'label' => 'uib-label', 'input' => 'uib-input',
        'select' => 'uib-select', 'option' => 'uib-option', 'textarea' => 'uib-textarea',
        'svg' => 'uib-svg', 'video' => 'uib-video',
      ];
      if (isset($tag_map[strtolower($tag)])) {
        $attributes['class'][] = $tag_map[strtolower($tag)];
      }

      if (!empty($component['id']) && $this->hasUniqueStyles($component)) {
        $node_id = $component['id'];
        if (!in_array('uib-' . $node_id, $attributes['class'])) {
          $attributes['class'][] = 'uib-' . $node_id;
        }
      }

      if (!empty($component['props']) && is_array($component['props'])) {
        foreach ($component['props'] as $prop_name => $prop_val) {
          if (in_array($prop_name, ['class', 'style', 'side', 'collapsible', 'isBgImage'])) continue;
          if (str_ends_with($prop_name, 'Mode')) continue;
          
          $mode_key = $prop_name . 'Mode';
          $mode = $component['props'][$mode_key] ?? 'static';
          
          if (is_string($prop_val) && $mode === 'mapping' && !empty($prop_val)) {
            $token_service = \Drupal::token();
            $context = $entity ? [$entity->getEntityTypeId() => $entity] : [];
            $token_string = str_starts_with($prop_val, '[') ? $prop_val : "[$prop_val]";
            $resolved_val = $token_service->replace($token_string, $context, ['clear' => TRUE]);
          } else {
            $resolved_val = $prop_val;
          }
          
          if ($resolved_val !== NULL && $resolved_val !== '') {
            // Convert camelCase React media props to lowercase HTML5 attributes
            $media_props = ['autoplay', 'playsinline', 'crossorigin', 'loop', 'muted', 'controls'];
            if (in_array(strtolower($prop_name), $media_props)) {
              $prop_name = strtolower($prop_name);
            }
            $attributes[$prop_name] = $resolved_val;
          }
        }
      }
      
      if ($tag === 'aside') {
        $side = $component['props']['side'] ?? 'left';
        $attributes['class'][] = 'uib-aside-' . $side;
        if (!empty($component['props']['collapsible'])) {
          $attributes['class'][] = 'uib-collapsible';
          $attributes['class'][] = 'is-open';
          
          $aside_id = $attributes['id'] ?? ('uib-aside-' . uniqid());
          $attributes['id'] = $aside_id;
          
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

          $aside_content = [];
          if (!empty($component['children']) && is_array($component['children'])) {
            $aside_content = $this->buildRenderArray($component['children'], $entity);
          }
          elseif (isset($component['content'])) {
            $aside_content = ['#markup' => $component['content']];
          }

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
          continue;
        }
      }
      
      if (!empty($attributes)) {
        $element['#attributes'] = $attributes;
      }

      $is_img_tag = strtolower($tag) === 'img';
      $media_url = '';
      if (isset($component['content']) && is_string($component['content']) && !empty(trim($component['content']))) {
         $media_url = trim($component['content']);
      } elseif (isset($component['props']['src']) && is_string($component['props']['src']) && !empty(trim($component['props']['src']))) {
         $media_url = trim($component['props']['src']);
      }
      
      $is_svg_file = preg_match('/\.svg(\?.*)?$/i', $media_url);
      $is_valid_url = preg_match('/^(\/sites\/|http[s]?:\/\/)/i', $media_url);
      $is_svg_url = ($is_svg_file || strtolower($tag) === 'svg') && $is_valid_url;
      
      if ($is_bg_image) {
        $element['#tag'] = 'div';
        if ($media_url) {
          $element['#attributes']['style'] = "background-image: url('{$media_url}');";
        }
        $element['#attributes']['class'][] = 'background_image';
        if (!empty($component['children']) && is_array($component['children'])) {
          $element['children'] = $this->buildRenderArray($component['children'], $entity);
        }
      }
      elseif ($is_svg_url) {
        $raw_svg = '';
        if (strpos($media_url, '/sites/') !== FALSE) {
          $path_parts = explode('/sites/', $media_url);
          $local_path = \Drupal::root() . '/sites/' . end($path_parts);
          if (file_exists($local_path)) {
            $raw_svg = file_get_contents($local_path);
          }
        }
        
        if ($raw_svg) {
          $element['#tag'] = 'svg';
          if (preg_match('/viewBox="([^"]+)"/i', $raw_svg, $vb_matches)) {
            $element['#attributes']['viewBox'] = $vb_matches[1];
          }
          if (preg_match('/<svg[^>]*>(.*)<\/svg>/is', $raw_svg, $matches)) {
            $element['#value'] = \Drupal\Core\Render\Markup::create($matches[1]);
          } else {
            $element['#value'] = \Drupal\Core\Render\Markup::create($raw_svg);
          }
          $element['#attributes']['xmlns'] = 'http://www.w3.org/2000/svg';
        } else {
          $element['#tag'] = 'img';
          $element['#attributes']['src'] = $media_url;
        }
      }
      elseif ($is_img_tag) {
        $element['#tag'] = 'img';
        $img_content = $component['content'] ?? '';
        if (is_array($img_content)) {
          $element = ['#type' => 'container', '#attributes' => $attributes];
          foreach ($img_content as $url) {
            $element[] = [
              '#type' => 'html_tag',
              '#tag' => 'img',
              '#attributes' => ['src' => $url],
            ];
          }
        } else {
          if ($media_url) $element['#attributes']['src'] = $media_url;
        }
      }
      elseif (in_array(strtolower($tag), ['video', 'audio', 'iframe', 'source'])) {
        if ($media_url) {
          $element['#attributes']['src'] = $media_url;
        }
        
        // Force controls for video/audio ONLY IF it wasn't explicitly configured in properties
        if (in_array(strtolower($tag), ['video', 'audio'])) {
          $props = $component['props'] ?? [];
          if (!array_key_exists('controls', $props)) {
            $element['#attributes']['controls'] = 'controls';
          }
        }

        if (!empty($component['children']) && is_array($component['children'])) {
          $element['children'] = $this->buildRenderArray($component['children'], $entity);
        }
      }
      elseif ($tag === 'drupal-menu' || $tag === 'drupal-block') {
        $block_id = $tag === 'drupal-menu'
          ? 'system_menu_block:' . ($component['props']['menu-name'] ?? 'main')
          : ($component['props']['block-id'] ?? NULL);
        $element['#type'] = 'container';
        unset($element['#tag']);
        if ($block_id) {
          try {
            $block_manager = \Drupal::service('plugin.manager.block');
            if ($block_manager->hasDefinition($block_id)) {
              $plugin_block = $block_manager->createInstance($block_id, []);
              if ($plugin_block) {
                if ($plugin_block instanceof \Drupal\Core\Plugin\ContextAwarePluginInterface) {
                  $contexts = \Drupal::service('context.repository')->getAvailableContexts();
                  if ($entity) {
                    $entity_context = \Drupal\Core\Plugin\Context\EntityContext::fromEntity($entity);
                    $contexts['entity'] = $entity_context;
                    $contexts['node'] = $entity_context;
                    $contexts['@node.node_route_context:node'] = $entity_context;
                  }
                  $contexts['view_mode'] = new \Drupal\Core\Plugin\Context\Context(new \Drupal\Core\Plugin\Context\ContextDefinition('string'), 'full');
                  try {
                    \Drupal::service('context.handler')->applyContextMapping($plugin_block, $contexts);
                  } catch (\Exception $e) {
                    // Ignore missing context errors.
                  }
                }

                $access_result = $plugin_block->access(\Drupal::currentUser(), TRUE);
                if ($access_result->isAllowed()) {
                  $block_build = $plugin_block->build();
                  if (!empty($block_build)) {
                    $cacheability = \Drupal\Core\Cache\CacheableMetadata::createFromObject($plugin_block)
                      ->merge(\Drupal\Core\Cache\CacheableMetadata::createFromObject($access_result))
                      ->merge(\Drupal\Core\Cache\CacheableMetadata::createFromRenderArray($block_build));
                    $cacheability->applyTo($element);
                    
                    // Isolate the block's cache redirect to avoid VariationCache collisions
                    // when multiple blocks (like menus) add active trail contexts to the page.
                    $element['#cache']['keys'] = ['ui_builder', 'block', hash('sha256', $block_id . serialize($component['props'] ?? []))];
                    $element[] = $block_build;
                  }
                } else {
                  \Drupal\Core\Cache\CacheableMetadata::createFromObject($access_result)->applyTo($element);
                }
              }
            }
          } catch (\Exception $e) {
            \Drupal::logger('ui_builder')->error('Failed to render block %id: @message', [
              '%id' => $block_id,
              '@message' => $e->getMessage(),
            ]);
          }
        }
      }
      elseif (!empty($component['children']) && is_array($component['children'])) {
        $element['children'] = $this->buildRenderArray($component['children'], $entity);
      }
      elseif (isset($component['content']) && empty($component['props']['isBgImage'])) {
        $element['#value'] = $component['content'];
      }

      $build[] = $element;
    }

    return $build;
  }

  protected function processTokens($data, array $values, $entity = null) {
    if (is_array($data)) {
      if (isset($data['tag'])) {
        $key = null;
        if (!empty($data['fieldLabel'])) {
          $key = preg_replace('/[^\w]/', '', str_replace(' ', '_', strtolower($data['fieldLabel'])));
        }
        elseif (!empty($data['id'])) {
          $key = 'field_' . $data['id'];
        }

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
            if (!empty($value_data['isBgImage'])) {
              $data['props']['isBgImage'] = true;
            }
          } else {
            $final_value = is_scalar($value_data) ? $value_data : '';
          }
          
          $data['content'] = $final_value;
        }
      }

      foreach ($data as $k => $v) {
        $data[$k] = $this->processTokens($v, $values, $entity);
      }
      return $data;
    }

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

  protected function compileStyleTree(array $style_data, $parent_selector) {
    $css = '';
    $current_selector = $style_data['selector'] ?? '&';
    
    if (strpos($current_selector, '&') !== FALSE) {
      $current_selector = str_replace('&', $parent_selector, $current_selector);
    } else {
      $current_selector = $parent_selector . ' ' . $current_selector;
    }

    $rules = [];
    if (!empty($style_data['properties'])) {
      foreach ($style_data['properties'] as $prop => $val) {
        if (isset($val) && $val !== '') $rules[] = "$prop: $val !important;";
      }
    }
    if (!empty($style_data['custom_properties'])) {
      foreach ($style_data['custom_properties'] as $prop => $val) {
        if (isset($val) && $val !== '') $rules[] = "$prop: $val !important;";
      }
    }

    if (!empty($rules)) {
      $css .= "$current_selector { " . implode(' ', $rules) . " }\n";
    }

    if (!empty($style_data['children'])) {
      foreach ($style_data['children'] as $child) {
        $css .= $this->compileStyleTree($child, $current_selector);
      }
    }

    return $css;
  }

  protected function hasUniqueStyles(array $node) {
    if (empty($node)) return FALSE;

    $label = $node['label'] ?? '';
    $tag = $node['tag'] ?? 'div';
    $is_container_or_div = (str_starts_with($label, 'Container') || str_starts_with($label, 'Plain Div') || $tag === 'div');

    if (!empty($node['instanceStyles']) && !empty($node['id'])) {
      $css = $this->compileStyleTree($node['instanceStyles'], '.uib-' . $node['id']);
      if (!empty(trim($css))) return TRUE;
    }

    if (empty($node['props'])) return FALSE;
    $p = $node['props'];
    
    $is_col = FALSE;
    if (!empty($p['class'])) {
      $classes = explode(' ', $p['class']);
      foreach ($classes as $c) {
        if (str_starts_with($c, 'uib-col-')) {
          $is_col = TRUE;
          break;
        }
      }
    }
    
    if (!$is_col) {
      if (!empty($p['flexDirection'])) return TRUE;
      if (!empty($p['justifyContent'])) return TRUE;
      if (!empty($p['alignItems'])) return TRUE;
      if (!empty($p['alignSelf'])) return TRUE;
      if (isset($p['flexGrow']) && $p['flexGrow'] != 0) return TRUE;
      if (isset($p['flexShrink']) && $p['flexShrink'] != 1) return TRUE;
      if (!empty($p['width'])) return TRUE;
      if (!empty($p['height'])) return TRUE;
    }

    return FALSE;
  }

}
