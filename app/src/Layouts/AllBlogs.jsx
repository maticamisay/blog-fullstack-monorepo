import { useEffect, useState } from 'react';
import { Container, Row } from "react-bootstrap";
import Post from "../components/Post";
import postService from "../services/posts";

const AllBlogs = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    postService.getAll().then((initialPosts) => {
      setData(initialPosts);
    });
  }, []);
  return (
    <Container className="post-layout bg-light rounded py-3">
      <Container>
        <h2>Todos los blogs</h2>
        <Row className="justify-content-center">
          {data
            ? data.map((post) => <Post post={post} key={post.id} />)
            : "cargando"}
        </Row>
      </Container>
    </Container>
  );
};

export default AllBlogs;
