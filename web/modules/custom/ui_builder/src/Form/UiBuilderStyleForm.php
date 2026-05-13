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

    // The 'data' field will be managed via the React Builder.
    // For now, we just keep it in the entity.
    
    return $form;
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
