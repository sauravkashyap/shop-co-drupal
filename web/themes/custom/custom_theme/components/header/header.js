/**
 * @file
 * Header component behaviors.
 */

(function (Drupal) {
  Drupal.behaviors.customHeader = {
    attach: function (context, settings) {
      const header = context.querySelector('.site-header');
      if (!header) return;

      const toggle = header.querySelector('.mobile-menu-toggle');
      if (toggle) {
        toggle.addEventListener('click', () => {
          header.classList.toggle('is-menu-open');
          const isExpanded = header.classList.contains('is-menu-open');
          toggle.setAttribute('aria-expanded', isExpanded);
        });
      }
    }
  };
})(Drupal);
