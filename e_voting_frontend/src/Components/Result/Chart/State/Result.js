import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { apis } from "../../../../api/bootapi";
import Loading from "../../../Loading/Loading";
import axios from "axios";

export default function App() {
  const [check, setCheck] = React.useState(false);
  const [rows, setRows] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    getStateCount();
  }, [check]);
  async function getStateCount() {
    const res = await axios.get(apis.statecount);
    setRows(res.data);
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
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 650 }}
            size="medium"
            aria-label="a dense table"
          >
            {console.log(rows)}
            <TableHead style={{ backgroundColor: "#00003B" }}>
              <TableRow>
                <TableCell style={{ color: "#ffffff", fontSize: 16 }}>
                  State
                </TableCell>
                <TableCell style={{ color: "#ffffff", fontSize: 16 }}>
                  Party Vote
                </TableCell>
                <TableCell style={{ color: "#ffffff", fontSize: 16 }}>
                  Total Vote
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) =>
                row.partycount.map((party) => (
                  <TableRow
                    key={row.statename}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <>
                      <TableCell style={{ fontSize: 15 }}>
                        {row.statename}
                      </TableCell>
                      <TableCell style={{ fontSize: 15 }}>
                        {party.partyname}
                      </TableCell>
                      <TableCell style={{ fontSize: 15 }}>
                        {party.count}
                      </TableCell>
                    </>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Loading />
      )}
    </>
  );
}
