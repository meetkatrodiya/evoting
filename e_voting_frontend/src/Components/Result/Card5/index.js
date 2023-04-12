import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Chart } from "react-google-charts";

export const data = [
  ["Party", "Vote"],
  ["BJP", 1100],
  ["INC", 200],
  ["CPIM", 750],
];

export const options = {
  // title: "AllOver Votes",
  colors:['#1565C0','#C62828','#FFC107'],
  is3D: true,
};

function Index() {
  return (
    <Card sx={{ minWidth: 275, margin: 3, height: 400, width: "60%" }}>
      <CardContent>Allover Votes</CardContent>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </Card>
  );
}

export default Index;
