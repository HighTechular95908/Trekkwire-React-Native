import React from 'react';
import * as MyToast from '../custom-files/MyToast';

const UploadImage = async (setGlobalVariableValue, imageUri, id) => {
  try {
    var file = {
      uri: imageUri,
      type: 'image',
      name: id,
    };
    const response = await fetch('http://127.0.0.1:3500/api/upload/avatar', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        // 'content-type': 'multipart/formdata',
      },
      body: JSON.stringify(file),
    });
    const data = response.json();
    if (response.ok) {
      MyToast.showToast('success', '200', 'Successfully Uploaded', 'top');
      setGlobalVariableValue({
        key: 'imageUri',
        value: imageUri,
      });
    } else {
      const errorCode = data.code;
      const errorData = data.error;
      MyToast.showToast('error', errorCode, errorData, 'top');
    }
  } catch {
    MyToast.showToast('error', '500', 'Server Disconnected', 'top');
  }
};

export default UploadImage;
