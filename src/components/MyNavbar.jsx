import { Navbar, Nav, Container, Image } from "react-bootstrap";
import logo from "../assets/netflix_logo.png";
import { NavLink } from "react-router-dom";

const MyNavbar = () => {
  return (
    <Navbar expand="lg" variant="dark" className="custom-navbar">
      <Container fluid>
        <Navbar.Brand href="#">
          <Image src={logo} alt="Logo" style={{ width: 100, height: 55 }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto navbar-nav mb-2 mb-lg-0">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/tv-shows" className="nav-link">
              Tv Shows
            </NavLink>
            <NavLink to="/profile" className="nav-link">
              Profile
            </NavLink>
          </Nav>
          <div className="d-flex align-items-center text-white">
            <i className="bi bi-search ms-3 me-3 fs-6"></i>
            <div className="fw-bold nav-text">KIDS</div>
            <i className="bi bi-bell ms-3 me-3 fs-6"></i>
            <i className="bi bi-person-circle ms-3 me-3 fs-6"></i>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
