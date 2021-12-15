import { NavLink } from "react-router-dom";

const NavNotLoggedIn = () => {
  return (
    <>
      <NavLink className="nav-link" to="/register">
        Register
      </NavLink>

      <NavLink className="nav-link" to="/login">
        Login
      </NavLink>
    </>
  );
};

export default NavNotLoggedIn;
