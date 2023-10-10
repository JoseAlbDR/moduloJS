export const tweetsFake = [
  {
    handler: '@user1',
    date: new Date().toISOString(),
    message: 'Contenido del tweet 1',
    likes: 40,
  },
  {
    handler: '@user2',
    date: new Date().toISOString(),
    message: 'Contenido del tweet 2',
    likes: 20,
  },
  {
    handler: '@user3',
    date: new Date().toISOString(),
    message: 'Contenido del tweet 3',
    likes: 430,
  },
  {
    handler: '@user4',
    date: new Date().toISOString(),
    message: 'Contenido del tweet 4',
    likes: 10,
  },
];

const transformTweets = (tweets) => {
  return tweets.map((tweet) => ({
    handler: tweet.author,
    date: new Date().toISOString(),
    message: tweet.message,
    likes: tweet.likes.length,
  }));
};

export const getTweets = async () => {
  try {
    const response = await fetch('https://fake-tweets-api-kc.vercel.app/posts');
    const tweets = await response.json();
    const parsedTweets = transformTweets(tweets);
    return parsedTweets;
  } catch (error) {
    console.log(error);
  }
};
