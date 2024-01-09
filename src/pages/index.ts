import { about } from './about';
import { home } from './home';

export const pages = () => {
  const { pathname } = window.location;

  switch (pathname) {
    case '/':
      home();
      break;
    case '/about':
      about();
      break;
    default:
      break;
  }
};
