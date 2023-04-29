import React from "react";
import "../../style.css";
import Card1 from "../Party/AreaChart";
import Card2 from "../Party/ColumnChart";
// import Card3 from "../Party/PieChart";
import Card3 from "../Consityuncy/PieChart"
import { Typography } from "@mui/material";
import Layout from "../../Layout/index";

const toRender = (
  <>
    <Typography variant="h5" fontWeight={"bold"} paddingTop={3} paddingLeft={3}>
      Consituncy wise vote result
    </Typography>
    <div className="sub-div1">
      {/* <Card1 /> */}
      {/* <Card2 /> */}
      <Card3 />
    </div>
  </>
);

function Index() {
  return <Layout render={toRender} />;
}

export default Index;
