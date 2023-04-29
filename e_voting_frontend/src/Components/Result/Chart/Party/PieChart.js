import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import axios from "axios";
import { apis } from "../../../../api/bootapi";
import Loading from "../../../Loading/Loading";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// export const data = [
//   ["Task", "Hours per Day"],
//   ["Work", 11],
//   ["Eat", 2],
//   ["Commute", 2],
//   ["Watch TV", 2],
//   ["Sleep", 7],
// ];

export const options = {
  // title: "Party Wise Vote Count",
  'width':600,
  'height':430,
  'is3D':true,
  'backgroundColor':'#f2f2f2'
};

export default function App() {


  const [check,setCheck] = useState(false)
  const [dat,setData] = useState({});
  useEffect(()=>{
    getPartyCount();

  },[check]);
  const [loading,setLoading] = useState(false);
  var d2 = 
      [
        ["Party", "Vote"],
      ];
      const [party,setParty] = useState([]);
  async function getPartyCount (){
    const res = await axios.get(apis.partycount)
    // .then((res)=>{
      console.log(res.data)
      setData(res.data.voteCount);
      setParty(res.data.partyList);
      handlecheck()
      setLoading(true);
  }

  const [first,setFirst] = useState(true)

  const handlecheck = ()=>{
    if(check)
      setCheck(false)
    else
      setCheck(true)
  }
  return (
    <>
    {loading?
  <div style={{display:"flex", margin:"auto"}}>
     {
        party.map((item)=>{d2.push([item,dat[item]])})
      }
<div style={{paddingRight:80}}> 
<TableContainer component={Paper} sx={{marginTop:5}}>
      {/* {console.log(rows.set("Rajkot",["BJP",2]))} */}

      <Table  size="medium" aria-label="a dense table" >
      
        <TableHead style={{backgroundColor:"#00003B"}}>
          <TableRow sx={{paddingRight:50}}>
            <TableCell style={{color:"#ffffff", fontSize:16}}>Party</TableCell>
            <TableCell style={{color:"#ffffff", fontSize:16}}>Party Count</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {/* <TableRow> */}
            {console.log(d2)}
            {/* { first = true} */}
            {d2.map((item,index)=>
              <>
              { index==0 ? ""
              :
              <>
              <TableRow>
            <TableCell style={{ fontSize:15}}>{item[0]}</TableCell>
            <TableCell style={{ fontSize:15}}>{item[1]}</TableCell>
            </TableRow>
            </>
              }
            </>
          )}
          {/* </TableRow> */}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    {/* <Card sx={{  margin: 3 }}> */}
     
    
      {/* <CardContent> */}
      <div >
          <Chart
            chartType="PieChart"
            data={d2}
            options={options}
            width={"100%"}
            height={"400px"}
          />
          {/* </CardContent> */}
          {/* // </Card> */}
          </div>
          </div>
      
          :<Loading/>
    }
    </>
  );
}
