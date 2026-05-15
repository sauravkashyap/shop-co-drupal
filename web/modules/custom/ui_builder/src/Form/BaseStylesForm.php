<?php

namespace Drupal\ui_builder\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Configure UI Builder base styles.
 */
class BaseStylesForm extends ConfigFormBase {

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'ui_builder_base_styles_form';
  }

  /**
   * {@inheritdoc}
   */
  protected function getEditableConfigNames() {
    return ['ui_builder.base_styles'];
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $config = $this->config('ui_builder.base_styles');

    $form['help'] = [
      '#markup' => '<p>' . $this->t('Define global base styles for UI Builder elements. These styles act as your project Style Guide and override module defaults.') . '</p>',
    ];

    $form['styles_tabs'] = [
      '#type' => 'vertical_tabs',
      '#title' => $this->t('Element Categories'),
    ];

    $categories = [
      'layout' => [
        'title' => 'Layout',
        'elements' => [
          'container' => 'Container',
          'uib_full_width' => 'Full-width Container',
          'row' => 'Row',
          'column' => 'Column',
          'uib_section' => 'Section',
          'uib_article' => 'Article',
          'uib_main' => 'Main',
          'uib_aside' => 'Aside',
          'uib_nav' => 'Navigation',
          'uib_grid' => 'Grid',
          'uib_plain_div' => 'Plain Div',
        ],
      ],
      'typography' => [
        'title' => 'Typography',
        'elements' => [
          'h1' => 'Heading 1',
          'h2' => 'Heading 2',
          'h3' => 'Heading 3',
          'h4' => 'Heading 4',
          'h5' => 'Heading 5',
          'h6' => 'Heading 6',
          'p' => 'Paragraph',
          'uib_blockquote' => 'Quote',
          'uib_hr' => 'Divider',
        ],
      ],
      'media' => [
        'title' => 'Media & Interactive',
        'elements' => [
          'a' => 'Links',
          'button' => 'Buttons',
          'uib_img' => 'Image',
          'uib_svg' => 'SVG',
          'uib_video' => 'Video',
        ],
      ],
      'inline' => [
        'title' => 'Inline Styles',
        'elements' => [
          'uib_span' => 'Span / Text',
          'uib_strong' => 'Bold',
          'uib_em' => 'Italic',
          'uib_code' => 'Code',
          'uib_small' => 'Small',
        ],
      ],
      'tables_lists' => [
        'title' => 'Tables & Lists',
        'elements' => [
          'uib_table' => 'Table',
          'uib_thead' => 'Table Head',
          'uib_tbody' => 'Table Body',
          'uib_tr' => 'Table Row',
          'uib_th' => 'Table Header Cell',
          'uib_td' => 'Table Data Cell',
          'uib_ul' => 'Unordered List',
          'uib_ol' => 'Ordered List',
          'uib_li' => 'List Item',
        ],
      ],
      'forms' => [
        'title' => 'Forms',
        'elements' => [
          'uib_form' => 'Form Wrapper',
          'uib_label' => 'Label',
          'uib_input' => 'Input Field',
          'uib_select' => 'Select Dropdown',
          'uib_textarea' => 'Textarea',
        ],
      ],
    ];

    // Default CSS values for prepopulation.
    $defaults = [
      'container' => "width: 100%; margin-left: auto; margin-right: auto; padding-left: 16px; padding-right: 16px;",
      'uib_full_width' => "width: 100%; max-width: 100%; padding-left: 16px; padding-right: 16px;",
      'row' => "display: flex; flex-wrap: wrap; margin-right: -1rem; margin-left: -1rem;",
      'column' => "position: relative; width: 100%; padding-right: 1rem; padding-left: 1rem; flex: 1 0 0%;",
      'uib_section' => "display: block; width: 100%; margin-bottom: 2rem;",
      'uib_article' => "display: block; width: 100%; margin-bottom: 2rem;",
      'uib_main' => "display: block; width: 100%; margin-bottom: 2rem;",
      'uib_aside' => "display: block; background: #f9fafb; border: 1px solid #e5e7eb; padding: 16px; min-height: 200px;",
      'uib_nav' => "display: block; width: 100%; margin-bottom: 2rem;",
      'h1' => "font-size: 3rem; line-height: 1; font-weight: 800; margin-bottom: 1.5rem;",
      'h2' => "font-size: 2.25rem; line-height: 2.5rem; font-weight: 700; margin-bottom: 1.25rem;",
      'h3' => "font-size: 1.875rem; line-height: 2.25rem; font-weight: 700; margin-bottom: 1rem;",
      'h4' => "font-size: 1.5rem; line-height: 2rem; font-weight: 600; margin-bottom: 0.75rem;",
      'h5' => "font-size: 1.25rem; line-height: 1.75rem; font-weight: 600; margin-bottom: 0.5rem;",
      'h6' => "font-size: 1.125rem; line-height: 1.75rem; font-weight: 600; margin-bottom: 0.5rem;",
      'p' => "font-size: 1rem; line-height: 1.625; color: #4b5563; margin-bottom: 1rem;",
      'a' => "color: #2563eb; text-decoration: inherit;",
      'button' => "display: inline-block; padding: 0.5rem 1rem; font-size: 0.875rem; font-weight: 500; background-color: #2563eb; color: white; border-radius: 0.375rem; cursor: pointer;",
      'uib_img' => "max-width: 100%; height: auto; display: block; border-radius: 0.375rem;",
      'uib_blockquote' => "border-left: 4px solid #e5e7eb; padding-left: 1.5rem; font-style: italic; color: #4b5563; margin: 1.5rem 0;",
      'uib_hr' => "border: 0; border-top: 1px solid #e5e7eb; margin: 2rem 0;",
      'uib_table' => "width: 100%; border-collapse: collapse; margin-bottom: 1rem;",
      'uib_th' => "border: 1px solid #e5e7eb; padding: 0.75rem; background-color: #f9fafb; font-weight: 600;",
      'uib_td' => "border: 1px solid #e5e7eb; padding: 0.75rem; text-align: left;",
      'uib_ul' => "list-style-type: disc; margin-left: 1.5rem; margin-bottom: 1rem;",
      'uib_ol' => "list-style-type: decimal; margin-left: 1.5rem; margin-bottom: 1rem;",
      'uib_li' => "margin-bottom: 0.25rem; line-height: 1.625;",
      'uib_label' => "display: block; font-size: 0.875rem; font-weight: 500; margin-bottom: 0.5rem; color: #374151;",
      'uib_input' => "width: 100%; padding: 0.5rem 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem;",
      'uib_textarea' => "width: 100%; padding: 0.5rem 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem;",
    ];

    foreach ($categories as $cat_id => $cat_info) {
      $form[$cat_id] = [
        '#type' => 'details',
        '#title' => $cat_info['title'],
        '#group' => 'styles_tabs',
        '#open' => ($cat_id === 'layout'),
      ];

      foreach ($cat_info['elements'] as $key => $label) {
        $form[$cat_id][$key . '_css'] = [
          '#type' => 'textarea',
          '#title' => $this->t('@label CSS', ['@label' => $label]),
          '#default_value' => $config->get($key . '_css'),
          '#rows' => 3,
        ];

        if (in_array($key, ['a', 'button'])) {
          $form[$cat_id][$key . '_focus_css'] = [
            '#type' => 'textarea',
            '#title' => $this->t('@label Focus Styles', ['@label' => $label]),
            '#default_value' => $config->get($key . '_focus_css'),
            '#rows' => 2,
            '#placeholder' => 'e.g. outline: 2px solid blue;',
          ];
        }
      }
    }

    return parent::buildForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    $config = $this->configFactory()->getEditable('ui_builder.base_styles');
    $values = $form_state->getValues();

    foreach ($values as $key => $value) {
      if (str_ends_with($key, '_css')) {
        $config->set($key, $value);
      }
    }
    
    $config->save();

    // Trigger CSS file generation for overrides.
    $this->generateCssFile();

    parent::submitForm($form, $form_state);
  }

  /**
   * Generates a physical CSS file from the base styles configuration.
   */
  protected function generateCssFile() {
    $config = $this->config('ui_builder.base_styles');
    $css = "/* UI Builder Project Overrides — Generated from Admin Form */\n";
    $css .= "/* These styles override the default ui-builder-base.css */\n\n";

    $mapping = [
      'container' => '.uib-container',
      'uib_full_width' => '.uib-full-width',
      'row' => '.uib-row',
      'column' => '[class*="uib-col-"]',
      'uib_section' => '.uib-section',
      'uib_article' => '.uib-article',
      'uib_main' => '.uib-main',
      'uib_aside' => '.uib-aside',
      'uib_nav' => '.uib-nav',
      'uib_grid' => '.uib-grid',
      'h1' => '.uib-h1',
      'h2' => '.uib-h2',
      'h3' => '.uib-h3',
      'h4' => '.uib-h4',
      'h5' => '.uib-h5',
      'h6' => '.uib-h6',
      'p' => '.uib-p',
      'uib_blockquote' => '.uib-blockquote',
      'uib_hr' => '.uib-hr',
      'a' => '.uib-link',
      'button' => '.uib-button',
      'uib_img' => '.uib-img',
      'uib_svg' => '.uib-svg',
      'uib_video' => '.uib-video',
      'uib_span' => '.uib-span',
      'uib_strong' => '.uib-strong',
      'uib_em' => '.uib-em',
      'uib_code' => '.uib-code',
      'uib_small' => '.uib-small',
      'uib_table' => '.uib-table',
      'uib_thead' => '.uib-thead',
      'uib_tbody' => '.uib-tbody',
      'uib_tr' => '.uib-tr',
      'uib_th' => '.uib-th',
      'uib_td' => '.uib-td',
      'uib_ul' => '.uib-ul',
      'uib_ol' => '.uib-ol',
      'uib_li' => '.uib-li',
      'uib_form' => '.uib-form',
      'uib_label' => '.uib-label',
      'uib_input' => '.uib-input',
      'uib_select' => '.uib-select',
      'uib_textarea' => '.uib-textarea',
    ];

    foreach ($mapping as $config_key => $selector) {
      $class_css = $config->get($config_key . '_css');

      if (!empty($class_css)) {
        $css .= "$selector { $class_css }\n";
      }

      // Handle focus styles.
      if (in_array($config_key, ['a', 'button'])) {
        $focus_css = $config->get($config_key . '_focus_css');
        if (!empty($focus_css)) {
          $css .= "$selector:focus-visible { $focus_css }\n";
        }
      }
    }

    $directory = 'public://ui_builder';
    \Drupal::service('file_system')->prepareDirectory($directory, \Drupal\Core\File\FileSystemInterface::CREATE_DIRECTORY | \Drupal\Core\File\FileSystemInterface::MODIFY_PERMISSIONS);
    $destination = $directory . '/base_styles.css';
    \Drupal::service('file_system')->saveData($css, $destination, \Drupal\Core\File\FileSystemInterface::EXISTS_REPLACE);
    
    // Clear library cache to ensure the file is picked up.
    \Drupal::service('library.discovery')->clearCachedDefinitions();
  }

}
