import React, { useEffect } from "react";
import "../../style.css";
import Result from "./Result";
import { Typography } from "@mui/material";
import Layout from "../../Layout/index";
import { apis } from "../../../../api/bootapi";
import axios from "axios";
import NoResult from "../../home";
const toRender = (
  <>
    <Typography variant="h5" fontWeight={"bold"} paddingTop={3} paddingLeft={3}>
      Consituncy wise vote result
    </Typography>
    <div className="sub-div1">
      <Result />
    </div>
  </>
);

function Index() {
  const [resStart, setResStart] = React.useState(Date());
  const [current, setCurrent] = React.useState(Date());
  React.useEffect(() => {
    const d = new Date();
    setCurrent(d);
    axios
      .get(apis.resultst)
      .then((res) => {
        const d = new Date(`${res.data}`);
        console.log(d);
        setResStart(d);
      })
      .catch((err) => console.log(err));
  }, []);

  return current >= resStart ? (
    <>
      <Layout render={toRender} />
    </>
  ) : (
    <NoResult />
  );
  // :`Result is not declared yet check result after ${resStart}`
}

export default Index;
