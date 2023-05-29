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
    getConstituencyCount();
  }, [check]);
  async function getConstituencyCount() {
    const res = await axios.get(apis.winnercandidate);
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
                  Constituency
                </TableCell>
                <TableCell style={{ color: "#ffffff", fontSize: 16 }}>
                  Candidate name
                </TableCell>
                <TableCell style={{ color: "#ffffff", fontSize: 16 }}>
                  Party
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.length
                ? rows.map((row) =>
                    row.constituency != null ? (
                      <TableRow
                        key={row.adharid}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell
                          component="th"
                          scope="row"
                          style={{ fontSize: 15 }}
                        >
                          {row.constituency.state.statename}
                        </TableCell>
                        <TableCell style={{ fontSize: 15 }}>
                          {row.constituency.constituencyname}
                        </TableCell>
                        <TableCell style={{ fontSize: 15 }}>
                          {row.name}
                        </TableCell>

                        <TableCell style={{ display: "flex" }}>
                          {row.party.partyname}
                          <img
                            src={`data:image/jpeg;base64,${row.party.partylogo}`}
                            alt="logo"
                            style={{ height: 35, width: 40, paddingLeft: 5 }}
                          />
                        </TableCell>
                      </TableRow>
                    ) : (
                      ""
                    )
                  )
                : ""}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Loading />
      )}
    </>
  );
}
