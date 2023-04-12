import React from "react";
import { Chart } from "react-google-charts";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export const data = [
  ["Year", "Sales", "Expenses"],
  ["2013", 1000, 400],
  ["2014", 1170, 460],
  ["2015", 660, 1120],
  ["2016", 1030, 540],
];

export const options = {
  title: "Company Performance",
  hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
  vAxis: { minValue: 0 },
  chartArea: { width: "50%", height: "70%" },
};

export default function App() {
  return (
    <Card sx={{ minWidth: 275, margin: 3, width: "33%" }}>
      <CardContent>
        <Chart
          chartType="AreaChart"
          width="100%"
          height="400px"
          data={data}
          options={options}
        />
      </CardContent>
    </Card>
  );
}
