export const buildTweet = (tweet) => {
  return `
    <span>${tweet.author}</span>
    <span>${tweet.date}</span>
    <p>${tweet.message}</p>
    <p>${tweet.likes} likes</p>
  `;
};
