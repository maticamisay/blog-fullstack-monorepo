import React from "react";
import { Card } from "react-bootstrap";
import "../styles/post.css";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <Col lg={4} md={6} sm={10} xs={10}>
      <Link to={`/post/${post.id}`} className="post-link">
        <Card className="g-col-12 g-col-sm-6 g-col-md-4 g-col-lg-3 bg-primary post mt-5">
          <Card.Body className="post-body">
            <Card.Title className="post-title">{post.title}</Card.Title>
          </Card.Body>
          <Card.Img variant="top" src={post.imgSrc} />
        </Card>
      </Link>
    </Col>
  );
};

export default Post;
