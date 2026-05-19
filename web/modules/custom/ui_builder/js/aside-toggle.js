(function (Drupal, once) {
  'use strict';

  Drupal.behaviors.uibAsideToggle = {
    attach: function (context, settings) {
      const toggles = once('uib-aside-toggle', '.uib-aside-toggle', context);
      toggles.forEach(toggle => {
        if (toggle.dataset.asideId) {
          toggle.addEventListener('click', function() {
            const aside = document.getElementById(toggle.dataset.asideId);
            if (aside) {
              aside.classList.toggle('is-open');
              const expanded = aside.classList.contains('is-open');
              toggle.setAttribute('aria-expanded', expanded);
            }
          });
        }
      });
    }
  };

})(Drupal, once);
