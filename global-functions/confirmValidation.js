import React from 'react';
import * as UtilityFunction from '../custom-files/UtilityFunction';

const confirmValidation = (pass, pass_r) => {
  return UtilityFunction.isValidConfirm(pass, pass_r);
};

export default confirmValidation;
