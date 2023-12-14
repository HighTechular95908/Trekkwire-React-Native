import React from 'react';
import * as UtilityFunction from '../custom-files/UtilityFunction';

const passwordValidation = password => {
  return UtilityFunction.isValidPassword(password);
};

export default passwordValidation;
