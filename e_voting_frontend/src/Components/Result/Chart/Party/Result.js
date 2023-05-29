import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import axios from "axios";
import { apis } from "../../../../api/bootapi";
import Loading from "../../../Loading/Loading";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export const options = {
  width: 600,
  height: 430,
  is3D: true,
  backgroundColor: "#f2f2f2",
};

export default function App() {
  const [check, setCheck] = useState(false);
  const [dat, setData] = useState({});
  useEffect(() => {
    getPartyCount();
  }, [check]);
  const [loading, setLoading] = useState(false);
  var d2 = [["Party", "Vote"]];
  const [party, setParty] = useState([]);
  async function getPartyCount() {
    const res = await axios.get(apis.partycount);
    console.log(res.data);
    setData(res.data.voteCount);
    setParty(res.data.partyList);
    handlecheck();
    setLoading(true);
  }

  const handlecheck = () => {
    if (check) setCheck(false);
    else setCheck(true);
  };
  return (
    <>
      {loading ? (
        <div style={{ display: "flex", margin: "auto" }}>
          {party.map((item) => {
            d2.push([item, dat[item]]);
          })}
          <div style={{ paddingRight: 80 }}>
            <TableContainer component={Paper} sx={{ marginTop: 5 }}>
              <Table size="medium" aria-label="a dense table">
                <TableHead style={{ backgroundColor: "#00003B" }}>
                  <TableRow sx={{ paddingRight: 50 }}>
                    <TableCell style={{ color: "#ffffff", fontSize: 16 }}>
                      Party
                    </TableCell>
                    <TableCell style={{ color: "#ffffff", fontSize: 16 }}>
                      Party Count
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {console.log(d2)}
                  {d2.map((item, index) => (
                    <>
                      {index == 0 ? (
                        ""
                      ) : (
                        <>
                          <TableRow>
                            <TableCell style={{ fontSize: 15 }}>
                              {item[0]}
                            </TableCell>
                            <TableCell style={{ fontSize: 15 }}>
                              {item[1]}
                            </TableCell>
                          </TableRow>
                        </>
                      )}
                    </>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div>
            <Chart
              chartType="PieChart"
              data={d2}
              options={options}
              width={"100%"}
              height={"400px"}
            />
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
