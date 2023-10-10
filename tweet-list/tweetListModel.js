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

export const getTweets = async () => {
  const response = await fetch('https://fake-tweets-api-kc.vercel.app/posts');
  const tweets = await response.json();
  return tweets;
};
