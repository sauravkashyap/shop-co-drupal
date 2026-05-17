<?php

namespace Drupal\ui_builder\Service;

use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\Core\File\FileSystemInterface;
use Drupal\ui_builder\Entity\UiBuilderStyle;

/**
 * Compiles UI Builder Style trees into a CSS file.
 */
class CssCompiler {

  /**
   * The entity type manager.
   *
   * @var \Drupal\Core\Entity\EntityTypeManagerInterface
   */
  protected $entityTypeManager;

  /**
   * The file system.
   *
   * @var \Drupal\Core\File\FileSystemInterface
   */
  protected $fileSystem;

  /**
   * Constructs a CssCompiler object.
   */
  public function __construct(EntityTypeManagerInterface $entity_type_manager, FileSystemInterface $file_system) {
    $this->entityTypeManager = $entity_type_manager;
    $this->fileSystem = $file_system;
  }

  /**
   * Compiles all styles and saves them to a file.
   */
  public function compileAll() {
    $styles = $this->entityTypeManager->getStorage('ui_builder_style')->loadMultiple();
    $css = "/* UI Builder Generated Styles - DO NOT EDIT MANUALLY */\n\n";

    foreach ($styles as $style) {
      /** @var \Drupal\ui_builder\Entity\UiBuilderStyle $style */
      $data = $style->getData();
      if (!empty($data)) {
        // Machine name is used as the base class, prefix with uib-
        $id = $style->id();
        $base_selector = '.' . (str_starts_with($id, 'uib-') ? $id : 'uib-' . $id);
        $css .= $this->compileNode($base_selector, $data);
        $css .= "\n";
      }
    }

    $directory = 'public://ui_builder';
    $this->fileSystem->prepareDirectory($directory, FileSystemInterface::CREATE_DIRECTORY | FileSystemInterface::MODIFY_PERMISSIONS);
    $this->fileSystem->saveData($css, $directory . '/uib-styles.css', FileSystemInterface::EXISTS_REPLACE);

    // Flush asset caches if needed.
    \Drupal::service('library.discovery')->clearCachedDefinitions();
    // \Drupal::service('asset.js.collection_optimizer')->deleteAll();
    // \Drupal::service('asset.css.collection_optimizer')->deleteAll();
  }

  /**
   * Recursively compiles a style node.
   */
  protected function compileNode($selector, $node) {
    $css = "";
    
    // Process properties of the current node
    if (!empty($node['properties']) || !empty($node['custom_properties'])) {
      $css .= $selector . " {\n";
      
      if (!empty($node['properties'])) {
        foreach ($node['properties'] as $prop => $value) {
          if (!empty($value)) {
            $css .= "  " . $prop . ": " . $value . ";\n";
          }
        }
      }
      
      if (!empty($node['custom_properties'])) {
        $config = \Drupal::config('ui_builder.base_styles');
        $breakpoints = [
          'tablet' => $config->get('tablet_breakpoint') ?: '1024px',
          'mobile' => $config->get('mobile_breakpoint') ?: '767px',
        ];
        
        $custom_breakpoints = $config->get('custom_breakpoints') ?: [];
        foreach ($custom_breakpoints as $item) {
          if (!empty($item['key']) && !empty($item['value'])) {
            $breakpoints[$item['key']] = $item['value'];
          }
        }

        $base_props = [];
        $grouped_props = [];

        foreach ($node['custom_properties'] as $prop => $value) {
          if (empty($value)) continue;

          $matched = false;
          foreach ($breakpoints as $key => $width) {
            if (str_starts_with($prop, $key . ':')) {
              $grouped_props[$key][substr($prop, strlen($key) + 1)] = $value;
              $matched = true;
              break;
            }
          }

          if (!$matched) {
            $base_props[$prop] = $value;
          }
        }

        // Output base props
        foreach ($base_props as $prop => $value) {
          $css .= "  " . $prop . ": " . $value . ";\n";
        }

        // Output Breakpoint props
        foreach ($grouped_props as $key => $props) {
          $width = $breakpoints[$key] ?? '0px';
          $css .= "  @media (max-width: $width) {\n";
          foreach ($props as $prop => $value) {
            $css .= "    " . $prop . ": " . $value . ";\n";
          }
          $css .= "  }\n";
        }
      }
      
      $css .= "}\n";
    }

    // Process children (nested selectors)
    if (!empty($node['children'])) {
      foreach ($node['children'] as $child) {
        $child_selector = $child['selector'];
        
        // Handle '&' nesting (Sass style)
        if (str_contains($child_selector, '&')) {
          $resolved_selector = str_replace('&', $selector, $child_selector);
        } else {
          // Prefix class selectors with uib-, leave elements and pseudo-selectors alone
          $child_selector = $this->prefixSelector($child_selector);
          $resolved_selector = $selector . " " . $child_selector;
        }

        $css .= $this->compileNode($resolved_selector, $child);
      }
    }

    return $css;
  }

