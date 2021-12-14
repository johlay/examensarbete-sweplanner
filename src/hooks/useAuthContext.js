import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContextProvider";

const useAuthContext = () => useContext(AuthContext);

export default useAuthContext;
