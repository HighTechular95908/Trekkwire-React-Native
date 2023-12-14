import React from 'react';

const SignOut = async setGlobalVariableValue => {
  setGlobalVariableValue({
    key: 'authHeader',
    value: '',
  });
  setGlobalVariableValue({
    key: 'User',
    value: {},
  });
  setGlobalVariableValue({
    key: 'islogin',
    value: false,
  });
  setGlobalVariableValue({
    key: 'isGuide',
    value: false,
  });
};

export default SignOut;
