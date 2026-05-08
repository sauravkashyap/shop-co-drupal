<?php

namespace Drupal\ui_builder\Controller;

use Drupal\Core\Controller\ControllerBase;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Drupal\ui_builder\Entity\UiBuilderComponent;

/**
 * Controller for UI Builder actions.
 */
class UiBuilderController extends ControllerBase {

  /**
   * Saves a component from the builder.
   */
  public function saveComponent(Request $request) {
    $data = json_decode($request->getContent(), TRUE);
    
    if (empty($data['id']) || empty($data['label']) || empty($data['layout_tree'])) {
      return new JsonResponse(['error' => 'Missing required fields'], 400);
    }

    $id = $data['id'];
    $label = $data['label'];
    $layout_tree = is_string($data['layout_tree']) ? $data['layout_tree'] : json_encode($data['layout_tree']);
    $form_schema = !empty($data['form_schema']) ? (is_string($data['form_schema']) ? $data['form_schema'] : json_encode($data['form_schema'])) : '{}';

    $storage = $this->entityTypeManager()->getStorage('ui_builder_component');
    $existing = $storage->load($id);

    if ($existing) {
      $existing->set('label', $label);
      $existing->set('layout_tree', $layout_tree);
      $existing->set('form_schema', $form_schema);
      $existing->save();
      $status = 'updated';
    }
    else {
      $component = UiBuilderComponent::create([
        'id' => $id,
        'label' => $label,
        'layout_tree' => $layout_tree,
        'form_schema' => $form_schema,
      ]);
      $component->save();
      $status = 'created';
    }

    return new JsonResponse([
      'success' => TRUE,
      'status' => $status,
      'component' => [
        'id' => $id,
        'label' => $label,
      ],
    ]);
  }

  /**
   * Lists all available components.
   */
  public function listComponents() {
    $storage = $this->entityTypeManager()->getStorage('ui_builder_component');
    $components = $storage->loadMultiple();
    $result = [];
    foreach ($components as $component) {
      $result[] = [
        'id' => $component->id(),
        'label' => $component->label(),
        'form_schema' => json_decode($component->getFormSchema() ?: '{}', TRUE),
      ];
    }
    return new JsonResponse($result);
  }

  /**
   * Lists all available styles.
   */
  public function listStyles() {
    $storage = $this->entityTypeManager()->getStorage('ui_builder_style');
    $styles = $storage->loadMultiple();
    $result = [];
    foreach ($styles as $style) {
      $result[] = [
        'id' => $style->id(),
        'label' => $style->label(),
        'css_content' => $style->getCssContent(),
        'selector_type' => $style->get('selector_type'),
      ];
    }
    return new JsonResponse($result);
  }

  /**
   * Saves a style from the builder.
   */
  public function saveStyle(Request $request) {
    $data = json_decode($request->getContent(), TRUE);
    
    if (empty($data['id']) || empty($data['label']) || !isset($data['css_content'])) {
      return new JsonResponse(['error' => 'Missing required fields'], 400);
    }

    $id = $data['id'];
    $label = $data['label'];
    $css_content = $data['css_content'];
    $selector_type = $data['selector_type'] ?? 'class';

    $storage = $this->entityTypeManager()->getStorage('ui_builder_style');
    $existing = $storage->load($id);

    if ($existing) {
      $existing->set('label', $label);
      $existing->set('css_content', $css_content);
      $existing->set('selector_type', $selector_type);
      $existing->save();
      $status = 'updated';
    }
    else {
      $style = \Drupal\ui_builder\Entity\UiBuilderStyle::create([
        'id' => $id,
        'label' => $label,
        'css_content' => $css_content,
        'selector_type' => $selector_type,
      ]);
      $style->save();
      $status = 'created';
    }

    return new JsonResponse([
      'success' => TRUE,
      'status' => $status,
      'style' => [
        'id' => $id,
        'label' => $label,
      ],
    ]);
  }

}
