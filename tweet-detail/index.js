import { tweetDetailController } from './tweetDetailController.js';
import { notificationController } from '../notifications/notificationsController.js';

document.addEventListener('DOMContentLoaded', () => {
  const notifications = document.getElementById('notifications');
  const showNotification = notificationController(notifications);
  const id = getTweetId();
  const tweetDetail = document.getElementById('tweetDetail');

  tweetDetail.addEventListener('tweetLoaded', (e) => {
    showNotification(e.detail.message, e.detail.type);
  });

  tweetDetailController(tweetDetail, id);
});

const getTweetId = () => {
  const queryString = window.location.search;
  const searchParams = new URLSearchParams(queryString);
  const id = searchParams.get('id');
  return id;
};
