import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import useAuthContext from "../../hooks/useAuthContext";
import NavLoggedIn from "./NavLoggedIn";
import NavNotLoggedIn from "./NavNotLoggedIn";

const Navigation = () => {
  const { currentUser, logout } = useAuthContext();
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Link to="/" className="navbar-brand">
          <h1 className="h2">SwePlanner</h1>
        </Link>

        <Navbar.Toggle aria-controls="logged-in-navbar-nav" />
        <Navbar.Collapse id="logged-in-navbar-nav">
          <Nav className="ms-auto">
            {!currentUser ? (
              <NavNotLoggedIn />
            ) : (
              <NavLoggedIn currentUser={currentUser} logout={logout} />
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
