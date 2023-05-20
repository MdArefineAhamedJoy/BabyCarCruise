import React from "react";
import { Helmet } from "react-helmet";

const ChangeTitle = ({ title }) => {
  return (
    <Helmet>
      <title>BCC-{title}</title>
    </Helmet>
  );
};

export default ChangeTitle;
