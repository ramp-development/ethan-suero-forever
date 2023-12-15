import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { parseStringToNumber } from '$utils/parseStringToNumber';
import { queryElement } from '$utils/queryElement';

export const culture = () => {
  console.log('culture');

  const component = queryElement<HTMLDivElement>('.culture-col-wrap');
  if (!component) return;

  const list = component.firstElementChild as HTMLDivElement;
  if (!list) return;

  const items = [...list.children] as HTMLDivElement[];
  if (items.length === 0) return;

  // get the height of the first child
  const firstChildHeight = items[0].offsetHeight;

  // get the height multiplier
  const cultureHeightMultiplier = ((): number => {
    const value = component.getAttribute('culture-height-multiplier') ?? 1;
    const parsed = parseStringToNumber(value);
    if (!parsed) return 1;
    return parsed as number;
  })();

  // get the scrub value
  const culterScrub = (() => {
    const value = component.getAttribute('culture-scrub-value') ?? true;
    if (value === 'true') return true;
    const parsed = parseStringToNumber(value as string);
    if (!parsed) return true;
    return parsed;
  })();

  // set the height of the component
  component.style.height = component.offsetHeight * cultureHeightMultiplier + 'px';

  // set the height of the list to the height of the first child
  const containerHeight = (items.length - 1) * 8 + firstChildHeight;
  list.style.height = `${containerHeight}px`;
  list.style.position = 'sticky';
  list.style.top = `${window.innerHeight - containerHeight}px`;

  // for all but the first child, set their position to absolute and add their offset
  items.forEach((item, index) => {
    if (index === 0) return;

    item.style.position = 'absolute';
    item.style.top = firstChildHeight + (index - 1) * 8 + 'px';
  });

  // create the timeline with configurable scrub
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: component,
      start: `top ${window.innerHeight - containerHeight}`,
      end: 'bottom bottom',
      scrub: culterScrub,
    },
  });

  // animate each child to the top of the component minus dynamic offset
  items.forEach((item, index) => {
    if (index === 0) return;
    timeline.to(item, {
      top: index * 8 + 'px',
    });
  });
};
