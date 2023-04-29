import axios from "axios";
import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { apis } from "../../../api/bootapi";


export const data = [
  ["Party", "Vote"],
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
  const [d,setD] = useState([]);
  useEffect(()=>{
    getPartyCount();
  },[d]);
  const getPartyCount = ()=>{
    axios.get(apis.partycount).then((res)=>{
      setD(res.data)
      var d2 = 
      [
        ["Party", "Vote"],
      ];
      d.map((item)=> d2.push(item))
      console.log(d2)
    }).catch((err)=>{
      console.log(err);
    })
  }


  
  return (
    <>
          <Chart
            chartType="PieChart"
            data={d}
            options={options}
            width={"100%"}
            height={"400px"}
          />
    </>
  );
}
