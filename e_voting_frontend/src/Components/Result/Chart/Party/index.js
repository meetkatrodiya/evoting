import React from "react";
import "../../style.css";
import Result from "./Result";
import { Typography } from "@mui/material";
import Layout from "../../Layout/index";
import axios from "axios";
import { apis } from "../../../../api/bootapi";
import NoResult from "../../home";
const toRender = (
  <>
    <Typography variant="h5" fontWeight={"bold"} paddingTop={3} paddingLeft={3}>
      Party wise vote result
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
