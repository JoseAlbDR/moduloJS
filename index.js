import { tweetListController } from './tweet-list/tweetListController.js';
import { notificationController } from './notifications/notificationsController.js';

// const loadButton = document.getElementById('loadTweets');
// const removeButton = document.getElementById('removeTweets');
// const hideButton = document.getElementById('hideTweets');
const tweetList = document.getElementById('tweets');
const notifications = document.getElementById('notifications');
const showNotification = notificationController(notifications);

tweetListController(tweetList);

tweetList.addEventListener('tweetsLoaded', (event) => {
  showNotification(event.detail.message, event.detail.type);
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
