import React from "react";
import { Chart } from "react-google-charts";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export const data = [
  ["Element", "Density", { role: "style" }],
  ["Copper", 8.94, "#b87333"], // RGB value
  ["Silver", 10.49, "silver"], // English color name
  ["Gold", 19.3, "gold"],
  ["Platinum", 21.45, "color: #e5e4e2"], // CSS-style declaration
];

export default function App() {
  return (
    <Card sx={{ minWidth: 275, margin: 3, width: "33%" }}>
      <CardContent>
    <Chart chartType="ColumnChart" width="100%" height="400px" data={data} />
    </CardContent>
    </Card>
  );
}
