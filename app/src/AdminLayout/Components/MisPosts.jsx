import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Container } from "react-bootstrap";
import LoginContext from "../../context/LoginContext";
import postService from "../../services/posts";
import UserPosts from "./UserPosts";

const MisPosts = () => {
  const [data, setData] = useState("");
  const { user } = useContext(LoginContext);

  useEffect(() => {
    postService.getAll().then((initialPosts) => {
      const userdata = initialPosts.filter(
        (post) => post.user.username === user.username
      );
      setData(userdata);
    });
  }, []);
  return (
    <Container>
      <h1>{user.username}</h1>
      <div>Mis Posts</div>
      <UserPosts data={data} />
    </Container>
  );
};

export default MisPosts;
