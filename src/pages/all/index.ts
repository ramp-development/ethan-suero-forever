import { autoNumbers } from './autoNumbers';
import { locations } from './locations';
import { newWho } from './newWho';
import { staggerText } from './staggerText';
import { transitions } from './transitions';
import { whoComponent } from './whoComponent';
import { whoSwiper } from './whoSwiper';

export const all = () => {
  console.log('all');

  try {
    transitions();
  } catch (error) {
    console.error('transitions failed', error);
  }

  try {
    autoNumbers();
  } catch (error) {
    console.error('autoNumbers failed', error);
  }

  try {
    staggerText();
  } catch (error) {
    console.error('staggerText failed', error);
  }

  try {
    locations();
  } catch (error) {
    console.error('locations failed', error);
  }

  setTimeout(() => {
    console.log('running newWho');
    newWho();
  }, 1000);

  // try {
  //   whoSwiper();
  // } catch (error) {
  //   console.error('whoSwiper failed', error);
  // }

  // try {
  //   whoComponent();
  // } catch (error) {
  //   console.error('whoComponent failed', error);
  // }

  console.log('all end');
};
