const PersonalDetails = ({ handleChange, value, err }) => {
  return (
    <fieldset className={`border p-2`}>
      <legend className={`h6`}>Personal Details</legend>
      {/* name input */}
      <div className={`form-row`}>
        <div className={`form-group col-md-6`}>
          <label htmlFor="firstName">
            First Name
            <span className={`text-danger`}>*</span>
          </label>
          <input
            type="text"
            className={`form-control form-control-sm ${
              err.firstName ? "is-invalid" : "is-valid"
            }`}
            id="firstName"
            placeholder="John"
            name="firstName"
            value={value.firstName}
            onChange={handleChange}
            required
          />
          {err.firstName && (
            <div className="invalid-feedback">{err.firstName}</div>
          )}
        </div>
        <div className={`form-group col-md-6`}>
          <label htmlFor="inputPassword4">
            Last Name
            <span className={`text-danger`}>*</span>
          </label>
          <input
            type="text"
            className={`form-control form-control-sm ${
              err.lastName ? "is-invalid" : "is-valid"
            }`}
            id="lastName"
            name="lastName"
            value={value.lastName}
            placeholder="Doe"
            onChange={handleChange}
            required
          />
          {err.lastName && (
            <div className="invalid-feedback">{err.lastName}</div>
          )}
        </div>
      </div>
      {/* email and phone number */}
      <div className={`form-row`}>
        <div className={`form-group col-md-6`}>
          <label htmlFor="inputEmail">
            Email
            <span className={`text-danger`}>*</span>
          </label>
          <input
            type="email"
            className={`form-control form-control-sm ${
              err.email ? "is-invalid" : "is-valid"
            }`}
            id="inputEmail"
            name="email"
            value={value.email}
            placeholder="Email"
            onChange={handleChange}
            required
          />
          {err.email && <div className="invalid-feedback">{err.email}</div>}
        </div>
        <div className={`form-group col-md-6`}>
          <label htmlFor="phoneNumber">
            Phone Number
            <span className={`text-danger`}>*</span>
          </label>
          <div className={`input-group mb-2`}>
            <select
              className={`input-group-text w-25 h-50 px-0`}
              placeholder="+91"
              value={value.phoneNumberCode}
              name="phoneNumberCode"
              onChange={handleChange}
            >
              {/* auto generate */}
              <option value="+91">+91</option>
            </select>
            <input
              type="tel"
              className={`form-control form-control-sm w-75 ${
                err.phoneNumber ? "is-invalid" : "is-valid"
              }`}
              id="phoneNumber"
              name="phoneNumber"
              value={value.phoneNumber}
              placeholder="9898 7012 26"
              onChange={handleChange}
              required
            />
            {err.phoneNumber && (
              <div className="invalid-feedback">{err.phoneNumber}</div>
            )}
          </div>
        </div>
      </div>
    </fieldset>
  );
};

export default PersonalDetails;
