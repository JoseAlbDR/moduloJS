import { buildSession } from './sessionView.js';

export const sessionController = (nav) => {
  const token = localStorage.getItem('accessToken');

  if (!token) {
    nav.innerHTML = buildSession();
  }
};
