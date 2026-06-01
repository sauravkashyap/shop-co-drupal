<?php

namespace Drupal\ui_builder\Form;

use Drupal\Core\Entity\EntityForm;
use Drupal\Core\Form\FormStateInterface;

/**
 * Form handler for the UI Builder Style add and edit forms.
 */
class UiBuilderStyleForm extends EntityForm {

  /**
   * {@inheritdoc}
   */
  public function form(array $form, FormStateInterface $form_state) {
    $form = parent::form($form, $form_state);

    /** @var \Drupal\ui_builder\Entity\UiBuilderStyle $style */
    $style = $this->entity;

    $form['label'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Style Name'),
      '#maxlength' => 255,
      '#default_value' => $style->label(),
      '#description' => $this->t('The human-readable name of the style.'),
      '#required' => TRUE,
      '#attributes' => ['id' => 'edit-label'],
    ];

    // Use a plain textfield for ID so we can allow hyphens (valid in CSS class names).
    // machine_name element enforces [a-z0-9_] only and cannot be overridden easily.
    $form['id'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Machine-readable name'),
      '#default_value' => $style->id(),
      '#disabled' => !$style->isNew(),
      '#required' => $style->isNew(),
      '#attributes' => ['id' => 'edit-id'],
      '#description' => $this->t('A unique machine-readable name for the CSS class. Can only contain lowercase letters, numbers, hyphens, and underscores. E.g. <code>menu-card</code> generates class <code>.uib-menu-card</code>.'),
      '#element_validate' => $style->isNew() ? [[static::class, 'validateMachineName']] : [],
    ];

    $form['data'] = [
      '#type' => 'textarea',
      '#title' => $this->t('Style Data'),
      '#default_value' => json_encode($style->getData(), JSON_PRETTY_PRINT),
      '#attributes' => [
        'id' => 'ui-builder-style-data-input',
        'style' => 'display: none;',
      ],
    ];

    // React App Mount Point
    $base_config = \Drupal::config('ui_builder.base_styles');
    $breakpoints = [
      'tablet' => $base_config->get('tablet_breakpoint') ?: '1024px',
      'mobile' => $base_config->get('mobile_breakpoint') ?: '767px',
    ];

    $custom_breakpoints = $base_config->get('custom_breakpoints') ?: [];
    foreach ($custom_breakpoints as $item) {
      if (!empty($item['key']) && !empty($item['value'])) {
        $breakpoints[$item['key']] = $item['value'];
      }
    }

    $form['react_mount'] = [
      '#type' => 'container',
      '#attributes' => [
        'id' => 'ui-builder-style-mount',
        'class' => ['style-builder-standalone'],
      ],
      '#attached' => [
        'library' => [
          'ui_builder/builder_app',
          'ui_builder/ui_builder_slider',
          'ui_builder/ui_builder_fontawesome',
        ],
        'drupalSettings' => [
          'ui_builder' => [
            'breakpoints' => $breakpoints,
            'csrf_token' => \Drupal::csrfToken()->get('rest'),
          ],
        ],
      ],
      '#weight' => -10,
    ];

    return $form;
  }

  /**
   * Custom validator for the style machine name — allows hyphens.
   */
  public static function validateMachineName(array &$element, FormStateInterface $form_state, array &$form) {
    $value = trim($element['#value']);
    if (empty($value)) {
      $form_state->setError($element, t('The machine-readable name is required.'));
      return;
    }
    if (!preg_match('/^[a-z0-9][a-z0-9_-]*$/', $value)) {
      $form_state->setError($element, t('The machine-readable name must start with a lowercase letter or digit, and can only contain lowercase letters, numbers, hyphens, and underscores.'));
      return;
    }
    // Check uniqueness.
    if (\Drupal\ui_builder\Entity\UiBuilderStyle::load($value)) {
      $form_state->setError($element, t('The machine-readable name %name is already taken.', ['%name' => $value]));
    }
  }

  /**
   * {@inheritdoc}
   */
  public function copyFormValuesToEntity(\Drupal\Core\Entity\EntityInterface $entity, array $form, FormStateInterface $form_state) {
    parent::copyFormValuesToEntity($entity, $form, $form_state);

    $data_string = $form_state->getValue('data');
    if (!empty($data_string)) {
      $data = json_decode($data_string, TRUE);
      if (is_array($data)) {
        $entity->setData($data);
      }
    }
  }

  /**
   * {@inheritdoc}
   */
  public function save(array $form, FormStateInterface $form_state) {
    /** @var \Drupal\ui_builder\Entity\UiBuilderStyle $style */
    $style = $this->entity;

    $status = $style->save();

    // Recompile all CSS after saving so changes are immediately reflected on the frontend.
    \Drupal::service('ui_builder.css_compiler')->compileAll();

    if ($status === SAVED_NEW) {
      $this->messenger()->addMessage($this->t('Created the %label UI Builder Style.', [
        '%label' => $style->label(),
      ]));
    }
    else {
      $this->messenger()->addMessage($this->t('Saved the %label UI Builder Style.', [
        '%label' => $style->label(),
      ]));
    }

    $form_state->setRedirect('entity.ui_builder_style.collection');
  }

}