  /**
   * Prefixes CSS class selectors with uib-.
   *
   * Class selectors (.hero) become .uib-hero.
   * Element selectors (h3, p) and pseudo-selectors (:hover) are left as-is.
   * Already-prefixed classes (.uib-xxx) are not double-prefixed.
   */
  protected function prefixSelector($selector) {
    // If it starts with a dot, it's a class selector
    if (str_starts_with($selector, '.')) {
      $class_name = substr($selector, 1);
      // Don't double-prefix if already starts with uib-
      if (!str_starts_with($class_name, 'uib-')) {
        return '.uib-' . $class_name;
      }
    }
    // Elements (h3, p, div) and pseudo-selectors (:hover, ::before) stay as-is
    return $selector;
  }

  /**
   * Compiles instance styles from a layout JSON array.
   *
   * @param array $components
   *   The layout components array.
   *
   * @return string
   *   The compiled CSS.
   */
  public function compileInstanceStyles(array $components) {
    $css = "";
    $this->traverseAndCompile($components, $css);
    return $css;
  }

  /**
   * Helper to traverse tree and compile CSS.
   */
  protected function traverseAndCompile(array $components, &$css) {
    foreach ($components as $component) {
      if (empty($component['id'])) continue;
      
      $node_id = $component['id'];
      $rules = [];
      
      // Compile props (dimensions, flexbox)
      if (!empty($component['props'])) {
        foreach ($component['props'] as $key => $val) {
          if (!is_scalar($val) || empty($val)) continue;
          
          switch ($key) {
            case 'flexDirection': $rules[] = "flex-direction: $val !important;"; break;
            case 'justifyContent': $rules[] = "justify-content: $val !important;"; break;
            case 'alignItems': $rules[] = "align-items: $val !important;"; break;
            case 'alignSelf': $rules[] = "align-self: $val !important;"; break;
            case 'flexGrow': if ($val != 0) $rules[] = "flex-grow: $val !important;"; break;
            case 'flexShrink': if ($val != 1) $rules[] = "flex-shrink: $val !important;"; break;
          }
        }
      }
      
      if (!empty($rules)) {
        $css .= ".uib-$node_id { " . implode(' ', $rules) . " }\n";
      }
      
      // Compile instanceStyles - ONLY for Container and Plain Div
      $label = $component['label'] ?? '';
      $tag = $component['tag'] ?? 'div';
      $is_container_or_div = (str_starts_with($label, 'Container') || str_starts_with($label, 'Plain Div') || $tag === 'div');

      if ($is_container_or_div && !empty($component['instanceStyles'])) {
        $is_col = FALSE;
        if (!empty($component['props']['class'])) {
          $classes = explode(' ', $component['props']['class']);
          foreach ($classes as $c) {
            if (str_starts_with($c, 'uib-col-')) {
              $is_col = TRUE;
              break;
            }
          }
        }
        $css .= $this->compileStyleTree($component['instanceStyles'], '.uib-' . $node_id, $is_col);
      }
      
      // Traverse children
      if (!empty($component['children'])) {
        $this->traverseAndCompile($component['children'], $css);
      }
    }
  }

  /**
   * Compiles a style tree for instance styles.
   */
  protected function compileStyleTree(array $style_data, $parent_selector, $is_col = FALSE) {
    $css = '';
    $current_selector = $style_data['selector'] ?? '&';
    
    if (str_contains($current_selector, '&')) {
      $current_selector = str_replace('&', $parent_selector, $current_selector);
    } else {
      $current_selector = $parent_selector . ' ' . $current_selector;
    }

    $config = \Drupal::config('ui_builder.base_styles');
    $breakpoints = [
      'tablet' => $config->get('tablet_breakpoint') ?: '1024px',
      'mobile' => $config->get('mobile_breakpoint') ?: '767px',
    ];
    
    $custom_breakpoints = $config->get('custom_breakpoints') ?: [];
    foreach ($custom_breakpoints as $item) {
      if (!empty($item['key']) && !empty($item['value'])) {
        $breakpoints[$item['key']] = $item['value'];
      }
    }

    $base_rules = [];
    $grouped_rules = [];

    if (!empty($style_data['properties'])) {
      foreach ($style_data['properties'] as $prop => $val) {
        if ($is_col && ($prop === 'max-width' || $prop === 'flex')) continue;
        if (!empty($val)) $base_rules[] = "$prop: $val !important;";
      }
    }

    if (!empty($style_data['custom_properties'])) {
      foreach ($style_data['custom_properties'] as $prop => $val) {
        if (empty($val)) continue;

        $matched = false;
        foreach ($breakpoints as $key => $width) {
          if (str_starts_with($prop, $key . ':')) {
            $grouped_rules[$key][] = substr($prop, strlen($key) + 1) . ": $val !important;";
            $matched = true;
            break;
          }
        }

        if (!$matched) {
          if ($is_col && ($prop === 'max-width' || $prop === 'flex')) continue;
          $base_rules[] = "$prop: $val !important;";
        }
      }
    }

    if (!empty($base_rules)) {
      $css .= "$current_selector { " . implode(' ', $base_rules) . " }\n";
    }

    foreach ($grouped_rules as $key => $rules) {
      $width = $breakpoints[$key] ?? '0px';
      $css .= "@media (max-width: $width) {\n";
      $css .= "  $current_selector { " . implode(' ', $rules) . " }\n";
      $css .= "}\n";
    }

    if (!empty($style_data['children'])) {
      foreach ($style_data['children'] as $child) {
        $css .= $this->compileStyleTree($child, $current_selector, FALSE);
      }
    }

    return $css;
  }
}

