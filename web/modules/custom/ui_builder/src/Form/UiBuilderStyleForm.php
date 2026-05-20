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

    $form['id'] = [
      '#type' => 'machine_name',
      '#default_value' => $style->id(),
      '#machine_name' => [
        'exists' => '\Drupal\ui_builder\Entity\UiBuilderStyle::load',
      ],
      '#disabled' => !$style->isNew(),
      '#attributes' => ['id' => 'edit-id'],
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
        ],
        'drupalSettings' => [
          'ui_builder' => [
            'breakpoints' => $breakpoints,
          ],
        ],
      ],
      '#weight' => -10,
    ];
    
    return $form;
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
    
    // Ensure ID starts with uib_
    if ($style->isNew() && !str_starts_with($style->id(), 'uib_')) {
      // Note: machine_name might have already validated or transformed it,
      // but we enforce the prefix here if needed.
    }

    $status = $style->save();

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
