import React from "react";
import { Button, Card, Form, Row } from "react-bootstrap";

const Suscribirse = ({ title, description }) => {
  return (
      <Row>
          <Card className="bg-light">
            <Card.Body>
              <Card.Title>{title}</Card.Title>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>{description}</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                      Nunca compartiremos su correo electrónico con nadie más.
                    </Form.Text>
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Suscribirme
                  </Button>
                </Form>
            </Card.Body>
          </Card>
      </Row>
  );
};

export default Suscribirse;
