import React from 'react';
import * as UtilityFunction from '../custom-files/UtilityFunction';

const phoneValidation = phoneNumber => {
  return UtilityFunction.isValidPhoneNumber(phoneNumber);
};

export default phoneValidation;
