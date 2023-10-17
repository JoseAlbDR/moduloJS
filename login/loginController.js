import { loginUser } from './loginModel.js';

export const loginController = (loginForm) => {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    submitLogin(loginForm);
  });
};

const submitLogin = async (loginForm) => {
  const { email, password } = getLoginData(loginForm);
  try {
    const response = await loginUser({ email, password });
    const token = response.accessToken;
    alert('login ok');
    localStorage.setItem('accessToken', token);
    window.location = '/';
  } catch (error) {
    alert(error.message);
  }
};

const getLoginData = (loginForm) => {
  const formData = new FormData(loginForm);
  const email = formData.get('email');
  const password = formData.get('password');

  return {
    email,
    password,
  };
};
