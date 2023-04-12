import * as React from "react";
import ShowCard from "./Card";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <div style={{padding: 30,
      backgroundColor: "#f2f2f2", margin: "1.5%"}}>
      <Typography
        variant="h4"
        style={{ textAlign: "center", fontWeight: "bold", marginBottom: 5 }}
        textAlign
      >
        Election Details
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <ShowCard title={"For Election"} />
        <ShowCard title={"For Registration"} />
      </div>
    </div>
  );
}
