import React from "react";
import { Chart } from "react-google-charts";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];

export const options = {
  title: "My Daily Activities",
};

export default function App() {
  return (
    <>
    <Card sx={{ minWidth: 275, margin: 3 , width: "33%"}}>
      <CardContent>
          <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={"100%"}
            height={"400px"}
          />
          </CardContent>
          </Card>
    </>
  );
}
