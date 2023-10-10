import { tweets } from './tweetListModel.js';
import { buildTweet } from './tweetListView.js';

const tweetList = document.getElementById('tweets');

export const tweetListController = () => {
  tweets.forEach((tweet) => {
    const tweetContainer = document.createElement('div');
    tweetContainer.innerHTML = buildTweet(tweet);
    tweetList.appendChild(tweetContainer);
  });
};
