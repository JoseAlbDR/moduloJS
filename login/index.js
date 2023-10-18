import { loaderController } from '../loader/loaderController.js';
import { loginController } from './loginController.js';

document.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('loader');
  const { show, hide } = loaderController(loader);
  const loginForm = document.getElementById('login');

  loginForm.addEventListener('startLoadingLogin', () => {
    show();
  });

  loginForm.addEventListener('finishLoadingLogin', () => {
    hide();
  });

  loginController(loginForm);
});
