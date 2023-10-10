import { getTweets } from './tweetListModel.js';
import { buildTweet } from './tweetListView.js';

export const tweetListController = async (tweetList) => {
  const tweets = await getTweets();
  tweets.forEach((tweet) => {
    const tweetContainer = document.createElement('div');
    tweetContainer.classList.add('tweet');
    tweetContainer.innerHTML = buildTweet(tweet);
    tweetList.appendChild(tweetContainer);
  });
};
