<?php

namespace Drupal\ui_builder\Form;

use Drupal\Core\Entity\EntityDeleteForm;
use Drupal\Core\Form\FormStateInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Provides a confirmation form for deleting a UI Builder Component.
 */
class UiBuilderComponentDeleteForm extends EntityDeleteForm {

  /**
   * The usage tracker service.
   *
   * @var \Drupal\ui_builder\Service\UsageTracker
   */
  protected $usageTracker;

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    $instance = parent::create($container);
    $instance->usageTracker = $container->get('ui_builder.usage_tracker');
    return $instance;
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $entity = $this->getEntity();
    $usage = $this->usageTracker->getUsage($entity->id());

    if (!empty($usage)) {
      $form['#title'] = $this->t('Cannot delete %label', ['%label' => $entity->label()]);
      
      $form['description'] = [
        '#markup' => '<p>' . $this->t('This component is being used in the following places and cannot be deleted until these references are removed:') . '</p>',
      ];

      $items = [];
      foreach ($usage as $item) {
        $items[] = [
          '#type' => 'link',
          '#title' => $item['label'],
          '#url' => $item['url'],
          '#attributes' => ['target' => '_blank'],
        ];
      }

      $form['usage_list'] = [
        '#theme' => 'item_list',
        '#items' => $items,
      ];

      $form['actions'] = ['#type' => 'actions'];
      $form['actions']['cancel'] = [
        '#type' => 'link',
        '#title' => $this->t('Cancel'),
        '#url' => $this->getCancelUrl(),
        '#attributes' => ['class' => ['button']],
      ];

      // Remove the delete button
      unset($form['actions']['submit']);
      
      return $form;
    }

    return parent::buildForm($form, $form_state);
  }

}
