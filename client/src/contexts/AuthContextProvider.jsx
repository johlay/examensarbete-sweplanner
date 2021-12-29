import { createContext, useEffect, useState } from "react";
import axios from "axios";
import useLocalStorage from "../hooks/useLocalStorage";

const base_url = process.env.REACT_APP_REST_API_BASE_URL;

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [storageUser, setStorageUser] = useLocalStorage("user");
  const [accessToken, setAccessToken] = useLocalStorage("access_token");

  useEffect(() => {
    if (!storageUser) {
      return;
    }

    // when component mounts, check if storage key: "user" is stored in local storage. If true, load it to state.
    if (storageUser) {
      return setCurrentUser(storageUser);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // login user
  const login = async (userInformation) => {
    try {
      const response = await axios
        .post(`${base_url}/api/v1/user/login`, userInformation)
        .then((data) => {
          // if authentication was successful
          if (data.status === 200) {
            // store user data and jwt access token inside local storage
            setStorageUser(data.data.data.user);
            setAccessToken(data.data.data.access_token);

            // store user's information inside a state variable
            setCurrentUser(data.data.data.user);
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

  const logout = () => {
    // log out the user by resetting to null
    setCurrentUser(null);
    setStorageUser(null);

    // set access token to null (local storage)
    setAccessToken(null);
  };

  // registration for new user
  const register = async (userInformation) => {
    try {
      const response = await axios
        .post(`${base_url}/api/v1/user/register`, userInformation)
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

  // refresh user state and user stored in local storage with updated information
  const refreshUser = (userInformation) => {
    setCurrentUser(userInformation);
    setStorageUser(userInformation);
  };

  const contextValues = {
    accessToken,
    currentUser,
    login,
    logout,
    register,
    refreshUser,
  };

  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
