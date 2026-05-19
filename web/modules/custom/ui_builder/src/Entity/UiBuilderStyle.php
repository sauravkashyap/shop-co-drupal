<?php

namespace Drupal\ui_builder\Entity;

use Drupal\Core\Config\Entity\ConfigEntityBase;
use Drupal\ui_builder\UiBuilderStyleInterface;

/**
 * Defines the UI Builder Style entity.
 *
 * @ConfigEntityType(
 *   id = "ui_builder_style",
 *   label = @Translation("UI Builder Style"),
 *   handlers = {
 *     "view_builder" = "Drupal\Core\Entity\EntityViewBuilder",
 *     "list_builder" = "Drupal\ui_builder\UiBuilderStyleListBuilder",
 *     "form" = {
 *       "add" = "Drupal\ui_builder\Form\UiBuilderStyleForm",
 *       "edit" = "Drupal\ui_builder\Form\UiBuilderStyleForm",
 *       "delete" = "Drupal\Core\Entity\EntityDeleteForm"
 *     },
 *     "route_provider" = {
 *       "html" = "Drupal\Core\Entity\Routing\AdminHtmlRouteProvider",
 *     },
 *   },
 *   config_prefix = "ui_builder_style",
 *   admin_permission = "administer site configuration",
 *   entity_keys = {
 *     "id" = "id",
 *     "label" = "label",
 *     "uuid" = "uuid"
 *   },
 *   links = {
 *     "canonical" = "/admin/config/ui-builder/styles/{ui_builder_style}",
 *     "add-form" = "/admin/config/ui-builder/styles/add",
 *     "edit-form" = "/admin/config/ui-builder/styles/{ui_builder_style}/edit",
 *     "delete-form" = "/admin/config/ui-builder/styles/{ui_builder_style}/delete",
 *     "collection" = "/admin/config/ui-builder/styles"
 *   },
 *   config_export = {
 *     "id",
 *     "label",
 *     "data"
 *   }
 * )
 */
class UiBuilderStyle extends ConfigEntityBase implements UiBuilderStyleInterface {

  /**
   * The UI Builder Style ID.
   *
   * @var string
   */
  protected $id;

  /**
   * The UI Builder Style label.
   *
   * @var string
   */
  protected $label;

  /**
   * The style tree (JSON).
   *
   * @var array
   */
  protected $data = [];

  /**
   * {@inheritdoc}
   */
  public function getData() {
    return $this->data;
  }

  /**
   * {@inheritdoc}
   */
  public function setData(array $data) {
    $this->data = $data;
    return $this;
  }

  /**
   * {@inheritdoc}
   */
  public function postSave(\Drupal\Core\Entity\EntityStorageInterface $storage, $update = TRUE) {
    parent::postSave($storage, $update);
    // Recompile CSS when a style is saved.
    \Drupal::service('ui_builder.css_compiler')->compileAll();
  }

  /**
   * {@inheritdoc}
   */
  public static function postDelete(\Drupal\Core\Entity\EntityStorageInterface $storage, array $entities) {
    parent::postDelete($storage, $entities);
    // Recompile CSS when a style is deleted.
    \Drupal::service('ui_builder.css_compiler')->compileAll();
  }

}
