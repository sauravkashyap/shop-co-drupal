<?php

namespace Drupal\ui_builder\Entity;

use Drupal\Core\Config\Entity\ConfigEntityBase;

/**
 * Defines the UI Builder Component entity.
 *
 * @ConfigEntityType(
 *   id = "ui_builder_component",
 *   label = @Translation("UI Builder Component"),
 *   handlers = {
 *     "list_builder" = "Drupal\ui_builder\UiBuilderComponentListBuilder",
 *     "form" = {
 *       "add" = "Drupal\ui_builder\Form\UiBuilderComponentForm",
 *       "edit" = "Drupal\ui_builder\Form\UiBuilderComponentForm",
 *       "delete" = "Drupal\Core\Entity\EntityDeleteForm"
 *     },
 *     "route_provider" = {
 *       "html" = "Drupal\Core\Entity\Routing\AdminHtmlRouteProvider",
 *     },
 *   },
 *   config_prefix = "ui_builder_component",
 *   admin_permission = "administer ui builder components",
 *   entity_keys = {
 *     "id" = "id",
 *     "label" = "label",
 *     "uuid" = "uuid"
 *   },
 *   links = {
 *     "collection" = "/admin/structure/ui-builder-components",
 *     "add-form" = "/admin/structure/ui-builder-components/add",
 *     "edit-form" = "/admin/structure/ui-builder-components/{ui_builder_component}",
 *     "delete-form" = "/admin/structure/ui-builder-components/{ui_builder_component}/delete"
 *   }
 * )
 */
class UiBuilderComponent extends ConfigEntityBase {

  /**
   * The UI Builder Component ID.
   *
   * @var string
   */
  protected $id;

  /**
   * The UI Builder Component label.
   *
   * @var string
   */
  protected $label;

  /**
   * The HTML template.
   *
   * @var string
   */
  protected $template;

  /**
   * The custom CSS.
   *
   * @var string
   */
  protected $css;

  /**
   * The custom JS.
   *
   * @var string
   */
  protected $javascript;

  /**
   * The field definitions in JSON format.
   *
   * @var string
   */
  protected $fields;

  /**
   * Gets the HTML template.
   */
  public function getTemplate() {
    return $this->template;
  }

  /**
   * Gets the custom CSS.
   */
  public function getCss() {
    return $this->css;
  }

  /**
   * Gets the custom JS.
   */
  public function getJavascript() {
    return $this->javascript;
  }

  /**
   * Gets the field definitions.
   */
  public function getFields() {
    return $this->fields;
  }

}
