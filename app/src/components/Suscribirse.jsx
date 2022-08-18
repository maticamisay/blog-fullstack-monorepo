import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

const Suscribirse = ({ title, description }) => {
  return (
    <Container>
      <Row>
        <Col lg={12} md={12} sm={12} xs={10}>
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
        </Col>
      </Row>
    </Container>
  );
};

export default Suscribirse;
