<?php

use Drupal\webform\Entity\Webform;
use Drupal\webform\Entity\WebformSubmission;

// Check if the webform already exists.
$webform = Webform::load('newsletter_subscription');

if (!$webform) {
  $webform = Webform::create([
    'id' => 'newsletter_subscription',
    'title' => 'Newsletter Subscription',
    'description' => 'Subscribe to our newsletter to stay updated.',
    'status' => Webform::STATUS_OPEN,
    'elements' => "
email:
  '#type': email
  '#title': 'Email'
  '#title_display': invisible
  '#placeholder': 'Enter your email address'
  '#required': true
  '#attributes':
    class:
      - 'newsletter-email-input'
actions:
  '#type': webform_actions
  '#title': 'Submit button(s)'
  '#submit__label': 'Subscribe to Newsletter'
  '#submit__attributes':
    class:
      - 'newsletter-submit-btn'
",
  ]);

  $webform->save();
  echo "Webform 'newsletter_subscription' created successfully.\n";
} else {
  echo "Webform 'newsletter_subscription' already exists.\n";
}
