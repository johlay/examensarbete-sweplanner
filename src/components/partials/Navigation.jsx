import { Link, NavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container fluid>
        <Link to="/" className="navbar-brand">
          <span className="h2">SwePlanner</span>
        </Link>

        <Nav className="justify-content-end">
          <NavLink className="nav-link" to="/register">
            Register
          </NavLink>

          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
