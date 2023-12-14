import React from 'react';
import * as UtilityFunction from '../custom-files/UtilityFunction';
import * as MyToast from '../custom-files/MyToast';

const BookingValidation = (start, end, travelName, guideId) => {
  if (UtilityFunction.isValidDuration(start, end)) {
    MyToast.showToast('success', '200', 'Successfully Booked', 'top');
    return true;
  } else {
    MyToast.showToast('warn', '400', 'Enter Date Correctly', 'top');
    return false;
  }
};

export default BookingValidation;
