import React from "react";
import { useContext } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginContext from "../context/LoginContext";

const Admin = () => {
  const { isLoggedIn, handleLoggedOut } = useContext(LoginContext);

  return (
    <Container className="d-flex justify-content-center my-5 login-container">
      {isLoggedIn ? (
        <>
          <Container className="text-center">
            <h1 className="text-center">Admin Panel</h1>
            <h2>¿Que deseas hacer?</h2>
            <Container className="d-grid pt-3">
              <Row className="justify-content-center">
                <Col className="row gap-3" lg={6} md={8} sm={10} xs={12}>
                  <Link to={"create"}>
                    <Button variant="outline-primary" className="container">
                      Crear un nuevo Post
                    </Button>
                  </Link>
                  <Link to={"myposts"}>
                    <Button variant="outline-dark" className="container">
                      Ver mis Posts
                    </Button>
                  </Link>
                  <Link to={"perfil"}>
                    <Button variant="outline-primary" className="container">
                      Ver mi perfil
                    </Button>
                  </Link>
                  <Link to={"mynotes"}>
                    <Button variant="outline-dark" className="container" onClick={handleLoggedOut}>
                      Cerrar sesión
                    </Button>
                  </Link>
                </Col>
              </Row>
            </Container>
          </Container>
        </>
      ) : (
        <h1 className="text-center">
          Tiene que iniciar sesión para ver este contenido
        </h1>
      )}
    </Container>
  );
};

export default Admin;
