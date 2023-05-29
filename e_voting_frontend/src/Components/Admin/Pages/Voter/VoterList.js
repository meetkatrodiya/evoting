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
import { useState } from "react";
import axios from "axios";
import { apis } from "../../../../api/bootapi";
import Loading from "../../../Loading/Loading";

// function createData(name, adharId, voterId) {
//   return { name, adharId, voterId };
// }

// const rows = [
//   createData("Rajeshbhai Patel", "1523 4523 6810", "PRO0086177"),
//   createData("Meet Patel", "1111 5252 0330", "GNO0271102"),
// ];

export default function VoterList() {

  const [check,setCheck] = React.useState(false);
  const [regStart,setRegStart] = React.useState(Date());
const [regEnd,setregEnd] = React.useState(Date());
const [current,setCurrent] = React.useState(Date());
  React.useEffect(()=>{
    const d = new Date()
  setCurrent(d)
    axios.get(apis.rs).then((res)=>{
      const d = new Date(`${res.data}`);
      console.log(d)
      setRegStart(d);
    }).catch((err)=>console.log(err))
    axios.get(apis.re).then((res)=>{
      const d = new Date(`${res.data}`);
      console.log(d)
      setregEnd(d);
    }).catch((err)=>console.log(err))
    getVoters()
  },[check])
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(()=>{
    getVoters()
  },[rows])
  const [updateopen, updatesetOpen] = React.useState(false);
  const updatehandleClickOpen = () => {
    updatesetOpen(true);
  };
  const updatehandleClose = () => {
    updatesetOpen(false);
  };

  const [input, setInput] = React.useState({
    name: "",
    adharId: "",
    voterId: "",
  });
  const [rows,setRows] = useState([])
  const [loading,setLoading] = useState(false)
   async function getVoters(){
    try{
      const res = await axios.get(apis.allvoters)
      setRows(res.data);
      handlecheck();
      setLoading(true);
    }
    catch(e){
      alert(e.response.data)
    }
  }
  const handleDelete = (e,id)=>{
    e.preventDefault();
    // var onclick = confirm("Are you sure you want to delete this party?")
    // console.log(onclick)
    console.log(id);
    if(window.confirm("Are you sure you want to remove this Voter?") == true){
      axios.delete(`${apis.deletevoter}/${id}`).then((res)=>{
        alert(res.data)
        // getVoters()
        handlecheck();
      }).catch((err)=>console.log(err))
    }
    else{
      console.log("cancel");
    }

  }
  const handlecheck = () =>{
    if(check)
      setCheck(false)
    else
      setCheck(true)
  }
  return (
    <>
    {loading?
    current >= regStart ? 
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
                  backgroundColor: "#00003B",
                  color: "#fff",
                  fontSize: 16,
                }}
              >
                Voter Name
              </TableCell>
              <TableCell
                style={{
                  backgroundColor: "#00003B",
                  color: "#fff",
                  fontSize: 16,
                }}
              >
                AdharCard Number
              </TableCell>
              <TableCell
                style={{
                  backgroundColor: "#00003B",
                  color: "#fff",
                  fontSize: 16,
                }}
              >
                Voter ID
              </TableCell>
              <TableCell
                style={{
                  backgroundColor: "#00003B",
                  color: "#fff",
                  fontSize: 16,
                }}
              >
                Email
              </TableCell>
              <TableCell
                style={{
                  backgroundColor: "#00003B",
                  color: "#fff",
                  fontSize: 16,
                }}
              >
                Update
              </TableCell>
              <TableCell
                style={{
                  backgroundColor: "#00003B",
                  color: "#fff",
                  fontSize: 16,
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
                  <TableCell>{row.adharid}</TableCell>
                  <TableCell>{row.voterid}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>
                  {current <= regEnd &&
                    <Button
                      onClick={updatehandleClickOpen}
                      variant="contained"
                      startIcon={<UpdateIcon />}
                      color="success"
                    >
                      Update
                    </Button>}
                  </TableCell>
                  <TableCell>
                  {current <= regEnd &&
                    <Button
                      variant="contained"
                      startIcon={<DeleteIcon />}
                      style={{ backgroundColor: "#ff4d4d" }}
                      onClick={(e)=>handleDelete(e,row.id)}
                    >
                      Delete
                    </Button>
            }
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
        <UpdateVoter input={input} close={updatehandleClose} check={handlecheck}/>
      </Dialog>
      <Box
        textAlign="center"
        paddingBottom={0}
        paddingLeft={3}
        paddingRight={3}
        paddingTop={3}
      >
         {current <= regEnd &&
        <Button
          onClick={handleClickOpen}
          variant="contained"
          startIcon={<AddCircleIcon />}
          style={{ backgroundColor: "#00003B" }}
        >
          Add Voter
        </Button>
}
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <AddVoter close={handleClose} check={handlecheck}/>
        </Dialog>
      </Box>
    </Paper>
    :"No Registration Start"
    :<Loading/>
          }
          </>
  );
}
