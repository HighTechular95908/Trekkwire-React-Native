import React from 'react';
import * as UtilityFunction from '../custom-files/UtilityFunction';

const nameValidation = name => {
  return UtilityFunction.isValidName(name);
};

export default nameValidation;
