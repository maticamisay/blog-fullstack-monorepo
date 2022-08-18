import React from "react";

import ReactLoading from "react-loading";

const Loader = ({ type, color }) => (
  <div className="d-flex justify-content-center loader align-items-center">
    <ReactLoading type={type} color={color} height={300}  className="d-flex"/>
  </div>
);

export default Loader;
