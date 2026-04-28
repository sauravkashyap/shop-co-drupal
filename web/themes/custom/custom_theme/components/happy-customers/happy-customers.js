document.addEventListener('DOMContentLoaded', () => {
  const sliders = document.querySelectorAll('.happy-customers__slider');
  
  sliders.forEach((slider) => {
    if (slider.classList.contains('swiper-initialized')) return;

    const initSwiper = () => {
      if (typeof Swiper !== 'undefined') {
        new Swiper(slider, {
          slidesPerView: 1,
          spaceBetween: 20,
          loop: true,
          loopAdditionalSlides: 4,
          watchSlidesProgress: true,
          navigation: {
            nextEl: '.happy-customers__nav-btn--next',
            prevEl: '.happy-customers__nav-btn--prev',
          },
          breakpoints: {
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            }
          }
        });
      } else {
        setTimeout(initSwiper, 100);
      }
    };

    initSwiper();
  });
});

