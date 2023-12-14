import React from 'react';
import * as MyToast from '../custom-files/MyToast';

const GuideProfileUpdate = async (setGlobalVariableValue, id) => {
  let guideInfo = {
    rating: 5,
    ratingCount: 1,
    language: ['english', 'franch', 'japanese'],
  };
  try {
    const response = await fetch(
      `http://127.0.0.1:3500/api/guide/update/${id}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(guideInfo),
      }
    );
    const data = await response.json();
    if (response.ok) {
      MyToast.showToast('success', '200', 'Successfully Updated', 'top');
    } else {
      const errorCode = data.code;
      const errorData = data.data;
      MyToast.showToast('error', errorCode, errorData, 'top');
    }
  } catch {
    MyToast.showToast('error', '500', 'Server Disconnected', 'top');
  }
};

export default GuideProfileUpdate;
