import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Post from "../components/Post";
import postService from "../services/posts";
import "../styles/search.css";

const Search = () => {
  const searchKey = useParams();
  const [data, setData] = useState("");

  useEffect(() => {
    postService.getAll().then((initialPosts) => {
      const dataSearched = initialPosts.filter((searched) => {
        if (
          searched.title
            .toString()
            .toLowerCase()
            .includes(searchKey.search.toLowerCase()) ||
          searched.content
            .toString()
            .toLowerCase()
            .includes(searchKey.search.toLowerCase())
        ) {
          return searched;
        } else {
          return false;
        }
      });
      setData(dataSearched);
    });
  }, [searchKey]);
  return (
    <Container className="search-layout bg-light rounded py-3">
      <Container>
        <h2>Busqueda</h2>
        <Row className="justify-content-center">
          {data
            ? data.map((post) => <Post post={post} key={post.id} />)
            : "cargando"}
        </Row>
      </Container>
    </Container>
  );
};

export default Search;
