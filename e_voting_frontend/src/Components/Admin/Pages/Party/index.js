import React from "react";
import Layout from "../../Layout/index";
import PartyList from "./PartyList";

const toRender = (
    <PartyList/>
);

const Index = () => {
    return <Layout render={toRender} />;
  };
  
  export default Index;