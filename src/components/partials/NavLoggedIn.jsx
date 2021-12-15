import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavLoggedIn = ({ currentUser }) => {
  return (
    <>
      <Navbar.Text className="me-3 text-light">
        Signed in as: {currentUser?.user?.email}
      </Navbar.Text>
      <NavDropdown
        title={<FontAwesomeIcon icon={faUser} size="1x" color="white" />}
        id="nav-dropdown"
      >
        <NavDropdown.Item href="">My profile</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="">Log out</NavDropdown.Item>
      </NavDropdown>
    </>
  );
};

export default NavLoggedIn;
