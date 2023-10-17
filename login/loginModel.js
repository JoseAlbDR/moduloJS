export const loginUser = async (user) => {
  const url = 'http://localhost:8000/auth/login';

  const body = {
    username: user.email,
    password: user.password,
  };

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };

  try {
    const response = await fetch(url, requestOptions);
    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.message);
    }
  } catch (error) {
    if (error.message) {
      throw error.message;
    } else {
      throw error;
    }
  }
};
