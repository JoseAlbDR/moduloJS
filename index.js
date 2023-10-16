import { tweetListController } from './tweet-list/tweetListController.js';
import { notificationController } from './notifications/notificationsController.js';

// const loadButton = document.getElementById('loadTweets');
// const removeButton = document.getElementById('removeTweets');
// const hideButton = document.getElementById('hideTweets');
const notifications = document.getElementById('notifications');
const showNotification = notificationController(notifications);

document.addEventListener('DOMContentLoaded', () => {
  const tweetList = document.getElementById('tweets');
  tweetListController(tweetList);

  tweetList.addEventListener('tweetsLoaded', (event) => {
    showNotification(event.detail.message, event.detail.type);
  });
});

window.addEventListener('offline', () => {
  showNotification('No hay conexión', 'error');
});

// const removeTweets = () => {
//   tweetList.innerHTML = '';
// };

// loadButton.addEventListener('click', () => {
//   removeTweets();
//   tweetList.classList.remove('hidden');
// });

// removeButton.addEventListener('click', removeTweets);

// hideButton.addEventListener('click', () => {
//   tweetList.classList.toggle('hidden');
// });
