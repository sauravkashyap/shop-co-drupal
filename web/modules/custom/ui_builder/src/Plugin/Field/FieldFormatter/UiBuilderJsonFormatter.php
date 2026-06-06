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

    /** @var \Drupal\ui_builder\UiBuilderRenderer $renderer */
    $renderer = \Drupal::service('ui_builder.renderer');

    foreach ($items as $delta => $item) {
      if (!empty($item->value)) {
        $json_data = json_decode($item->value, TRUE);
        if (json_last_error() === JSON_ERROR_NONE && is_array($json_data)) {
          $render_array = $renderer->buildRenderArray($json_data, $item->getEntity());

          $node = $item->getEntity();
          $node_id = $node->id();
          $field_name = $this->fieldDefinition->getName();
          $uri = "public://ui_builder/uib-node-$node_id-$field_name.css";
          
          $css = \Drupal::service('ui_builder.css_compiler')->compileInstanceStyles($json_data);
          if ($css) {
            $directory = 'public://ui_builder';
            \Drupal::service('file_system')->prepareDirectory($directory, \Drupal\Core\File\FileSystemInterface::CREATE_DIRECTORY | \Drupal\Core\File\FileSystemInterface::MODIFY_PERMISSIONS);
            \Drupal::service('file_system')->saveData($css, $uri, \Drupal\Core\File\FileSystemInterface::EXISTS_REPLACE);
          }

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
            ],
          ];

          if (strpos($item->value, 'uib-accordion') !== FALSE) {
            $elements[$delta]['#attached']['library'][] = 'ui_builder/ui_builder_accordion';
          }
          if (strpos($item->value, 'swiper') !== FALSE) {
            $elements[$delta]['#attached']['library'][] = 'ui_builder/ui_builder_slider';
          }

          if (file_exists($uri)) {
            $url = \Drupal::service('file_url_generator')->generateString($uri);
            $url .= '?v=' . filemtime($uri);
            
            $elements[$delta]['#attached']['html_head'][] = [
              [
                '#type' => 'html_tag',
                '#tag' => 'link',
                '#attributes' => [
                  'rel' => 'stylesheet',
                  'href' => $url,
                ],
              ],
              'ui_builder_dynamic_css_' . $delta,
            ];
          }
        }
        else {
          $elements[$delta] = ['#markup' => '<!-- Invalid UI Builder JSON -->'];
        }
      }
    }

    return $elements;
  }

}
