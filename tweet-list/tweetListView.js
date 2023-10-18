export const buildTweet = (tweet) => {
  return `
  <a href="./tweetDetail.html?id=${tweet.id}" class="tweet">
    <img src="${tweet.image}" alt="tweet image"  />
    <span>${tweet.handler}</span>
    <span>${tweet.date}</span>
    <p>${tweet.message}</p>
    <p>${tweet.likes} likes</p>
  </a>
  `;
};

export const emptyTweets = () => {
  return `
    <h1>NO HAY TWEETS PESAO DEJA DE PULSAR EL PUTO BOTONCITO</h1>
  `;
};
