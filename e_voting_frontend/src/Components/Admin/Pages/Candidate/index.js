import React from "react";
import Layout from "../../Layout/index";
import CandidateList from "./CandidateList";

const toRender = (
    <CandidateList/>
);

const Index = () => {
    return <Layout render={toRender} />;
  };
  
  export default Index;