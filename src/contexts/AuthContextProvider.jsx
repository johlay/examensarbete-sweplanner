import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  // registration for new user
  const register = async (userInformation) => {
    try {
      const response = await axios
        .post("http://localhost:3001/api/v1/user/register", userInformation)
        .then((data) => {
          // returns a non-error data object
          return {
            status: data.status,
            data: data,
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

  const contextValues = { register };

  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
