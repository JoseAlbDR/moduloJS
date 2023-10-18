import { dispatchEvent } from '../utils/createCustomEvent.js';
import { getTweet } from './tweetDetailModel.js';
import { buildTweet } from './tweetDetailView.js';

export const tweetDetailController = async (tweetDetail, id) => {
  try {
    const tweet = await getTweet(id);
    tweetDetail.innerHTML = buildTweet(tweet);
  } catch (error) {
    dispatchEvent(
      'tweetLoaded',
      {
        type: 'error',
        message: error.message,
      },
      tweetDetail
    );
    window.location = '/';
  }
};
