import { signUpController } from './signupController.js';
import { notificationController } from '../notifications/notificationsController.js';

const signupForm = document.querySelector('#signup');
const notifications = document.getElementById('notifications');

const showNotification = notificationController(notifications);
signUpController(signupForm);

signupForm.addEventListener('signup', (e) => {
  showNotification(e.detail.message, e.detail.type);
});
