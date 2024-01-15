import Swiper from 'swiper';

export const newWho = () => {
  $('.slider-who_component').each(function (index) {
    let loopMode = false;
    if ($(this).attr('loop-mode') === 'true') {
      loopMode = true;
    }
    let sliderDuration = 500;
    if ($(this).attr('slider-duration') !== undefined) {
      sliderDuration = +$(this).attr('slider-duration');
    }
    const swiper = new Swiper($(this).find('.swiper')[0], {
      speed: sliderDuration,
      loop: loopMode,
      autoHeight: false,
      centeredSlides: loopMode,
      followFinger: true,
      freeMode: false,
      slideToClickedSlide: false,
      slidesPerView: 1,
      rewind: false,
      mousewheel: {
        forceToAxis: true,
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      pagination: {
        el: $(this).find('.swiper-bullet-wrapper')[0],
        bulletActiveClass: 'is-active',
        bulletClass: 'swiper-bullet',
        bulletElement: 'button',
        clickable: true,
      },
    });
  });

  $('.who_component').each(function (index) {
    const swiper1 = new Swiper($(this).find('.swiper.is-who1')[0], {
      slidesPerView: 1,
      effect: 'slide',
    });

    const swiper2 = new Swiper($(this).find('.swiper.is-who2')[0], {
      slidesPerView: 1,
      effect: 'slide',
      pagination: {
        el: $(this).find('.swiper-bullet-wrapper')[0],
        bulletActiveClass: 'is-active',
        bulletClass: 'swiper-bullet',
        bulletElement: 'div',
        clickable: true,
      },
    });

    swiper1.controller.control = swiper2;
    swiper2.controller.control = swiper1;
  });
};
