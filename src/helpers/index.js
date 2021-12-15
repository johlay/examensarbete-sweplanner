// get jwt access token from local storage
const getJwtAccessToken = () => {
  return JSON.parse(localStorage.getItem("access_token"));
};

// store jwt access token in local storage
const storeJwtAccessToken = (jwt_access_token) => {
  return localStorage.setItem("access_token", JSON.stringify(jwt_access_token));
};

export { getJwtAccessToken, storeJwtAccessToken };
