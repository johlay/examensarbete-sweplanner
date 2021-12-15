// retrieve jwt access token from local storage
const retrieveJwtAccessToken = () => {
  return JSON.parse(localStorage.getItem("access_token"));
};

export { retrieveJwtAccessToken };
