export const buildTweet = (tweet) => {
  return `
    <img src="${tweet.photo}" alt="tweet image"  />
    <span>${tweet.handler}</span>
    <span>${tweet.date}</span>
    <p>${tweet.message}</p>
    <p>Liked by ${tweet.likes}</p>
  `;
};
