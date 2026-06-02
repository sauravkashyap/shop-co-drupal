(function (Drupal, once) {
  'use strict';

  // Vanilla JS Slide Up/Down helpers
  const slideUp = (target, duration=300) => {
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.boxSizing = 'border-box';
    target.style.height = target.offsetHeight + 'px';
    target.offsetHeight; // trigger reflow
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.setAttribute('aria-hidden', 'true');
    window.setTimeout( () => {
      target.style.display = 'none';
      target.style.removeProperty('height');
      target.style.removeProperty('padding-top');
      target.style.removeProperty('padding-bottom');
      target.style.removeProperty('margin-top');
      target.style.removeProperty('margin-bottom');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
    }, duration);
  }

  const slideDown = (target, duration=300) => {
    target.style.removeProperty('display');
    let display = window.getComputedStyle(target).display;
    if (display === 'none') display = 'block';
    target.style.display = display;
    let height = target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight; // trigger reflow
    target.style.boxSizing = 'border-box';
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + 'ms';
    target.style.height = height + 'px';
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    target.setAttribute('aria-hidden', 'false');
    window.setTimeout( () => {
      target.style.removeProperty('height');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
    }, duration);
  }

  Drupal.behaviors.uiBuilderAccordion = {
    attach: function (context) {
      const accordions = once('ui-builder-accordion', '.uib-accordion', context);

      accordions.forEach(accordion => {

        const speed = parseInt(accordion.getAttribute('data-accordion-speed'), 10) || 300;
        const headers = accordion.querySelectorAll('.uib-accordion-header');

        headers.forEach(header => {
          // Initialize accessibility on headers if not set
          if (!header.hasAttribute('role')) header.setAttribute('role', 'button');
          if (!header.hasAttribute('tabindex')) header.setAttribute('tabindex', '0');

          header.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              this.click();
            }
          });

          header.addEventListener('click', function () {
            const item = this.closest('.uib-accordion-item');
            if (!item) return;

            const isOpen = item.getAttribute('data-state') === 'open';



            // Toggle current
            const content = item.querySelector('.uib-accordion-content');
            if (isOpen) {
              item.setAttribute('data-state', 'closed');
              header.setAttribute('aria-expanded', 'false');
              if (content) {
                slideUp(content, speed);
              }
            } else {
              item.setAttribute('data-state', 'open');
              header.setAttribute('aria-expanded', 'true');
              if (content) {
                slideDown(content, speed);
              }
            }
            
            // Toggle icons manually for the clicked item
            const openIcon = item.querySelector('.uib-accordion-icon-open');
            const closeIcon = item.querySelector('.uib-accordion-icon-close');
            if (isOpen) {
              if (openIcon) openIcon.style.display = '';
              if (closeIcon) closeIcon.style.display = 'none';
            } else {
              if (openIcon) openIcon.style.display = 'none';
              if (closeIcon) closeIcon.style.display = 'flex';
            }
          });
        });

        // Initialize state on load
        const allItems = accordion.querySelectorAll('.uib-accordion-item');
        allItems.forEach(item => {
          const isOpen = item.getAttribute('data-state') === 'open';
          const header = item.querySelector('.uib-accordion-header');
          const content = item.querySelector('.uib-accordion-content');
          const openIcon = item.querySelector('.uib-accordion-icon-open');
          const closeIcon = item.querySelector('.uib-accordion-icon-close');

          if (header) {
            header.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
          }

          if (isOpen) {
            if (content) {
              content.style.display = 'block';
              content.setAttribute('aria-hidden', 'false');
            }
            if (openIcon) openIcon.style.display = 'none';
            if (closeIcon) closeIcon.style.display = 'flex';
          } else {
            if (content) {
              content.style.display = 'none';
              content.setAttribute('aria-hidden', 'true');
            }
            if (openIcon) openIcon.style.display = '';
            if (closeIcon) closeIcon.style.display = 'none';
          }
        });
      });
    }
  };

})(Drupal, once);
