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
      '#markup' => '<p>' . $this->t('Define global base styles for UI Builder elements. These styles will override the module defaults and act as the Style Guide.') . '</p>',
    ];

    $elements = [
      'h1' => 'Heading 1',
      'h2' => 'Heading 2',
      'h3' => 'Heading 3',
      'h4' => 'Heading 4',
      'h5' => 'Heading 5',
      'h6' => 'Heading 6',
      'p' => 'Paragraph',
      'a' => 'Links',
      'button' => 'Buttons',
    ];

    $form['styles'] = [
      '#type' => 'vertical_tabs',
      '#title' => $this->t('Element Styles'),
    ];

    foreach ($elements as $tag => $label) {
      $form[$tag . '_section'] = [
        '#type' => 'details',
        '#title' => $label,
        '#group' => 'styles',
      ];

      $description = $this->t('Enter raw CSS properties (e.g., <code>font-size: 1.5rem; color: #333;</code>).');
      if (in_array($tag, ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'])) {
        $description .= ' ' . $this->t('Best Practice: Use <code>rem</code> units for font sizes to support browser zooming.');
      }

      $form[$tag . '_section'][$tag . '_css'] = [
        '#type' => 'textarea',
        '#title' => $this->t('@label CSS', ['@label' => $label]),
        '#description' => $description,
        '#default_value' => $config->get($tag . '_css'),
        '#rows' => 4,
      ];

      // Add Focus state fields for interactive elements.
      if (in_array($tag, ['a', 'button'])) {
        $form[$tag . '_section'][$tag . '_focus_css'] = [
          '#type' => 'textarea',
          '#title' => $this->t('@label Focus Styles', ['@label' => $label]),
          '#description' => $this->t('CSS for the <code>:focus-visible</code> state. Essential for accessibility (e.g., <code>outline: 3px solid orange;</code>).'),
          '#default_value' => $config->get($tag . '_focus_css'),
          '#rows' => 2,
        ];
      }
    }

    return parent::buildForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    $config = $this->config('ui_builder.base_styles');
    
    $tags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'a', 'button'];
    foreach ($tags as $tag) {
      $config->set($tag . '_css', $form_state->getValue($tag . '_css'));
      if ($form_state->hasValue($tag . '_focus_css')) {
        $config->set($tag . '_focus_css', $form_state->getValue($tag . '_focus_css'));
      }
    }
    
    $config->save();

    parent::submitForm($form, $form_state);
  }

}
