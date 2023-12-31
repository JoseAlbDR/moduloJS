import { dispatchEvent } from '../utils/createCustomEvent.js';
import { getTweets } from './tweetListModel.js';
import { buildTweet, emptyTweets } from './tweetListView.js';

export const tweetListController = async (tweetList) => {
  let tweets = [];
  try {
    dispatchEvent('startLoadingTweets', null, tweetList);
    tweets = await getTweets();
  } catch (error) {
    const event = createCustomEvent('error', 'Error cargando tweets');
    tweetList.dispatchEvent(event);
  } finally {
    dispatchEvent('finishLoadingTweets', null, tweetList);
  }

  if (!tweets || tweets.length === 0) {
    tweetList.innerHTML = emptyTweets();
  } else {
    renderTweets(tweets, tweetList);
    const event = createCustomEvent('success', 'Tweets cargados con éxito');
    tweetList.dispatchEvent(event);
  }
};

const renderTweets = (tweets, tweetList) => {
  tweets.forEach((tweet) => {
    const tweetContainer = document.createElement('div');
    tweetContainer.innerHTML = buildTweet(tweet);
    tweetList.appendChild(tweetContainer);
  });
};

const createCustomEvent = (type, message) => {
  const event = new CustomEvent('tweetsLoaded', {
    detail: {
      type: type,
      message: message,
    },
  });
  return event;
};
