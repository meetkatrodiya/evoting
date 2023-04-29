import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Loading from "../../../Loading/Loading";
import axios from "axios";
import { apis } from "../../../../api/bootapi";

export const data = [
  ["Element", "Density", { role: "style" }],
  ["Copper", 8.94, "#b87333"], // RGB value
  ["Silver", 10.49, "silver"], // English color name
  ["Gold", 19.3, "gold"],
  ["Platinum", 21.45, "color: #e5e4e2"], // CSS-style declaration
];

export default function App() {
  const [dat,setData] = useState({});
  useEffect(()=>{
    getPartyCount();

  },[dat]);
  const [loading,setLoading] = useState(false);
  var d2 = 
      [
        ["Party", "Vote"],
      ];
      const [party,setParty] = useState([]);
  async function getPartyCount (){
    const res = await axios.get(apis.partycount)
    // .then((res)=>{
      setData(res.data.voteCount);
      setParty(res.data.partyList)
      setLoading(true);
  }

  return (
    <>
    {loading?
    <Card sx={{ minWidth: 275, margin: 3, width: "33%" }}>
      {
        party.map((item)=>{d2.push([item,dat[item]])})
      }
      <CardContent>
    <Chart chartType="ColumnChart" width="100%" height="400px" data={d2} />
    </CardContent>
    </Card>
    :<Loading/>
}
    </>
  );
}
