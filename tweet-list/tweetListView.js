export const buildTweet = (tweet) => {
  return `
    <span>${tweet.handler}</span>
    <span>${tweet.date}</span>
    <p>${tweet.message}</p>
    <p>${tweet.likes} likes</p>
  `;
};

export const emptyTweets = () => {
  return `
    <h1>NO HAY TWEETS PESAO DEJA DE PULSAR EL PUTO BOTONCITO</h1>
  `;
};
