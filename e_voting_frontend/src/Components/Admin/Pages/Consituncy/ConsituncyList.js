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
import Box from '@mui/material/Box';
import { Dialog } from "@mui/material";
import AddConsituncy from "./AddConsituncy";

function createData(consituncy, stateName) {
  return { consituncy, stateName };
}

const rows = [
  createData("Rajkot", "Gujarat"),
  createData("Una", "Himachal Pradesh"),
  createData("Prakasam", "Andhra Predesh"),
  createData("Jalandhar", "Punjab"),
  createData("Baksa", "Asam"),
  createData("New Delhi", "Delhi"),
  createData("Rajkot", "Gujarat"),
  createData("Una", "Himachal Pradesh"),
  createData("Prakasam", "Andhra Predesh"),
  createData("Jalandhar", "Punjab"),
  createData("Baksa", "Asam"),
  createData("New Delhi", "Delhi"),
];

export default function CandidateList() {

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
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
      <Typography sx={{ fontSize: 30, fontWeight: "bold"}}>
        Consituncy List
      </Typography>
      <TableContainer sx={{ maxHeight: 450, backgroundColor: "#e6e6ff"}}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell
                style={{
                  backgroundColor: "#000099",
                  color: "#fff",
                  fontSize: 20,
                  width: 300
                }}
              >
                Consituncy
              </TableCell>
              <TableCell
                style={{
                  backgroundColor: "#000099",
                  color: "#fff",
                  fontSize: 20,
                }}
              >
                State Name
              </TableCell>
              <TableCell
                style={{
                  backgroundColor: "#000099",
                  color: "#fff",
                  fontSize: 20,
                  width: 10
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
                  <TableCell>{row.consituncy}</TableCell>
                  <TableCell>{row.stateName}</TableCell>
                  <TableCell align="right">
                    <Button
                      variant="contained"
                      startIcon={<DeleteIcon />}
                      style={{ backgroundColor: "#ff4d4d"}}
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
      <Box textAlign="center" paddingBottom={0} paddingLeft={3} paddingRight={3} paddingTop={3}>
        <Button
          onClick={handleClickOpen}
          variant="contained"
          startIcon={<AddCircleIcon />}
          style={{ backgroundColor: "#000099" }}
        >
          Add Consituncy
        </Button>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <AddConsituncy/>
            
          </Dialog>
      </Box>
    </Paper>
  );
}