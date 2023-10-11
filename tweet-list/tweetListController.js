import { getTweets } from './tweetListModel.js';
import { buildTweet, emptyTweets } from './tweetListView.js';

export const tweetListController = async (tweetList) => {
  const tweets = await getTweets();

  if (!tweets) {
    // window.alert('No hay tweets disponibles.');
    tweetList.innerHTML = emptyTweets();
  }

  tweets.forEach((tweet) => {
    const tweetContainer = document.createElement('div');
    tweetContainer.classList.add('tweet');
    tweetContainer.innerHTML = buildTweet(tweet);
    tweetList.appendChild(tweetContainer);
  });
};
