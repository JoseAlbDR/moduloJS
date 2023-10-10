import { tweetListController } from './tweet-list/tweetListController.js';

const tweetList = document.getElementById('tweets');
const loadButton = document.getElementById('loadTweets');
const removeButton = document.getElementById('removeTweets');
const hideButton = document.getElementById('hideTweets');

loadButton.addEventListener('click', () => {
  tweetList.classList.remove('hidden');
  tweetListController(tweetList);
});

removeButton.addEventListener('click', () => (tweetList.innerHTML = ''));

hideButton.addEventListener('click', () => {
  tweetList.classList.toggle('hidden');
});
