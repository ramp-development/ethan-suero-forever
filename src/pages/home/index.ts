import { hero } from './hero';
import { locations } from './locations';

export const home = () => {
  console.log('home');
  hero();
  locations();
};
