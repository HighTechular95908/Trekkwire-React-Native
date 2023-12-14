import React from 'react';
import * as MyToast from '../custom-files/MyToast';

const GetAvatar = async (setGlobalVariableValue, id) => {
  try {
    const response = await fetch(
      `http://127.0.0.1:3500/api/user/avatar/${id}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await response.json();
    console.log('getAvatar--------->', data.uri);
    if (response.ok) {
      // MyToast.showToast("success", "200", "Successfully Avatar Loaded", "top");
      setGlobalVariableValue({
        key: 'imageUri',
        value: data.uri,
      });
    } else {
      const errorCode = data.code;
      const errorData = data.data;
      MyToast.showToast('error', errorCode, errorData, 'top');
      setGlobalVariableValue({
        key: 'imageUri',
        value: '',
      });
    }
  } catch {
    MyToast.showToast('error', '500', 'Server Disconnected', 'top');
    setGlobalVariableValue({
      key: 'imageUri',
      value: '',
    });
  }
};

export default GetAvatar;
