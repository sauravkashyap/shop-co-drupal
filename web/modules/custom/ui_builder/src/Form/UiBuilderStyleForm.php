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
    ];

    $form['id'] = [
      '#type' => 'machine_name',
      '#default_value' => $style->id(),
      '#machine_name' => [
        'exists' => '\Drupal\ui_builder\Entity\UiBuilderStyle::load',
      ],
      '#disabled' => !$style->isNew(),
    ];

    $form['css_content'] = [
      '#type' => 'textarea',
      '#title' => $this->t('CSS Rules'),
      '#default_value' => $style->getCssContent(),
      '#description' => $this->t('Enter the CSS rules for this style. Example: <br/><code>.my-style { border: 1px solid red; }</code>'),
      '#rows' => 10,
      '#required' => TRUE,
    ];

    $form['selector_type'] = [
      '#type' => 'select',
      '#title' => $this->t('Selector Type'),
      '#options' => [
        'class' => $this->t('Class based (applied to elements)'),
        'global' => $this->t('Global (always loaded)'),
      ],
      '#default_value' => $style->get('selector_type') ?: 'class',
    ];

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function save(array $form, FormStateInterface $form_state) {
    /** @var \Drupal\ui_builder\Entity\UiBuilderStyle $style */
    $style = $this->entity;
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
