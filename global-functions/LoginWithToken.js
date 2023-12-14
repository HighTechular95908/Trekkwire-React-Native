import React from 'react';

const LoginWithToken = Variables => {
  if (Variables.authHeader !== '') {
    return true;
  } else {
    return false;
  }
};

export default LoginWithToken;
