import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const Tags = ({ title }) => {
  return (
    <Row>
      <Col lg={12} md={12} sm={12} xs={10}>
        <Card className="bg-light">
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="tags-link"
              >
                tag1
              </a>
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="tags-link"
              >
                tag2
              </a>
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="tags-link"
              >
                tag3
              </a>
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="tags-link"
              >
                tag4
              </a>
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="tags-link"
              >
                tag5
              </a>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Tags;
