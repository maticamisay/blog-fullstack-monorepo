import { useState } from "react";
import { useContext } from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import LoginContext from "../context/LoginContext";

const NavBar = () => {
  const { isLoggedIn } = useContext(LoginContext);
  const [search, setSearch] = useState("");
  let navigate = useNavigate();
  const handleSearch = (event) => {
    event.preventDefault();
    navigate(`/search/${search}`)
    setSearch('')
  };
  return (
    <>
      <Navbar collapseOnSelect bg="dark" variant="dark" expand="md">
        <Container>
          <Navbar.Brand>
            <Link to={"/"} className="navbar-brand">
              Junior FullStack
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="px-3">
              {/* <NavDropdown
                title="Frontend"
                id="basic-nav-dropdown"
                className="px-1"
              >
                <NavDropdown.Item href="#action/3.1">HTML</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">CSS</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Javascript
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">React Js</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Backend"
                id="basic-nav-dropdown"
                className="px-1"
              >
                <NavDropdown.Item href="#action/3.1">Node Js</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Express</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">MySql</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#diseño-ui" className="px-1">
                Diseño Ui
              </Nav.Link> */}

              {isLoggedIn ? (
                <Nav.Item className="px-1">
                  <Link to={"/admin"} className="nav-link">
                    Admin Panel
                  </Link>
                </Nav.Item>
              ) : (
                <Nav.Item className="px-1">
                  <Link to={"/login"} className="nav-link">
                    Iniciar Sesion
                  </Link>
                </Nav.Item>
              )}
            </Nav>
            <Form className="d-flex" onSubmit={handleSearch}>
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={search}
                onChange={({ target }) => setSearch(target.value)}
              />
              <Button variant="primary" type="submit">
                Buscar
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
