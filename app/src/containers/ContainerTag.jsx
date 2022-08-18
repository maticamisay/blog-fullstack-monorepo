import React from "react";
import TagLayout from "../Layouts/TagLayout";

const ContainerTag = ({ children, title }) => {
  return <TagLayout title={title}>{children}</TagLayout>;
};

export default ContainerTag;
