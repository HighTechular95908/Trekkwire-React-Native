import React from 'react';
import * as UtilityFunction from '../custom-files/UtilityFunction';

const emailValidation = email => {
  return UtilityFunction.isValidEmail(email);
};

export default emailValidation;
