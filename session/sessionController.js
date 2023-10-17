import { buildLogout, buildSession } from './sessionView.js';

export const sessionController = (nav) => {
  if (isUserLoggedIn()) {
    nav.innerHTML = buildLogout();
    const logoutBtn = nav.querySelector('button');
    logoutBtn.addEventListener('click', () => {
      localStorage.removeItem('accessToken');
      window.location.reload();
    });
  } else {
    nav.innerHTML = buildSession();
  }
};

const isUserLoggedIn = () => {
  return localStorage.getItem('accessToken');
};
