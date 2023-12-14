import React from 'react';
import * as MyToast from '../custom-files/MyToast';

const SignUp = async (
  setGlobalVariableValue,
  fullName,
  email,
  password,
  phone
) => {
  var userInfo = {
    fullName: fullName,
    email: email,
    password: password,
    phone: phone,
  };
  try {
    // Make API request here
    // const response = await fetch("https://trekkwire-database.vercel.app/api/user/register", {
    const response = await fetch('http://127.0.0.1:3500/api/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    });
    const data = await response.json();
    // Check if the response contains an error
    if (!response.ok) {
      const errorCode = data.code; // Assuming the error code is returned as "code"
      const errorData = data.error; // Assuming the error object is returned as "error"
      MyToast.showToast('error', errorCode, errorData, 'top');
    } else {
      await MyToast.showToast('success', '200', 'Succefully Registered', 'top');
      setGlobalVariableValue({
        key: 'User',
        value: data,
      });
    }
  } catch (error) {
    MyToast.showToast('error', '500', 'Server Disconnected', 'top');
  }
};

export default SignUp;
