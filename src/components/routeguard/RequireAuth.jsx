import RequireAuthMessage from "./RequireAuthMessage";
import useAuthContext from "../../hooks/useAuthContext";

const RequiredAuth = ({ children }) => {
  const { currentUser } = useAuthContext();

  if (!currentUser) {
    return <RequireAuthMessage />;
  } else {
    return children;
  }
};

export default RequiredAuth;
