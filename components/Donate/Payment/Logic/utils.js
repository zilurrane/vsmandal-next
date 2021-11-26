export function autoCompleteExpiryMonth(value, data) {
  if (value > 12) return "12";
  if (value.length === 2) return value;
  if (/0[2-9]/.test(data.paymentDetails.cardExpiryMonth)) return "";
  if (/[0]/.test(value)) return value;
  if (value > 1) return `0${value}`;
}

export function separateValueWithSpace(value, addSpaceAt) {
  if (value.length < addSpaceAt) return value;
  if (value.length % addSpaceAt === 0) return `${value} `;
  return value;
}

export function getPaymentObj(paymentType) {
  if (/card/gi.test(paymentType)) {
    return {
      cardName: "",
      cardNumber: "",
      cardExpiryMonth: "",
      cardExpiryYear: "",
      cardCvv: "",
      pg: "",
      bankcode: "",
    };
  } else if (/wallet/gi.test(paymentType)) {
    return {
      walletCode: "PAYTM",
      pg: "CASH",
      bankcode: "",
    };
  } else if (/upi/gi.test(paymentType)) {
    return {
      vpa: "",
      pg: "UPI",
      bankcode: "UPI",
    };
  }else{
    return {
      
    }
  }
}
