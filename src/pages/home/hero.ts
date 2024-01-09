import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { queryElement } from '$utils/queryElement';

export const hero = () => {
  console.log('hero');
  gsap.registerPlugin(ScrollTrigger);

  const trigger = queryElement('.forever_trigger');
  if (!trigger) return;
  const mask = queryElement('.forever_mask', trigger);
  if (!mask) return;

  const timeline = gsap.timeline({
    defaults: {
      ease: 'none',
      duration: 1,
    },
    scrollTrigger: {
      trigger: trigger,
      start: 'top top',
      end: 'bottom top',
      scrub: 2,
      markers: true,
    },
  });

  timeline.to(mask, { scale: 51, xPercent: -255, yPercent: 112.5 });
};
