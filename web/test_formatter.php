<?php
// Load Drupal environment
use Drupal\Core\DrupalKernel;
use Symfony\Component\HttpFoundation\Request;
$autoloader = require_once 'autoload.php';
$request = Request::createFromGlobals();
$kernel = DrupalKernel::createFromRequest($request, $autoloader, 'prod');
$kernel->boot();

$config = \Drupal::config('ui_builder.ui_builder_component.uib_test');
$layout_tree = json_decode($config->get('layout_tree'), TRUE);
$form_schema = json_decode($config->get('form_schema'), TRUE);

$values = [];
foreach ($form_schema as $field_name => $field) {
  if (!isset($values[$field_name])) {
    $values[$field_name] = [
      'mode' => $field['default']['mode'] ?? 'static',
      'value' => $field['default']['value'] ?? '',
    ];
  }
}

function processTokens($data, $values) {
  if (is_array($data)) {
    if (isset($data['tag'])) {
      $key = null;
      if (!empty($data['fieldLabel'])) {
        $key = preg_replace('/[^\w]/', '', str_replace(' ', '_', strtolower($data['fieldLabel'])));
      } elseif (!empty($data['id'])) {
        $key = 'field_' . $data['id'];
      }
      if ($key && isset($values[$key])) {
        $val = is_array($values[$key]) ? ($values[$key]['value'] ?? '') : $values[$key];
        if (!empty($data['content'])) {
          $data['content'] = str_replace('{{ ' . $key . ' }}', $val, $data['content']);
        }
      }
    }
    foreach ($data as $k => $v) {
      $data[$k] = processTokens($v, $values);
    }
    return $data;
  }
  return $data;
}

$mapped_tree = processTokens($layout_tree, $values);
print_r($mapped_tree);
