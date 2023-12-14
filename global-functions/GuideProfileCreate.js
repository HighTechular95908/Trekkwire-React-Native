import React from 'react';
import * as MyToast from '../custom-files/MyToast';

// create a new profile as a guide
const GuideProfileCreate = async (setGlobalVariableValue, id) => {
  try {
    const response = await fetch(
      `http://127.0.0.1:3500/api/guide/create/${id}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await response.json();
    if (response.ok) {
      MyToast.showToast('success', '200', 'Successfully Created', 'top');
    } else {
      const errorCode = data.code;
      const errorData = data.data;
      MyToast.showToast('error', errorCode, errorData, 'top');
    }
  } catch {
    MyToast.showToast('error', '500', 'Server Disconnected!!!!', 'top');
  }
};

export default GuideProfileCreate;
