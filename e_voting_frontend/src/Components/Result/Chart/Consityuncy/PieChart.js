// import React from "react";
// import { Chart } from "react-google-charts";
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';

// // export const data = [
// //   ["Task", "Hours per Day"],
// //   ["Work", 11],
// //   ["Eat", 2],
// //   ["Commute", 2],
// //   ["Watch TV", 2],
// //   ["Sleep", 7],
// // ];

// export const options = {
//   title: "My Daily Activities",
// };

// export default function App() {
//   return (
//     <>
//     <Card sx={{ minWidth: 275, margin: 3 , width: "33%"}}>
//       <CardContent>
//           <Chart
//             chartType="PieChart"
//             data={data}
//             options={options}
//             width={"100%"}
//             height={"400px"}
//           />
//           </CardContent>
//           </Card>
//     </>
//   );
// }
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { apis } from '../../../../api/bootapi';
import Loading from '../../../Loading/Loading';
import axios from 'axios';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}



export default function App() {

  // const [rows,setRows] = React.useState(new Map());
  const [rows,setRows] = React.useState([]);
  const [loading,setLoading] = React.useState(false);
  React.useEffect(()=>{
    getConstituencyCount();
  },[]);
  async function getConstituencyCount (){
    const res = await axios.get(apis.winnercandidate);
    // .then((res)=>{
      // setData(res.data.voteCount);
      // setParty(res.data.partyList)
      setRows(res.data);
      setLoading(true);
  }

  return (
    <>
    {loading?
    <TableContainer component={Paper}>
      {/* {console.log(rows.set("Rajkot",["BJP",2]))} */}

      <Table sx={{ minWidth: 650 }} size="medium" aria-label="a dense table">
        {console.log(rows)}
        <TableHead style={{backgroundColor:"#00003B"}}>
          <TableRow >
            <TableCell style={{color:"#ffffff", fontSize:16}}>State</TableCell>
            <TableCell style={{color:"#ffffff", fontSize:16}}>Constituency</TableCell>
            <TableCell style={{color:"#ffffff", fontSize:16}}>Candidate name</TableCell>
            {/* <TableCell>Party Logo</TableCell> */}
            <TableCell style={{color:"#ffffff", fontSize:16}}>Party</TableCell>
            {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.adharid}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{ fontSize:15}}>
                {row.constituency.state.statename}
              </TableCell>
              <TableCell style={{ fontSize:15}}>{row.constituency.constituencyname}</TableCell>
              <TableCell style={{ fontSize:15}}>{row.name}</TableCell>
             
                <TableCell style={{display:"flex"}}>
                {row.party.partyname}
                    <img
                      src={`data:image/jpeg;base64,${row.party.partylogo}`}
                      alt="logo"
                      style={{ height: 35, width: 40 ,paddingLeft:5}}
                    />
                  
              </TableCell>
              {/* <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    :<Loading/>
          }
    </>
  );
}
