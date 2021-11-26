const Address = ({ handleChange, value, err, locationObj }) => {
  const { countries, states, cities } = locationObj;

  return (
    <fieldset className={`border p-2 mt-3`}>
      <legend className={`h6`}>Address</legend>
      <div className={`form-row`}>
        <div className={`form-group col-md-6`}>
          <label htmlFor="inputAddress">
            Address
            <span className={`text-danger`}>*</span>
          </label>
          <input
            type="text"
            className={`form-control form-control-sm ${
              err.address ? "is-invalid" : "is-valid"
            }`}
            id="inputAddress"
            name="address"
            value={value.address}
            placeholder="Dyanmandir Building"
            onChange={handleChange}
            required
          />
          {err.address && <div className="invalid-feedback">{err.address}</div>}
        </div>
        <div className={`form-group col-md-6`}>
          <label htmlFor="inputAddress2">Street Name</label>
          <input
            type="text"
            className={`form-control form-control-sm`}
            id="inputAddress2"
            name="streetName"
            value={value.streetName}
            placeholder="Nerurkar Road, Sangita Wadi"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className={`form-row`}>
        <div className={`form-group col-md-6`}>
          <label htmlFor="landmark">Landmark</label>
          <input
            type="text"
            className={`form-control form-control-sm`}
            id="landmark"
            name="landmark"
            value={value.landmark}
            placeholder="Dutta Nagar Chowk"
            onChange={handleChange}
          />
        </div>
        <div className={`form-group col-md-6`}>
          <label htmlFor="pincode">
            Pincode
            <span className={`text-danger`}>*</span>
          </label>
          <input
            type="text"
            className={`form-control form-control-sm ${
              err.pincode ? "is-invalid" : "is-valid"
            }`}
            id="pincode"
            name="pincode"
            value={value.pincode}
            placeholder="410 201"
            onChange={handleChange}
            required
          />
          {err.pincode && <div className="invalid-feedback">{err.pincode}</div>}
        </div>
      </div>

      {/* update the dropdown to have a auto complete type of search box (similar to selectize) */}
      <div className={`form-row`}>
        <div className={`form-group col-md-4`}>
          <label htmlFor="inputState">
            Country
            <span className={`text-danger`}>*</span>
          </label>
          <select
            id="inputState"
            name="country"
            value={value.country}
            onChange={handleChange}
            className={`form-control form-control-sm`}
          >
            {countries.map((country) => (
              <option key={country.country_name} value={country.country_name}>
                {country.country_name}
              </option>
            ))}
          </select>
        </div>
        <div className={`form-group col-md-4`}>
          <label htmlFor="inputState">
            State
            <span className={`text-danger`}>*</span>
          </label>
          <select
            id="inputState"
            name="state"
            value={value.state}
            onChange={handleChange}
            className={`form-control form-control-sm`}
          >
            {states.map((state) => (
              <option key={state.state_name} value={state.state_name}>
                {state.state_name}
              </option>
            ))}
          </select>
        </div>
        <div className={`form-group col-md-4`}>
          <label htmlFor="inputCity">
            City
            <span className={`text-danger`}>*</span>
          </label>
          <select
            id="inputCity"
            name="city"
            value={value.city}
            onChange={handleChange}
            className={`form-control form-control-sm`}
          >
            {cities &&
              cities.map((city) => (
                <option key={city.city_name} value={city.city_name}>
                  {city.city_name}
                </option>
              ))}
          </select>
        </div>
      </div>
    </fieldset>
  );
};

export default Address;
