import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavLoggedIn = ({ currentUser, logout }) => {
  return (
    <>
      <Navbar.Text className="me-3 text-light">
        Signed in as: {currentUser?.first_name + " " + currentUser?.last_name}
      </Navbar.Text>
      <NavDropdown
        title={
          <FontAwesomeIcon icon={["fas", "user"]} size="1x" color="white" />
        }
        id="nav-dropdown"
      >
        <Link className="dropdown-item" to="/profile">
          My profile
        </Link>
        <NavDropdown.Divider />
        <Link className="dropdown-item" to="/" onClick={() => logout()}>
          Log out
        </Link>
      </NavDropdown>
    </>
  );
};

export default NavLoggedIn;
