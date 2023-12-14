import React from 'react';
import * as MyToast from '../custom-files/MyToast';

const Update = async (
  Variables,
  setGlobalVariableValue,
  fullName,
  email,
  phone,
  id,
  email_origin
) => {
  var userInfo = {};

  if (email === email_origin) {
    userInfo = {
      fullName: fullName,
      phone: phone,
    };
  } else {
    userInfo = {
      fullName: fullName,
      email: email,
      phone: phone,
    };
  }

  try {
    // Make API request here
    // const response = await fetch("https://trekkwire-database.vercel.app/api/user/login", {
    const response = await fetch(`http://127.0.0.1:3500/api/user/${id}`, {
      method: 'PUT',
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
      MyToast.showToast('success', '200', 'Successfully updated', 'top');
    }
  } catch (error) {
    MyToast.showToast('error', '500', 'Server Disconnected', 'top');
  }
};

export default Update;
