const PaymentDetails = ({ tabs, handleChange, value, err }) => {
  const [activeTab, switchTab] = tabs;
  const tabLinks = ["Netbanking", "Cards", "UPI", "Wallet"];

  return (
    <fieldset className={`border p-2 mt-3`}>
      <legend className={`h6`}>Payment Details</legend>

      <div className={`form-row`}>
        {/* amount */}
        <div className={`form-group col-md-6`}>
          <label htmlFor="amount">
            Amount
            <span className={`text-danger`}>*</span>
          </label>
          <input
            type="text"
            className={`form-control form-control-sm ${
              err.amount ? "is-invalid" : "is-valid"
            }`}
            id="amount"
            name="amount"
            placeholder="1000.0"
            value={value.amount}
            onChange={handleChange}
            required
          />
          {err.amount && <div className="invalid-feedback">{err.amount}</div>}
        </div>
        {/* pan card */}
        <div className={`form-group col-md-6`}>
          <label htmlFor="pancard">
            Pan Card
            <span className={`text-danger`}>*</span>
          </label>
          <input
            type="text"
            className={`form-control form-control-sm ${
              err.pancard ? "is-invalid" : "is-valid"
            }`}
            id="pancard"
            name="pancard"
            value={value.pancard}
            placeholder="Enter Pan Card Number"
            onChange={handleChange}
            required
          />
          {err.pancard && <div className="invalid-feedback">{err.pancard}</div>}
        </div>
      </div>
    </fieldset>
  );
};

export default PaymentDetails;
