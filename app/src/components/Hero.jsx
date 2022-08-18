import React from "react";

const Hero = () => {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <img
        className="d-block mx-auto mb-4"
        src="https://cdn-icons-png.flaticon.com/512/1005/1005141.png"
        alt=""
        width="100"
        // height="57"
      />
      <h1 className="display-5 fw-bold">Blog Tech</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          El contenido de este blog esta a cargo de Martina y Matias, para brindar un aporte a la comunidad tech. En este blog se tratarán temas de programación, front y backend, diseño ux, diseño ui, y más.
        </p>
      </div>
    </div>
  );
};

export default Hero;
