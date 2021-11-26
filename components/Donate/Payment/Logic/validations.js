export function validateData(e) {
  const name = e.target.name;
  const value = e.target.value;

  if (!value) return `This feild is required`;

  switch (true) {
    case name === "firstName" || name === "lastName":
      // https://stackoverflow.com/questions/2385701/regular-expression-for-first-and-last-name
      if (!/^[a-z ,.'-]+$/i.test(value)) {
        return `This feild is required`;
      }

      return false;
    case name === "email":
      // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        return `Please Enter Correct Email`;
      }
      return false;
    case name === "phoneNumber":
      if (!/[0-9\s]/gi.test(value)) return "invalid";
      if (value.length > 10) return "invalid";
      if (value.length === 10) return false;

      if (!/^([+]\d{2})?\d{10}$/.test(value)) {
        return `Enter a Valid Phone Number`;
      }
      return false;
    case name === "pincode":
      if (!/^[0-9]+$/gi.test(value)) return "invalid";
      if (value.length > 6) return "invalid";
      if (value.length === 6) return false;

      if (!/^([+]\d{2})?\d{10}$/.test(value)) {
        return `Enter a valid pin code`;
      }
      return false;
    case name === "amount":
      if (!/^[0-9]*\.?[0-9]*$/gi.test(value)) return "invalid";

      return false;
    case name === "pancard":
      if (!/^[0-9A-Z]+$/gi.test(value)) return "invalid";
      if (value.length > 10) return "invalid";
      if (value.length === 10) return false;

      if (!/^([+]\d{2})?\d{10}$/.test(value)) {
        return `Enter a valid pan card number`;
      }
      return false;
    default:
      return value.length < 1;
  }
}

export function validatePaymentDetails(e) {
  const name = e.target.name;
  const value = e.target.value;

  if (!value) return `This feild is required`;

  switch (true) {
    case name === "cardNumber":
      if (/\s$/.test(value)) return "invalid";
      return limitLenght(value, 16, /^[0-9\s]+$/gi);
    case name === "cardExpiryMonth":
      if (/00/.test(value)) return "Enter a valid month";
      if (/^1$/.test(value) && value.length !== 2)
        return "Enter Same Value as displayed on Card";
      if (/[2-9]/.test(value)) return false;

      return limitLenght(value, 2);
    case name === "cardExpiryYear":
      return limitLenght(value, 4);
    case name === "cardCvv":
      return limitLenght(value, 3);
    default:
      return value.length < 1;
  }
}

export function submitValidation(dataObj, ignoreErrorInput) {
  if (!Object.keys(dataObj).length) return false;
  let isValid = true;
  const errorKey = [];

  Object.keys(dataObj).forEach((objKey) => {
    if (ignoreErrorInput.includes(objKey)) return;
    if (dataObj[objKey]) return;

    console.log(5, objKey);
    isValid = false;
    errorKey.push(objKey);
    console.log(6, objKey);
  });

  return [isValid, errorKey];
}

export function paymentValdiation(paymentObj) {
  if (!Object.keys(paymentObj).length) return false;
  let isValid = true;
  const errorKey = [];

  Object.keys(paymentObj).forEach((objKey) => {
    if (paymentObj[objKey]) return;

    if (objKey === "paymentDetails") {
      Object.keys(paymentObj.paymentDetails).forEach((pdKey) => {
        if (paymentObj.paymentDetails[pdKey]) return;

        errorKey.push(pdKey);
        isValid = false;
        return;
      });
      return;
    }
    console.log(5, objKey);
    isValid = false;
    errorKey.push(objKey);
    console.log(6, objKey);
  });

  return [isValid, errorKey];
}

function limitLenght(value, length = 5, regex = /^[0-9]+$/gi) {
  if (!regex.test(value)) return "invalid";
  if (value.length > length) return "invalid";
  if (value.length === length) return false;

  return true;
}

function isEmpty(value) {
  if (!value) return true;

  return !value.trim();
}
