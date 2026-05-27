<?php
$config_factory = \Drupal::configFactory();
$config = $config_factory->getEditable('block.block.custom_theme_sitebranding');
$config->set('weight', -10);
$config->save();
