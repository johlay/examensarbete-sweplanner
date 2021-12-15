import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavLoggedIn = ({ currentUser, logout }) => {
  console.log("logout", logout);
  return (
    <>
      <Navbar.Text className="me-3 text-light">
        Signed in as: {currentUser?.user?.email}
      </Navbar.Text>
      <NavDropdown
        title={<FontAwesomeIcon icon={faUser} size="1x" color="white" />}
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
