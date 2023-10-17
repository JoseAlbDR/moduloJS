import { loginController } from './loginController.js';

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login');
  loginController(loginForm);
});
