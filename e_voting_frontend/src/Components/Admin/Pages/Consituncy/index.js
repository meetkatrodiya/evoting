import React from "react";
import Layout from "../../Layout/index";
import ConsituncyList from "./ConsituncyList";

const toRender = (
    <ConsituncyList/>
);

const Index = () => {
    return <Layout render={toRender} />;
  };
  
  export default Index;