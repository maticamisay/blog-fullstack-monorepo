import Post from "../components/Post";
import PostLayout from "../Layouts/PostLayout";
import Row from "react-bootstrap/Row";

const ContainerPost = ({ title, titleBtn, data }) => {
  return (
    <PostLayout title={title} titleBtn={titleBtn}>
      <Row className="justify-content-center">
        {data ? data.slice(0, 3).map((post) => <Post post={post} key={post.id}/>) : "cargando"}
      </Row>
    </PostLayout>
  );
};

export default ContainerPost;
