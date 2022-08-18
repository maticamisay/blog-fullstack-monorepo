import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid className="bg-dark footer text-white">
      <Row className="row-footer">
        <Col lg={3} md={4} sm={8} xs={10} className="py-3">
          <Container>
            <h3>Links útiles</h3>
            <Row className="row-footer">Inicio</Row>
            <Row className="row-footer">Nosotros</Row>
            <Row className="row-footer">Contacto</Row>
          </Container>
        </Col>
        <Col lg={3} md={4} sm={8} xs={10} className="py-3">
          <Container>
            <h3>Categorias</h3>
            <Row className="row-footer">Frontend</Row>
            <Row className="row-footer">Backend</Row>
            <Row className="row-footer">Diseño Ux Ui</Row>
          </Container>
        </Col>{" "}
        <Col lg={3} md={4} sm={8} xs={10} className="py-3">
          <Container>
            <h3>Redes Sociales</h3>
            <Row className="row-footer">Facebook</Row>
            <Row className="row-footer">Twitter</Row>
            <Row className="row-footer">Instagram</Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
