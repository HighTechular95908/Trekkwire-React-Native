import React from 'react';
import { Alert } from 'react-native';
import * as MyToast from '../custom-files/MyToast';

const Login = async (navigation, setGlobalVariableValue, email, password) => {
  var userInfo = {
    email: email,
    password: password,
  };
  try {
    // Make API request here
    // const response = await fetch("https://trekkwire-database.vercel.app/api/user/login", {
    const response = await fetch('http://127.0.0.1:3500/api/user/login', {
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
      return false;
      // if (response.status === 400) {
      //   setGlobalVariableValue({
      //     key: "notification",
      //     value: "Bad Request"
      //   })
    } else {
      MyToast.showToast('success', '200', 'Succefully Logined', 'top');
      setGlobalVariableValue({
        key: 'authHeader',
        value: data.token,
      });
      setGlobalVariableValue({
        key: 'User',
        value: data.user,
      });
      setGlobalVariableValue({
        key: 'islogin',
        value: true,
      });
      return true;
    }
  } catch (error) {
    MyToast.showToast('error', '500', 'Server Disconnected', 'top');
    return false;
  }

  // fetch("http://127.0.0.1:3500/api/user/login", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(userInfo),
  // })
  //   .then((response) => response.json())
  //   .then((json) => {
  //     setGlobalVariableValue({
  //       key: "authHeader",
  //       value: json.token
  //     })
  //   }
  //   )
  //   .catch((err) => {
  //     setGlobalVariableValue({
  //       key: "authHeader",
  //       value: "server disconnect"
  //     })
  //   }
  // );
};

export default Login;
