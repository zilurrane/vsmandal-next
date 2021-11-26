import { useEffect, useState } from "react";
import { getCardDetails } from "../../../../shared/api";
import { loadCities, loadCountries, loadStates } from "./loadLocationDetails";
import {
  autoCompleteExpiryMonth,
  getPaymentObj,
  separateValueWithSpace,
} from "./utils";
import {
  submitValidation,
  validateData,
  validatePaymentDetails,
} from "./validations";

export default function useHandlePayment() {
  const [activeTab, setActiveTab] = useState("Netbanking");
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumberCode: "+91",
    phoneNumber: "",
    address: "",
    streetName: "",
    landmark: "",
    pincode: "",
    country: "India",
    state: "Maharashtra",
    city: "Dombivli",
    amount: "",
    pancard: "",
    paymentType: "card",
    paymentDetails: {},
  });
  const [error, setError] = useState({});
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [isDataSubmitted, setIsDataSubmitted] = useState(false);

  const ignoreErrorInput = [
    "landmark",
    "streetName",
    "country",
    "city",
    "state",
    "phoneNumberCode",
    "walletCode",
  ];

  useEffect(() => {
    loadCountries()
      .then(async (loadedCountries) => {
        setCountries(loadedCountries);
        const loadedStates = await loadStates("India");
        const loadedCities = await loadCities("Maharashtra");

        setStates(loadedStates);
        setCities(loadedCities);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setData({
      ...data,
      paymentType: activeTab.toLowerCase(),
      paymentDetails: getPaymentObj(activeTab),
    });
  }, [activeTab]);

  useEffect(() => {
    console.log(data, error);
  }, [data, error]);

  function reloadStates(country) {
    loadStates(country).then(async (loadedStates) => {
      const loadedCities = await loadCities(states[0].state_name);
      setData({
        ...data,
        country,
        state: loadedStates[0].state_name,
        city: loadedCities[0].city_name,
      });
      setCities(loadedCities);
      setStates(loadedStates);
    });
  }

  function reloadCities(state) {
    loadCities(state).then((loadedCities) => {
      setData({
        ...data,
        state,
        city: loadedCities[0].city_name,
      });
      setCities(loadedCities);
    });
  }

  function switchTab(val) {
    setData({ ...data, paymentDetails: getPaymentObj(val) });
    setActiveTab(val);
  }

  function handleChange(e) {
    setIsDataSubmitted(false);
    let isValid = validateData(e);
    if (isValid === "invalid") return;

    const name = e.target.name;
    const value = e.target.value;

    if (name === "country") {
      reloadStates(value);
    }
    if (name === "state") {
      reloadCities(value);
    }

    if (/^card/i.test(name)) {
      isValid = validatePaymentDetails(e);
      console.log(isValid);
      if (isValid === "invalid") return;

      const paymentDetails = {
        ...data.paymentDetails,
        [name]: value,
      };

      // if (name === "cardNumber") {
      //   paymentDetails[name] = separateValueWithSpace(value, 4);
      // }
      if (name === "cardExpiryMonth") {
        paymentDetails[name] = autoCompleteExpiryMonth(value, data);
      }

      setError({
        ...error,
        [name]: isValid,
      });

      return setData({
        ...data,
        paymentType: "card",
        paymentDetails,
      });
    }

    if (/^wallet/i.test(name)) {
      const paymentDetails = {
        ...data.paymentDetails,
        [name]: value,
      };

      return setData({
        ...data,
        paymentType: "wallet",
        paymentDetails,
      });
    }

    if (name === "pancard") {
      setError({
        ...error,
        [name]: isValid,
      });

      return setData({
        ...data,
        [name]: value.toUpperCase(),
      });
    }

    if (!ignoreErrorInput.includes(name)) {
      setError({
        ...error,
        [name]: isValid,
      });
    }

    setData({
      ...data,
      [name]: value,
    });
  }

  function submitForm(e) {
    e.preventDefault();
    // check for validating required data
    setIsDataSubmitted(true);
    console.log(data, error);

    if (Object.values(error).some((err) => err)) {
      Object.values(error).some((err) => {
        console.log(err);
        return err;
      });
      console.log("Not done");
      return false;
    }

    // add temporary values
    const ignoreInputs = [...ignoreErrorInput, "paymentDetails"];
    const [isDataValid, errorKeyArr] = submitValidation(data, ignoreInputs);

    console.log(isDataValid);
    if (!isDataValid) {
      const errObj = { ...error };
      errorKeyArr.map((key) => {
        errObj[key] = "This field is required";
      });

      setError(errObj);
      console.log(errorKeyArr);
      return false;
    }

    return true;
    // submit data to backend
  }

  function handleBlur(e) {
    const value = e.target.value;
    if (value.length === 6) {
      getCardDetails(value).then((res) => console.log(res));
    }
  }

  return {
    activeTab,
    switchTab,
    handleChange,
    handleBlur,
    submitForm,
    data,
    error,
    isDataSubmitted,
    locationObj: {
      countries,
      states,
      cities,
    },
  };
}
