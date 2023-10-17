import { loginUser } from './loginModel.js';

export const loginController = async (loginForm) => {
  const formData = new FormData(loginForm);

  const email = formData.get('email');
  const password = formData.get('password');

  try {
    const response = await loginUser({ email, password });
    const token = response.accessToken;

    localStorage.setItem('accessToken', token);
  } catch (error) {
    alert(error.message);
  }
};
