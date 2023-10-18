export const getTweet = async (id) => {
  try {
    const url = `http://localhost:8000/api/tweets/${id}`;
    const response = await fetch(url);
    if (response.ok) {
      const tweet = await response.json();
      return parseTweet(tweet);
    } else {
      throw new Error('Tweet does not exist');
    }
  } catch (error) {
    throw error;
  }
};

const parseTweet = (tweet) => {
  return {
    handler: tweet.author.toUpperCase(),
    photo: tweet.image,
    likes: tweet.likes.join(', '),
    message: tweet.message,
  };
};
