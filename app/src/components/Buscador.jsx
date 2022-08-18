import React from "react";
import { Button, Card, Form, Row } from "react-bootstrap";

const Buscador = () => {
  return (
      <Row>
          <Card className="bg-light">
            <Card.Body>
              <Card.Title>¿No encontraste lo que buscabas?</Card.Title>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Proba acá</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Ingrese su búsqueda"
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Buscar
                  </Button>
                </Form>
            </Card.Body>
          </Card>
      </Row>
  );
};

export default Buscador;
