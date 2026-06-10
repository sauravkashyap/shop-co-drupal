(function (Drupal, once) {
  Drupal.behaviors.uiBuilderChoices = {
    attach: function (context, settings) {
      // Find all select elements with the choices-enabled class and initialize Choices.js
      once('uiBuilderChoices', '.choices-enabled', context).forEach(function (element) {
        new Choices(element, {
          searchEnabled: true,
          itemSelectText: '',
          shouldSort: false,
          position: 'bottom',
        });
      });
    }
  };
})(Drupal, once);
