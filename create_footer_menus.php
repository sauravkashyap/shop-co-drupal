<?php

use Drupal\system\Entity\Menu;
use Drupal\menu_link_content\Entity\MenuLinkContent;

$menus = [
  'footer_company' => [
    'title' => 'Company',
    'links' => ['About', 'Features', 'Works', 'Career']
  ],
  'footer_help' => [
    'title' => 'Help',
    'links' => ['Customer Support', 'Delivery Details', 'Terms & Conditions', 'Privacy Policy']
  ],
  'footer_faq' => [
    'title' => 'FAQ',
    'links' => ['Account', 'Manage Deliveries', 'Orders', 'Payments']
  ],
  'footer_resources' => [
    'title' => 'Resources',
    'links' => ['Free eBooks', 'Development Tutorial', 'How to - Blog', 'Youtube Playlist']
  ],
];

foreach ($menus as $id => $data) {
  // Check if menu exists
  $menu = Menu::load($id);
  if (!$menu) {
    $menu = Menu::create([
      'id' => $id,
      'label' => $data['title'],
      'description' => 'Footer menu: ' . $data['title'],
    ]);
    $menu->save();
    echo "Menu '{$data['title']}' created.\n";
  } else {
    echo "Menu '{$data['title']}' already exists.\n";
  }

  // Load existing links for this menu to avoid duplicates
  $query = \Drupal::entityQuery('menu_link_content')
    ->condition('menu_name', $id)
    ->accessCheck(FALSE);
  $existing_links = $query->execute();

  if (empty($existing_links)) {
    $weight = 0;
    foreach ($data['links'] as $link_title) {
      $menu_link = MenuLinkContent::create([
        'title' => $link_title,
        'link' => ['uri' => 'internal:/<front>'], // Dummy link for now
        'menu_name' => $id,
        'expanded' => TRUE,
        'weight' => $weight++,
      ]);
      $menu_link->save();
      echo " - Link '{$link_title}' added.\n";
    }
  } else {
    echo " - Links already exist.\n";
  }
}
