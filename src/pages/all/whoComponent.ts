import Swiper from 'swiper';

import { queryElement } from '$utils/queryElement';
import { queryElements } from '$utils/queryElements';

export const whoComponent = () => {
  console.log('whoComponent');

  const components = queryElements<HTMLDivElement>('.who_component');
  components.forEach((component) => {
    console.log(component);

    const swiper1Element = queryElement<HTMLDivElement>('.swiper.is-who1', component);
    const swiper2Element = queryElement<HTMLDivElement>('.swiper.is-who2', component);
    const swiperBulletsElement = queryElement<HTMLDivElement>('.swiper-bullet-wrapper', component);

    if (!swiper1Element || !swiper2Element || !swiperBulletsElement) return;

    const swiper1 = new Swiper(swiper1Element, {
      slidesPerView: 1,
      effect: 'slide',
      pagination: {
        el: swiperBulletsElement,
        bulletActiveClass: 'is-active',
        bulletClass: 'swiper-bullet',
        bulletElement: 'div',
        clickable: true,
      },
    });

    const swiper2 = new Swiper(swiper2Element, {
      slidesPerView: 1,
      effect: 'slide',
    });

    console.dir(swiper1.controller);
    console.dir(swiper2.controller);

    // swiper1.controller.control = swiper2;
    // swiper2.controller.control = swiper1;
  });

  // $('.who_component').each(function (index) {
  //   console.log($(this));

  //   console.log($(this).find('.swiper.is-who1')[0]);
  //   console.log($(this).find('.swiper.is-who2')[0]);

  //   const swiper1 = new Swiper($(this).find('.swiper.is-who1')[0], {
  //     slidesPerView: 1,
  //     effect: 'slide',
  //     pagination: {
  //       el: $(this).find('.swiper-bullet-wrapper')[0],
  //       bulletActiveClass: 'is-active',
  //       bulletClass: 'swiper-bullet',
  //       bulletElement: 'div',
  //       clickable: true,
  //     },
  //   });

  //   const swiper2 = new Swiper($(this).find('.swiper.is-who2')[0], {
  //     slidesPerView: 1,
  //     effect: 'slide',
  //   });

  //   swiper1.controller.control = swiper2;
  //   swiper2.controller.control = swiper1;
  // });
};
