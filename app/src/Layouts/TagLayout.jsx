import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Tags from "../components/Tags";

const TagLayout = ({ title }) => {
  return (
    <Container className="contenedor">
      <Container>
        <Tags title={title} />
      </Container>
    </Container>
  );
};

export default TagLayout;
