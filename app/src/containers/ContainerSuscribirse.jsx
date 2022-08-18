import React from "react";
import { Container } from "react-bootstrap";
import Suscribirse from "../components/Suscribirse";

const ContainerBuscador = ({title,description}) => {
  return (
    <Container className="py-4">
      <Suscribirse title={title} description={description}/>
    </Container>
  );
};

export default ContainerBuscador;
