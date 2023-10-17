import { createUser } from './signUpModel.js';

export const signUpController = (signupForm) => {
  signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = signupForm.querySelector('#email').value;
    const pass = signupForm.querySelector('#password').value;
    const repPass = signupForm.querySelector('#repeatPassword').value;

    try {
      if (isEmailValid(email) && isPasswordValid(pass, repPass)) {
        await createUser(email, pass);
        const event = createCustomEvent('success', 'User successfully created');
        signupForm.dispatchEvent(event);
        window.location = './login.html';
      } else {
        if (!isEmailValid(email)) throw new Error('Invalid email format');
        if (!isPasswordValid(pass, repPass))
          throw new Error('Password do not match');
      }
    } catch (error) {
      const event = createCustomEvent('error', error.message);
      signupForm.dispatchEvent(event);
    }
  });
};

const createCustomEvent = (type, message) => {
  const event = new CustomEvent('signup', {
    detail: {
      type: type,
      message: message,
    },
  });
  return event;
};

const isEmailValid = (email) => {
  const emailRegExp = new RegExp(
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  );
  return emailRegExp.test(email);
};

const isPasswordValid = (pass, repPass) => {
  return pass === repPass;
};
