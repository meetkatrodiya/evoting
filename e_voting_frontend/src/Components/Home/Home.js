import React from "react";
import Header from "./Header";
import { Button } from "@mui/material";
import BgImage from "../../assets/image.png";
import { Link } from "react-router-dom";

function Home() {
  const HomeStyle = {
    color: "#fff",
    height: 685,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    background: `url(${BgImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  const TextStyle1 = {
    display: "block",
    fontSize: 30,
    paddingLeft: 100,
    paddingRight: 100,
    paddingTop: 150,
    paddingDown: 0,
    textAlign: "center",
    textTransform: "capitalize",
    fontFamily: "Sitka Small Semibold, sans-serif",
  };

  const TextStyle2 = {
    display: "block",
    fontSize: 80,
    paddingTop: 0,
    textAlign: "center",
    textTransform: "uppercase",
    fontFamily: "Sitka Small Semibold, sans-serif",
  };

  const TextStyle3 = {
    textAlign: "center",
    fontSize: 30,
    color: "#e6e6ff",
    WebkitTextStrokeColor: "black",
  };

  const ButtonStyle = {
    backgroundColor: "#000066",
    marginLeft: "45%",
    marginTop: "5%",
    fontSize: 20,
  };

  return (
    <>
      <Header />
      <div style={HomeStyle}>
        <div style={TextStyle1}>Your Vote is your Voice</div>
        <div style={TextStyle2}>Make the right Decision</div>
        <div style={{ display: "flex", justifyContent: "space-around"}}>
          <div style={TextStyle3}>Election Date : 01/05/2023 - 03/05/2023</div>
          <div style={TextStyle3}>
            Registration Date : 01/04/2023 - 03/04/2023
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div style={TextStyle3}>Election Time : 10:00 - 02:00</div>
          <div style={TextStyle3}>Registration Time : 10:00 - 05:00</div>
        </div>
        <Button component= {Link} to="/result" variant="contained" style={ButtonStyle}>
          View Result
        </Button>
      </div>
    </>
  );
}

export default Home;
