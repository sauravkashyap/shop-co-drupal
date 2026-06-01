(function (Drupal, once) {
  'use strict';

  Drupal.behaviors.uiBuilderSlider = {
    attach: function (context) {
      // Find all slider instances that haven't been processed yet
      const sliders = once('ui-builder-slider-init', '.swiper.uib-slider', context);

      sliders.forEach(function (sliderElement) {
        // Read settings from data attributes with fallback defaults
        const navEnabled = sliderElement.getAttribute('data-swiper-nav') === 'true';
        const paginationEnabled = sliderElement.getAttribute('data-swiper-pagination') === 'true';
        const loopEnabled = sliderElement.getAttribute('data-swiper-loop') === 'true';
        const autoplayEnabled = sliderElement.getAttribute('data-swiper-autoplay') === 'true';

        // Base Swiper configuration
        const swiperConfig = {
          loop: loopEnabled,
          slidesPerView: 1,
          spaceBetween: 0,
        };

        // Add autoplay if enabled
        if (autoplayEnabled) {
          swiperConfig.autoplay = {
            delay: 3000,
            disableOnInteraction: false,
          };
        }

        // Add pagination if enabled
        if (paginationEnabled) {
          const paginationEl = sliderElement.querySelector('.swiper-pagination');
          if (paginationEl) {
            swiperConfig.pagination = {
              el: paginationEl,
              clickable: true,
            };
          }
        }

        // Add navigation if enabled
        if (navEnabled) {
          const nextEl = sliderElement.querySelector('.swiper-button-next');
          const prevEl = sliderElement.querySelector('.swiper-button-prev');
          if (nextEl && prevEl) {
            swiperConfig.navigation = {
              nextEl: nextEl,
              prevEl: prevEl,
            };
          }
        }

        // Initialize Swiper
        // Assuming Swiper is loaded globally from the included library
        if (typeof Swiper !== 'undefined') {
          new Swiper(sliderElement, swiperConfig);
        } else {
          console.error('[UI Builder] Swiper library is not loaded.');
        }
      });
    }
  };

})(Drupal, once);
