<?php

namespace Drupal\ui_builder;

use Drupal\Core\Config\Entity\ConfigEntityInterface;

/**
 * Provides an interface for defining UI Builder Style entities.
 */
interface UiBuilderStyleInterface extends ConfigEntityInterface {

  /**
   * Gets the style tree data.
   *
   * @return array
   *   The style tree data.
   */
  public function getData();

  /**
   * Sets the style tree data.
   *
   * @param array $data
   *   The style tree data.
   *
   * @return $this
   */
  public function setData(array $data);

}
