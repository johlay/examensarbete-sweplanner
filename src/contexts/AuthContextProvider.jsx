import { createContext, useState } from "react";
import axios from "axios";
import { getJwtAccessToken, storeJwtAccessToken } from "../helpers/index";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  // login user
  const login = async (userInformation) => {
    try {
      const response = await axios
        .post("http://localhost:3001/api/v1/user/login", userInformation)
        .then((data) => {
          // if authentication was successful
          if (data.status === 200) {
            // store jwt access token inside local storage
            storeJwtAccessToken(data.data.data.access_token);

            // store user's information inside a state variable
            setCurrentUser(data.data.data);
          }

          // returns a non-error data object
          return {
            status: data.status,
            data: data.data,
          };
        })
        .catch((error) => {
          // returns an error object
          return {
            status: error.response.status,
            data: error.response.data,
          };
        });

      return response;
    } catch (error) {
      throw error;
    }
  };

  // registration for new user
  const register = async (userInformation) => {
    try {
      const response = await axios
        .post("http://localhost:3001/api/v1/user/register", userInformation)
        .then((data) => {
          // returns a non-error data object
          return {
            status: data.status,
            data: data.data,
          };
        })
        .catch((error) => {
          // returns an error object
          return {
            status: error.response.status,
            data: error.response.data,
          };
        });

      return response;
    } catch (error) {
      throw error;
    }
  };

  const contextValues = { currentUser, login, register };

  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
