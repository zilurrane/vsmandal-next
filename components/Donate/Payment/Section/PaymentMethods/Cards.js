export default function Cards({ handleChange, handleBlur, value, err }) {
  console.log(value);
  return (
    <div className={`form-row`}>
      <div className={`form-group col-md-6`}>
        <label htmlFor="card-name">
          Card Name
          <span className={`text-danger`}>*</span>
        </label>
        <input
          type="text"
          className={`form-control form-control-sm ${
            err.cardName ? "is-invalid" : "is-valid"
          }`}
          id="card-name"
          name="cardName"
          value={value.paymentDetails.cardName}
          placeholder="Enter name as on Card"
          onChange={handleChange}
          required
        />
        {err.cardName && <div className="invalid-feedback">{err.cardName}</div>}
      </div>

      <div className={`form-group col-md-6`}>
        <label htmlFor="card-number">
          Card Number
          <span className={`text-danger`}>*</span>
        </label>
        <input
          type="text"
          className={`form-control form-control-sm ${
            err.cardNumber ? "is-invalid" : "is-valid"
          }`}
          id="card-number"
          name="cardNumber"
          value={value.paymentDetails.cardNumber}
          placeholder="Enter Card Number"
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {err.cardNumber && (
          <div className="invalid-feedback">{err.cardNumber}</div>
        )}
      </div>

      <div className={`form-group col-md-3`}>
        <label htmlFor="card-expiry-month">
          Expiry Month
          <span className={`text-danger`}>*</span>
        </label>
        <input
          type="text"
          className={`form-control form-control-sm ${
            err.cardExpiryMonth ? "is-invalid" : "is-valid"
          }`}
          id="card-expiry-month"
          name="cardExpiryMonth"
          value={value.paymentDetails.cardExpiryMonth}
          placeholder="MM"
          onChange={handleChange}
          required
        />
        {err.cardExpiryMonth && (
          <div className="invalid-feedback">{err.cardExpiryMonth}</div>
        )}
      </div>

      <div className={`form-group col-md-3`}>
        <label htmlFor="card-expiry-year">
          Expiry Year
          <span className={`text-danger`}>*</span>
        </label>
        <input
          type="text"
          className={`form-control form-control-sm ${
            err.cardExpiryYear ? "is-invalid" : "is-valid"
          }`}
          id="card-expiry-year"
          name="cardExpiryYear"
          value={value.paymentDetails.cardExpiryYear}
          placeholder="YYYY"
          onChange={handleChange}
          required
        />
        {err.cardExpiryYear && (
          <div className="invalid-feedback">{err.cardExpiryYear}</div>
        )}
      </div>

      <div className={`form-group col-md-6`}>
        <label htmlFor="card-cvv">
          CVV
          <span className={`text-danger`}>*</span>
        </label>
        <input
          type="text"
          className={`form-control form-control-sm ${
            err.cardCvv ? "is-invalid" : "is-valid"
          }`}
          id="card-cvv"
          name="cardCvv"
          value={value.paymentDetails.cardCvv}
          placeholder="Enter CVV"
          onChange={handleChange}
          required
        />
        {err.cardCvv && <div className="invalid-feedback">{err.cardCvv}</div>}
      </div>
    </div>
  );
}
