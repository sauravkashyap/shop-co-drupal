<?php

namespace Drupal\ui_builder\Entity;

use Drupal\Core\Config\Entity\ConfigEntityBase;

/**
 * Defines the UI Builder Style entity.
 *
 * @ConfigEntityType(
 *   id = "ui_builder_style",
 *   label = @Translation("UI Builder Style"),
 *   handlers = {
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
 *   admin_permission = "administer ui builder styles",
 *   entity_keys = {
 *     "id" = "id",
 *     "label" = "label",
 *     "uuid" = "uuid"
 *   },
 *   links = {
 *     "collection" = "/admin/structure/ui-builder-styles",
 *     "add-form" = "/admin/structure/ui-builder-styles/add",
 *     "edit-form" = "/admin/structure/ui-builder-styles/{ui_builder_style}",
 *     "delete-form" = "/admin/structure/ui-builder-styles/{ui_builder_style}/delete"
 *   },
 *   config_export = {
 *     "id",
 *     "label",
 *     "css_content",
 *     "selector_type"
 *   }
 * )
 */
class UiBuilderStyle extends ConfigEntityBase {

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
   * The actual CSS content.
   *
   * @var string
   */
  protected $css_content;

  /**
   * Whether it's a 'class' or 'global' style.
   *
   * @var string
   */
  protected $selector_type = 'class';

  /**
   * Gets the CSS content.
   */
  public function getCssContent() {
    return $this->css_content;
  }

}
