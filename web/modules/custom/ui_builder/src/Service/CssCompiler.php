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
        foreach ($node['custom_properties'] as $prop => $value) {
          if (!empty($value)) {
            $css .= "  " . $prop . ": " . $value . ";\n";
          }
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

}
