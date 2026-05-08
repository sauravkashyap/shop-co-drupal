<?php

namespace Drupal\ui_builder\Form;

use Drupal\Core\Entity\EntityForm;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\File\FileSystemInterface;

/**
 * Form handler for the UI Builder Component add and edit forms.
 */
class UiBuilderComponentForm extends EntityForm {

  /**
   * {@inheritdoc}
   */
  public function form(array $form, FormStateInterface $form_state) {
    $form = parent::form($form, $form_state);

    /** @var \Drupal\ui_builder\Entity\UiBuilderComponent $component */
    $component = $this->entity;

    $form['label'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Component Name'),
      '#maxlength' => 255,
      '#default_value' => $component->label(),
      '#description' => $this->t('The human-readable name of the component.'),
      '#required' => TRUE,
    ];

    $form['id'] = [
      '#type' => 'machine_name',
      '#default_value' => $component->id(),
      '#machine_name' => [
        'exists' => '\Drupal\ui_builder\Entity\UiBuilderComponent::load',
      ],
      '#disabled' => !$component->isNew(),
    ];

    // React App Mount Point at the top
    $form['react_mount'] = [
      '#type' => 'container',
      '#attributes' => ['id' => 'ui-builder-react-app'],
      '#attached' => [
        'library' => [
          'ui_builder/builder_app',
        ],
      ],
      '#weight' => -10,
    ];

    // Technical details container (hidden by default)
    $form['technical_details'] = [
      '#type' => 'details',
      '#title' => $this->t('Technical Details'),
      '#open' => FALSE,
      '#weight' => 10,
    ];

    // Component Layout Tree
    $form['technical_details']['layout_tree'] = [
      '#type' => 'textarea',
      '#title' => $this->t('Layout Tree (JSON)'),
      '#default_value' => $component->getLayoutTree(),
      '#description' => $this->t('The JSON representation of the component structure.'),
      '#rows' => 5,
      '#attributes' => ['id' => 'ui-builder-layout-tree-input'],
    ];

    // CSS
    $form['technical_details']['css'] = [
      '#type' => 'textarea',
      '#title' => $this->t('Custom CSS'),
      '#default_value' => $component->getCss(),
      '#description' => $this->t('Custom CSS for this component.'),
      '#rows' => 5,
    ];

    // JavaScript
    $form['technical_details']['javascript'] = [
      '#type' => 'textarea',
      '#title' => $this->t('Custom JavaScript'),
      '#default_value' => $component->getJavascript(),
      '#description' => $this->t('Custom Javascript for this component.'),
      '#rows' => 5,
    ];

    // Form Schema
    $form['technical_details']['form_schema'] = [
      '#type' => 'textarea',
      '#title' => $this->t('Form Schema (JSON)'),
      '#default_value' => $component->getFormSchema() ?: "{\n  \"title\": {\"type\": \"text\", \"label\": \"Title\"}\n}",
      '#description' => $this->t('JSON structure defining the fields for the visual builder.'),
      '#rows' => 3,
      '#attributes' => ['id' => 'ui-builder-form-schema-input'],
    ];

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function save(array $form, FormStateInterface $form_state) {
    /** @var \Drupal\ui_builder\Entity\UiBuilderComponent $component */
    $component = $this->entity;
    $status = $component->save();

    // Trigger asset generation for this component.
    $this->generateAssets($component);

    if ($status === SAVED_NEW) {
      $this->messenger()->addMessage($this->t('Created the %label UI Builder Component.', [
        '%label' => $component->label(),
      ]));
    }
    else {
      $this->messenger()->addMessage($this->t('Saved the %label UI Builder Component.', [
        '%label' => $component->label(),
      ]));
    }

    $form_state->setRedirect('entity.ui_builder_component.collection');
  }

  /**
   * Generates physical CSS and JS files for the component.
   */
  protected function generateAssets($component) {
    /** @var \Drupal\Core\File\FileSystemInterface $file_system */
    $file_system = \Drupal::service('file_system');
    
    $css_dir = 'public://ui_builder/css';
    $js_dir = 'public://ui_builder/js';

    $file_system->prepareDirectory($css_dir, FileSystemInterface::CREATE_DIRECTORY | FileSystemInterface::MODIFY_PERMISSIONS);
    $file_system->prepareDirectory($js_dir, FileSystemInterface::CREATE_DIRECTORY | FileSystemInterface::MODIFY_PERMISSIONS);

    // Generate CSS
    $css_code = $component->getCss();
    if (!empty(trim($css_code))) {
      // Very basic namespacing prefix (Can be improved later)
      // .ui-builder-COMPONENT_ID
      $prefix = '.ui-builder-' . $component->id();
      $file_system->saveData("/* Generated CSS for " . $component->id() . " */\n" . $css_code, $css_dir . '/' . $component->id() . '.css', FileSystemInterface::EXISTS_REPLACE);
    } else {
      // Delete if empty
      if (file_exists($css_dir . '/' . $component->id() . '.css')) {
        $file_system->delete($css_dir . '/' . $component->id() . '.css');
      }
    }

    // Generate JS
    $js_code = $component->getJavascript();
    if (!empty(trim($js_code))) {
      $wrapped_js = "(function (Drupal, once) {\n";
      $wrapped_js .= "  Drupal.behaviors.uiBuilder" . ucfirst($component->id()) . " = {\n";
      $wrapped_js .= "    attach: function (context, settings) {\n";
      $wrapped_js .= "      once('uiBuilder" . ucfirst($component->id()) . "', '.ui-builder-" . $component->id() . "', context).forEach(function (element) {\n";
      $wrapped_js .= "        " . $js_code . "\n";
      $wrapped_js .= "      });\n";
      $wrapped_js .= "    }\n";
      $wrapped_js .= "  };\n";
      $wrapped_js .= "})(Drupal, once);\n";

      $file_system->saveData($wrapped_js, $js_dir . '/' . $component->id() . '.js', FileSystemInterface::EXISTS_REPLACE);
    } else {
      // Delete if empty
      if (file_exists($js_dir . '/' . $component->id() . '.js')) {
        $file_system->delete($js_dir . '/' . $component->id() . '.js');
      }
    }
  }

}
