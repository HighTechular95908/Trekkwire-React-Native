export const isValidName = fullname => {
  if (fullname == '') {
    return false;
  } else return true;
};
export const isValidEmail = email => {
  // Implement your email validation logic here
  // Return true if the email is valid, false otherwise
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};
export const isValidConfirm = (password, password_r) => {
  if (password == password_r) {
    return true;
  } else return false;
};
export const isValidPhoneNumber = phoneNumber => {
  const phoneNumberRegex = /^[0-9-]+$/;
  return phoneNumberRegex.test(phoneNumber);
};
export const isValidPassword = password => {
  if (password == '' || password.length < 5) {
    return false;
  } else return true;
};
export const isValidDuration = (start, end) => {
  if (start >= end) {
    return false;
  } else return true;
};
