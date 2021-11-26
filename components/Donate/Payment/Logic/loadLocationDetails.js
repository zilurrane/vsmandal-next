const API_KEY =
  "ZJFEQLc2XCBwgeZMKjXlEM2kHZuyW2xDELQ1ti3vHEQGBsOoJTMBKTLF83iGSu7Wov4";
const USER_EMAIL = "vajresh005@gmail.com";

function getAuthToken() {
  return fetch("https://www.universal-tutorial.com/api/getaccesstoken", {
    headers: {
      Accept: "application/json",
      "api-token": API_KEY,
      "user-email": USER_EMAIL,
    },
  })
    .then((res) => res.json())
    .then((res) => res.auth_token)
    .catch((err) => console.log(err));
}

exports.loadCountries = async () => {
  const token = await getAuthToken();
  return fetch("https://www.universal-tutorial.com/api/countries/", {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => console.log(err));
};

exports.loadStates = async (country) => {
  console.log(country);
  const token = await getAuthToken();
  return fetch(`https://www.universal-tutorial.com/api/states/${country}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => console.log(err));
};

exports.loadCities = async (state) => {
  console.log(state);
  const token = await getAuthToken();
  return fetch(`https://www.universal-tutorial.com/api/cities/${state}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => console.log(err));
};
