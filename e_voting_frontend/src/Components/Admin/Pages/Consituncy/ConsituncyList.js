import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Box from "@mui/material/Box";
import { Dialog } from "@mui/material";
import AddConsituncy from "./AddConsituncy";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { apis } from "../../../../api/bootapi";
import Loading from "../../../Loading/Loading";

export default function CandidateList() {
  const [check, setCheck] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [loading, setLoading] = useState(false);
  const [rows, setRows] = useState([]);
  const [regStart, setRegStart] = React.useState(Date());
  const [regEnd, setregEnd] = React.useState(Date());
  const [current, setCurrent] = React.useState(Date());
  useEffect(() => {
    const d = new Date();
    setCurrent(d);
    axios
      .get(apis.rs)
      .then((res) => {
        const d = new Date(`${res.data}`);
        console.log(d);
        setRegStart(d);
      })
      .catch((err) => console.log(err));
    axios
      .get(apis.re)
      .then((res) => {
        const d = new Date(`${res.data}`);
        console.log(d);
        setregEnd(d);
      })
      .catch((err) => console.log(err));
    getAllConstituency();
  }, [check]);
  async function getAllConstituency() {
    try {
      const res = await axios.get(apis.allconstituency);
      setRows(res.data);
      handlecheck();
      setLoading(true);
    } catch (e) {
      alert(e.response.data);
    }
  }
  const handlecheck = () => {
    if (check) setCheck(false);
    else setCheck(true);
  };
  return (
    <>
      {loading ? (
        current >= regStart ? (
          <Paper
            sx={{
              width: "100%",
              overflow: "hidden",
              marginTop: "1%",
              backgroundColor: "#f2f2f2",
              padding: 3,
            }}
          >
            <Typography sx={{ fontSize: 30, fontWeight: "bold" }}>
              Consituncy List
            </Typography>
            <TableContainer sx={{ maxHeight: 450, backgroundColor: "#e6e6ff" }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <TableCell
                      style={{
                        backgroundColor: "#00003B",
                        color: "#fff",
                        fontSize: 16,
                        width: 300,
                      }}
                    >
                      Consituncy
                    </TableCell>
                    <TableCell
                      style={{
                        backgroundColor: "#00003B",
                        color: "#fff",
                        fontSize: 16,
                      }}
                    >
                      State Name
                    </TableCell>
                    <TableCell
                      style={{
                        backgroundColor: "#00003B",
                        color: "#fff",
                        fontSize: 16,
                        width: 10,
                      }}
                    >
                      Delete
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                        <TableCell sx={{ fontSize: 15 }}>
                          {row.constituencyname}
                        </TableCell>
                        <TableCell sx={{ fontSize: 15 }}>
                          {row.state.statename}
                        </TableCell>
                        <TableCell align="right">
                          {current <= regEnd && (
                            <Button
                              variant="contained"
                              startIcon={<DeleteIcon />}
                              style={{ backgroundColor: "#ff4d4d" }}
                            >
                              Delete
                            </Button>
                          )}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
            <Box
              textAlign="center"
              paddingBottom={0}
              paddingLeft={3}
              paddingRight={3}
              paddingTop={3}
            >
              {current <= regEnd && (
                <Button
                  onClick={handleClickOpen}
                  variant="contained"
                  startIcon={<AddCircleIcon />}
                  style={{ backgroundColor: "#00003B" }}
                >
                  Add Consituncy
                </Button>
              )}
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <AddConsituncy close={handleClose} check={handlecheck} />
              </Dialog>
            </Box>
          </Paper>
        ) : (
          "No Registration Start"
        )
      ) : (
        <Loading />
      )}
    </>
  );
}
