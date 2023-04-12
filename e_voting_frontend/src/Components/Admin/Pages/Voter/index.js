import React from "react";
import Layout from "../../Layout/index";
import VoterList from "./VoterList";

const toRender = (
    <VoterList/>
);

const Index = () => {
    return <Layout render={toRender} />;
  };
  
  export default Index;