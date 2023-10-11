import { tweetListController } from './tweet-list/tweetListController.js';
import { notificationController } from './notifications/notificationsController.js';

const tweetList = document.getElementById('tweets');
const loadButton = document.getElementById('loadTweets');
const removeButton = document.getElementById('removeTweets');
const hideButton = document.getElementById('hideTweets');
const notifications = document.getElementById('notifications');

const showNotification = notificationController(notifications);

const removeTweets = () => {
  tweetList.innerHTML = '';
};

loadButton.addEventListener('click', () => {
  removeTweets();
  tweetList.classList.remove('hidden');
  tweetListController(tweetList);
});

removeButton.addEventListener('click', removeTweets);

hideButton.addEventListener('click', () => {
  tweetList.classList.toggle('hidden');
});

tweetList.addEventListener('tweetsLoaded', (event) => {
  // console.log('los tweets han sido cargados');
  console.log(event.detail);
  showNotification(event.detail.message, event.detail.type);
});
