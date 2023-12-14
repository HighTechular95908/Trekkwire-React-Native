import React from 'react';

const SignUpValidation = (
  isValidName,
  isValidEmail,
  isValidPhoneNumber,
  isValidPassword,
  isValidConfirm,
  privacyCheck
) => {
  if (
    isValidName &&
    isValidEmail &&
    isValidPhoneNumber &&
    isValidPassword &&
    isValidConfirm &&
    privacyCheck
  ) {
    return true;
  } else {
    return false;
  }
};

export default SignUpValidation;
