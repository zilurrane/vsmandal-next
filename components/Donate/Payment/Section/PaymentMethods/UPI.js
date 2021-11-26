export default function UPI({ handleChange,handleClick, value, err }) {
  return (
    <div className={`form-row`}>
      <div className={`form-group col-md-6`}>
        <label htmlFor="wallet-code">
          UPI Handle
          <span className={`text-danger`}>*</span>
        </label>
        <input
          type="text"
          className={`form-control form-control-sm ${
            err.vpa ? "is-invalid" : "is-valid"
          }`}
          id="vpa"
          name="vpa"
          value={value.paymentDetails.vpa}
          placeholder="upi@bankcode"
          onChange={handleChange}
          required
        />
        <button onClick={handleClick}>Verfiy</button>
        {err.vpa && <div className="invalid-feedback">{err.vpa}</div>}{" "}
      </div>
    </div>
  );
}
