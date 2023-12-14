import React from 'react';

const LoginValidation = (isValidEmail, isValidPassword) => {
  if (isValidEmail && isValidPassword) {
    return true;
  } else {
    return false;
  }
};

export default LoginValidation;
