import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Chart } from "react-google-charts";

const allVoter = [
  ["voter", "all"],
  ["Voter", 15000],
];

const votedVoter = [
  ["Voter", "voted"],
  ["Voter", 12500],
];

export const diffdata = {
  old: allVoter,
  new: votedVoter,
};

export function App() {
  return (
    <Chart
      chartType="ColumnChart"
      width="100%"
      height="400px"
      diffdata={diffdata}
    />
  );
}
function Index() {
  return (
    <Card sx={{ minWidth: 275, margin: 3,height: 400}}>
      <CardContent>Number of Voters Voted Out of Total Voters</CardContent>
      <Chart
        chartType="ColumnChart"
        width="100%"
        height="400px"
        diffdata={diffdata}
      />
    </Card>
  );
}

export default Index;
