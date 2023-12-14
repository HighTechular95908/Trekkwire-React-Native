import React from 'react';
import * as MyToast from '../custom-files/MyToast';

const Booking = async (guideId, travelName, startDate, endDate, id) => {
  var bookInfo = {
    guideId: guideId,
    travelName: travelName,
    startDate: startDate,
    endDate: endDate,
  };
  try {
    // Make API request here
    // const response = await fetch("https://trekkwire-database.vercel.app/api/user/register", {
    const response = await fetch(
      `http://127.0.0.1:3500/api/traveler/book/65777ada7b9f6947b2051c4e`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookInfo),
      }
    );
    const data = await response.json();
    // Check if the response contains an error
    if (!response.ok) {
      const errorCode = data.code; // Assuming the error code is returned as "code"
      const errorData = data.error; // Assuming the error object is returned as "error"
      MyToast.showToast('error', errorCode, errorData, 'top');
    } else {
      await MyToast.showToast('success', '200', 'Succefully Booked', 'top');
    }
  } catch (error) {
    MyToast.showToast('error', '500', 'Server Disconnected', 'top');
  }
};

export default Booking;
