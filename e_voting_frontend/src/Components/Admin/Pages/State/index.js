import React from "react";
import Layout from "../../Layout/index";
import StateList from "./StateList";

const toRender = <StateList />;

const Index = () => {
  return <Layout render={toRender} />;
};

export default Index;
