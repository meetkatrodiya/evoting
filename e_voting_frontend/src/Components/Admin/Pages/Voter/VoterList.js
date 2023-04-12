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
import AddVoter from "./AddVoter";
import UpdateVoter from "./UpdateVoter";

function createData(name, adharId, voterId) {
  return { name, adharId, voterId };
}

const rows = [
  createData("Rajeshbhai Patel", "1523 4523 6810", "PRO0086177"),
  createData("Meet Patel", "1111 5252 0330", "GNO0271102"),
  // createData("name", "123456789123", "1020304050"),
  // createData("name", "123456789123", "1020304050"),
  // createData("name", "123456789123", "1020304050"),
  // createData("name", "123456789123", "1020304050"),
  // createData("name", "123456789123", "1020304050"),
  // createData("name", "123456789123", "1020304050"),
  // createData("name", "123456789123", "1020304050"),
  // createData("name", "123456789123", "1020304050"),
  // createData("name", "123456789123", "1020304050"),
  // createData("name", "123456789123", "1020304050"),
  // createData("name", "123456789123", "1020304050"),
  // createData("name", "123456789123", "1020304050"),
  // createData("name", "123456789123", "1020304050"),
  // createData("name", "123456789123", "1020304050"),
  // createData("name", "123456789123", "1020304050"),
];

export default function VoterList() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [updateopen, updatesetOpen] = React.useState(false);
  const updatehandleClickOpen = () => {
    updatesetOpen(true);
  };
  const updatehandleClose = () => {
    updatesetOpen(false);
  };

  const [input, setInput] = React.useState({
    name: "mansi",
    adharId: "",
    voterId: "",
  });

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
        Voter List
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
                Voter Name
              </TableCell>
              <TableCell
                style={{
                  backgroundColor: "#000099",
                  color: "#fff",
                  fontSize: 20,
                }}
              >
                AdharCard Number
              </TableCell>
              <TableCell
                style={{
                  backgroundColor: "#000099",
                  color: "#fff",
                  fontSize: 20,
                }}
              >
                Voter ID
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
                  <TableCell>{row.adharId}</TableCell>
                  <TableCell>{row.voterId}</TableCell>
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
        <UpdateVoter input={input} />
      </Dialog>
      <Box
        textAlign="center"
        paddingBottom={0}
        paddingLeft={3}
        paddingRight={3}
        paddingTop={3}
      >
        <Button
          onClick={handleClickOpen}
          variant="contained"
          startIcon={<AddCircleIcon />}
          style={{ backgroundColor: "#000099" }}
        >
          Add Voter
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <AddVoter />
        </Dialog>
      </Box>
    </Paper>
  );
}
