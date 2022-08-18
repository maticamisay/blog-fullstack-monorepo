import { useEffect, useState } from "react";
import postService from "../services/posts";
import Hero from "../components/Hero";
import ContainerPost from "../containers/ContainerPost";
// import ContainerTag from "../containers/ContainerTag";
import Categories from "../components/Categories";
import ContainerSuscribirse from "../containers/ContainerSuscribirse";
import ContainerBuscador from "../containers/ContainerBuscador";

const Home = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    postService.getAll().then((initialPosts) => {
      setData(initialPosts);
    });
  }, []);
  return (
    <>
      <Hero />
      <Categories />
        <ContainerPost
          title={"Ultimos Posts"}
          titleBtn={"Ver más"}
          data={data}
        />
      {/* <ContainerPost
        title={"Posts más leídos"}
        titleBtn={"Ver más"}
        data={data}
      /> */}
      {/* <ContainerTag title={"Busca por nuestros tags"} /> */}
      <ContainerSuscribirse
        title={"¡Suscribete a nuestro canal de noticias!"}
        description={
          "Para no perderte nada del mejor blog sobre programación, diseño y más."
        }
      />
      <ContainerBuscador />
    </>
  );
};

export default Home;
