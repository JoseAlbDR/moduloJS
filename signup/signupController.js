export const signUpController = (signupForm) => {
  // añadir escuchador para evento submit
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Extraer datos formulario
    const email = signupForm.querySelector('#email');
    const pass = signupForm.querySelector('#password');
    const repPass = signupForm.querySelector('#repeatPassword');

    if (isEmailValid(email) && isPasswordValid(pass, repPass)) {
      console.log('Usuario creado');
    } else {
      if (!isEmailValid(email)) alert('Incorrect email');
      if (!isPasswordValid(pass, repPass)) alert('Password do not match');
    }
  });
};

const isEmailValid = (email) => {
  // Validar email
  const emailRegExp = new RegExp(
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  );
  return emailRegExp.test(email.value);
};

const isPasswordValid = (pass, repPass) => {
  return pass.value === repPass.value;
};
