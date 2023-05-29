import React from "react";
import Layout from "./Layout/index";
import Home from "./index";
const toRender = <Home />;

const Index = () => {
  return <Layout render={toRender} />;
};

export default Index;
