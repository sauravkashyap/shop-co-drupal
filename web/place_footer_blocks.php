<?php

$config_factory = \Drupal::configFactory();

// Site branding in footer_col_1
$branding_config = [
  'uuid' => \Drupal::service('uuid')->generate(),
  'langcode' => 'en',
  'status' => TRUE,
  'dependencies' => ['module' => ['system'], 'theme' => ['custom_theme']],
  'id' => 'custom_theme_footer_branding',
  'theme' => 'custom_theme',
  'region' => 'footer_col_1',
  'weight' => 0,
  'provider' => NULL,
  'plugin' => 'system_branding_block',
  'settings' => [
    'id' => 'system_branding_block',
    'label' => 'Site branding (footer)',
    'label_display' => '0',
    'provider' => 'system',
    'use_site_logo' => FALSE,
    'use_site_name' => TRUE,
    'use_site_slogan' => FALSE,
  ],
  'visibility' => [],
];
$config_factory->getEditable('block.block.custom_theme_footer_branding')->setData($branding_config)->save();
echo "Placed footer branding block\n";

// Quick Links menu in footer_col_2
$ql_config = [
  'uuid' => \Drupal::service('uuid')->generate(),
  'langcode' => 'en',
  'status' => TRUE,
  'dependencies' => ['config' => ['system.menu.footer-quick-links'], 'module' => ['system'], 'theme' => ['custom_theme']],
  'id' => 'custom_theme_footer_quick_links',
  'theme' => 'custom_theme',
  'region' => 'footer_col_2',
  'weight' => 0,
  'provider' => NULL,
  'plugin' => 'system_menu_block:footer-quick-links',
  'settings' => [
    'id' => 'system_menu_block:footer-quick-links',
    'label' => 'Quick links',
    'label_display' => '1',
    'provider' => 'system',
    'level' => 1,
    'depth' => 1,
    'expand_all_items' => TRUE,
  ],
  'visibility' => [],
];
$config_factory->getEditable('block.block.custom_theme_footer_quick_links')->setData($ql_config)->save();
echo "Placed Quick Links block\n";

// About menu in footer_col_3
$about_config = [
  'uuid' => \Drupal::service('uuid')->generate(),
  'langcode' => 'en',
  'status' => TRUE,
  'dependencies' => ['config' => ['system.menu.footer-about'], 'module' => ['system'], 'theme' => ['custom_theme']],
  'id' => 'custom_theme_footer_about',
  'theme' => 'custom_theme',
  'region' => 'footer_col_3',
  'weight' => 0,
  'provider' => NULL,
  'plugin' => 'system_menu_block:footer-about',
  'settings' => [
    'id' => 'system_menu_block:footer-about',
    'label' => 'About',
    'label_display' => '1',
    'provider' => 'system',
    'level' => 1,
    'depth' => 1,
    'expand_all_items' => TRUE,
  ],
  'visibility' => [],
];
$config_factory->getEditable('block.block.custom_theme_footer_about')->setData($about_config)->save();
echo "Placed About block\n";

// Help Centre menu in footer_col_4
$help_config = [
  'uuid' => \Drupal::service('uuid')->generate(),
  'langcode' => 'en',
  'status' => TRUE,
  'dependencies' => ['config' => ['system.menu.footer-help'], 'module' => ['system'], 'theme' => ['custom_theme']],
  'id' => 'custom_theme_footer_help',
  'theme' => 'custom_theme',
  'region' => 'footer_col_4',
  'weight' => 0,
  'provider' => NULL,
  'plugin' => 'system_menu_block:footer-help',
  'settings' => [
    'id' => 'system_menu_block:footer-help',
    'label' => 'Help Centre',
    'label_display' => '1',
    'provider' => 'system',
    'level' => 1,
    'depth' => 1,
    'expand_all_items' => TRUE,
  ],
  'visibility' => [],
];
$config_factory->getEditable('block.block.custom_theme_footer_help')->setData($help_config)->save();
echo "Placed Help Centre block\n";
