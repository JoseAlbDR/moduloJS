import { tweetListController } from './tweet-list/tweetListController.js';

const tweetList = document.getElementById('tweets');
const loadButton = document.getElementById('loadTweets');
const removeButton = document.getElementById('removeTweets');
const hideButton = document.getElementById('hideTweets');

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
