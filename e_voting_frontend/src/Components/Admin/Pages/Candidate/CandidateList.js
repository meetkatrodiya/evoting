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
import UpdateIcon from "@mui/icons-material/Update";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Box from "@mui/material/Box";
import { Dialog } from "@mui/material";
import AddCandidate from "./AddCandidate";
import UpdateCandidate from "./UpdateCandidate";

function createData(name, mobileNo, dob, consituncy, state) {
  return { name, mobileNo, dob, consituncy, state };
}

const rows = [
  createData(
    "Bhanuben Babaria",
    "9428561058",
    "12/5/1976",
    "Rajkot Rural (SC)",
    "Gujarat"
  ),
  createData(
    "Arvindbhai Rana",
    "9852046920",
    "26/12/1980",
    "Surat East",
    "Gujarat"
  ),
  createData("Italy", "1234567890", "26/12/2002", "Consituncy", "State"),
  createData(
    "United States",
    "1234567890",
    "26/12/2002",
    "Consituncy",
    "State"
  ),
  createData("Canada", "1234567890", "26/12/2002", "Consituncy", "State"),
  createData("Australia", "1234567890", "26/12/2002", "Consituncy", "State"),
  createData("Germany", "1234567890", "26/12/2002", "Consituncy", "State"),
  createData("Ireland", "1234567890", "26/12/2002", "Consituncy", "State"),
  createData("Mexico", "1234567890", "26/12/2002", "Consituncy", "State"),
  createData("Japan", "1234567890", "26/12/2002", "Consituncy", "State"),
  createData("Japan", "1234567890", "26/12/2002", "Consituncy", "State"),
  createData("Japan", "1234567890", "26/12/2002", "Consituncy", "State"),
  createData("France", "1234567890", "26/12/2002", "Consituncy", "State"),
  createData(
    "United Kingdom",
    "1234567890",
    "26/12/2002",
    "Consituncy",
    "State"
  ),
  createData("Russia", "1234567890", "26/12/2002", "Consituncy", "State"),
  createData("Nigeria", "1234567890", "26/12/2002", "Consituncy", "State"),
  createData("Brazil", "1234567890", "26/12/2002", "Consituncy", "State"),
];

export default function CandidateList() {
  const [addopen, addsetOpen] = React.useState(false);
  const addhandleClickOpen = () => {
    addsetOpen(true);
  };
  const addhandleClose = () => {
    addsetOpen(false);
  };

  const [updateopen, updatesetOpen] = React.useState(false);
  const updatehandleClickOpen = () => {
    updatesetOpen(true);
  };
  const updatehandleClose = () => {
    updatesetOpen(false);
  };

  return (
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
        Candidate List
      </Typography>
      <TableContainer sx={{ maxHeight: 450, backgroundColor: "#e6e6ff" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell
                style={{
                  backgroundColor: "#000099",
                  color: "#fff",
                  fontSize: 20,
                }}
              >
                Candidate Name
              </TableCell>
              <TableCell
                style={{
                  backgroundColor: "#000099",
                  color: "#fff",
                  fontSize: 20,
                }}
              >
                Mobile No.
              </TableCell>
              <TableCell
                style={{
                  backgroundColor: "#000099",
                  color: "#fff",
                  fontSize: 20,
                }}
              >
                Date of Birth
              </TableCell>
              <TableCell
                style={{
                  backgroundColor: "#000099",
                  color: "#fff",
                  fontSize: 20,
                }}
              >
                Constituncy
              </TableCell>
              <TableCell
                style={{
                  backgroundColor: "#000099",
                  color: "#fff",
                  fontSize: 20,
                }}
              >
                State
              </TableCell>
              <TableCell
                style={{
                  backgroundColor: "#000099",
                  color: "#fff",
                  fontSize: 20,
                }}
              >
                Update
              </TableCell>
              <TableCell
                style={{
                  backgroundColor: "#000099",
                  color: "#fff",
                  fontSize: 20,
                }}
              >
                Delete
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.mobileNo}</TableCell>
                  <TableCell>{row.dob}</TableCell>
                  <TableCell>{row.consituncy}</TableCell>
                  <TableCell>{row.state}</TableCell>
                  <TableCell>
                    <Button
                      onClick={updatehandleClickOpen}
                      variant="contained"
                      startIcon={<UpdateIcon />}
                      color="success"
                    >
                      Update
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      startIcon={<DeleteIcon />}
                      style={{ backgroundColor: "#ff4d4d" }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog
        open={updateopen}
        onClose={updatehandleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <UpdateCandidate />
      </Dialog>
      <Box
        textAlign="center"
        paddingBottom={0}
        paddingLeft={3}
        paddingRight={3}
        paddingTop={3}
      >
        <Button
          onClick={addhandleClickOpen}
          variant="contained"
          startIcon={<AddCircleIcon />}
          style={{ backgroundColor: "#000099" }}
        >
          Add Candidate
        </Button>
        <Dialog
          open={addopen}
          onClose={addhandleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <AddCandidate />
        </Dialog>
      </Box>
    </Paper>
  );
}
