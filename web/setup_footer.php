<?php

use Drupal\system\Entity\Menu;
use Drupal\menu_link_content\Entity\MenuLinkContent;

// Create footer menus
$menus = [
  'footer-quick-links' => 'Footer Quick Links',
  'footer-about'       => 'Footer About',
  'footer-help'        => 'Footer Help Centre',
];

foreach ($menus as $id => $label) {
  if (!Menu::load($id)) {
    Menu::create(['id' => $id, 'label' => $label, 'description' => ''])->save();
    echo "Created menu: $label\n";
  } else {
    echo "Menu already exists: $label\n";
  }
}

// Quick Links items
$quick_links = ['Home' => '/', 'About us' => '/about', 'Offers' => '/offers', 'Services' => '/services', 'Contact us' => '/contact'];
foreach ($quick_links as $title => $uri) {
  MenuLinkContent::create([
    'title'     => $title,
    'link'      => ['uri' => 'internal:' . $uri],
    'menu_name' => 'footer-quick-links',
    'expanded'  => FALSE,
  ])->save();
}
echo "Created Quick Links items\n";

// About items
$about = ['How it works' => '#', 'Pricing' => '#', 'Promotions' => '#', 'Refer a friend' => '#'];
foreach ($about as $title => $uri) {
  MenuLinkContent::create([
    'title'     => $title,
    'link'      => ['uri' => 'internal:' . $uri],
    'menu_name' => 'footer-about',
    'expanded'  => FALSE,
  ])->save();
}
echo "Created About items\n";

// Help Centre items
$help = ['Payments' => '#', 'FAQs' => '#', 'Checkout' => '#', 'Other Issues' => '#'];
foreach ($help as $title => $uri) {
  MenuLinkContent::create([
    'title'     => $title,
    'link'      => ['uri' => 'internal:' . $uri],
    'menu_name' => 'footer-help',
    'expanded'  => FALSE,
  ])->save();
}
echo "Created Help Centre items\n";
