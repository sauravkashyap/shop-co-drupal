<?php

use Drupal\block\Entity\Block;

// Newsletter Webform Block
$newsletter_id = 'newsletter_subscription';
if ($existing_newsletter = Block::load($newsletter_id)) {
  $existing_newsletter->delete();
}

$newsletter_block = Block::create([
  'id' => $newsletter_id,
  'theme' => 'custom_theme',
  'plugin' => 'webform_block',
  'weight' => 0,
  'settings' => [
    'label' => 'Newsletter Subscription',
    'label_display' => '0',
    'webform_id' => 'newsletter_subscription',
  ],
  'region' => 'newsletter',
  'visibility' => [],
]);
$newsletter_block->save();
echo "Newsletter block placed in 'newsletter' region.\n";

// Footer Menus mapping to specific columns
$footer_menus = [
  'footer_company' => 'footer_col_1',
  'footer_help' => 'footer_col_2',
  'footer_faq' => 'footer_col_3',
  'footer_resources' => 'footer_col_4',
];

$weight = 0;
foreach ($footer_menus as $menu_id => $region) {
  $block_id = 'footer_' . str_replace('footer_', '', $menu_id);
  
  // Delete existing block if it exists
  if ($existing_block = Block::load($block_id)) {
    $existing_block->delete();
  }

  $block = Block::create([
    'id' => $block_id,
    'theme' => 'custom_theme',
    'plugin' => 'system_menu_block:' . $menu_id,
    'weight' => $weight++,
    'settings' => [
      'label' => ucfirst(str_replace('footer_', '', $menu_id)),
      'label_display' => '0',
      'level' => 1,
      'depth' => 0,
    ],
    'region' => $region,
    'visibility' => [],
  ]);
  $block->save();
  echo "Menu block '{$block_id}' placed in '{$region}' region.\n";
}
