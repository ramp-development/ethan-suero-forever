import { about } from './about';

export const pages = () => {
  const { pathname } = window.location;

  switch (pathname) {
    case '/about':
      about();
      break;
    default:
      break;
  }
};
