import gsap from 'gsap';

export const locations = () => {
  console.log('locations');

  const $component = $('.slider-main_component');
  const $trigger = $component.find('.swiper-slide.is-locations');
  const $target = $component.find('.location-hover-list');

  $trigger.on('mouseenter', function () {
    const $this = $(this);
    const $index = $this.index();
    const $image = $target.find('.location-hover-image').eq($index);

    gsap.from($image, { scale: 2, duration: 0.5, ease: 'power1.inOut' });
    gsap.to($target, { xPercent: $index * -100, duration: 0.3, ease: 'power1.inOut' });
  });
};
