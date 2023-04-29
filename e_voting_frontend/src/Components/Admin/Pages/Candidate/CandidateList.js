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
import axios from "axios";
import { apis } from "../../../../api/bootapi";
import Loading from "../../../Loading/Loading";
import { useNavigate } from "react-router-dom";

// function createData(name, mobileNo, dob, consituncy, state) {
//   return { name, mobileNo, dob, consituncy, state };
// }

// const rows = [
//   createData(
//     "Bhanuben Babaria",
//     "9428561058",
//     "12/5/1976",
//     "Rajkot Rural (SC)",
//     "Gujarat"
//   ),
//   createData(
//     "Arvindbhai Rana",
//     "9852046920",
//     "26/12/1980",
//     "Surat East",
//     "Gujarat"
//   ),
//   createData("Italy", "1234567890", "26/12/2002", "Consituncy", "State"),
//   createData(
//     "United States",
//     "1234567890",
//     "26/12/2002",
//     "Consituncy",
//     "State"
//   ),
//   createData("Canada", "1234567890", "26/12/2002", "Consituncy", "State"),
//   createData("Australia", "1234567890", "26/12/2002", "Consituncy", "State"),
//   createData("Germany", "1234567890", "26/12/2002", "Consituncy", "State"),
//   createData("Ireland", "1234567890", "26/12/2002", "Consituncy", "State"),
//   createData("Mexico", "1234567890", "26/12/2002", "Consituncy", "State"),
//   createData("Japan", "1234567890", "26/12/2002", "Consituncy", "State"),
//   createData("Japan", "1234567890", "26/12/2002", "Consituncy", "State"),
//   createData("Japan", "1234567890", "26/12/2002", "Consituncy", "State"),
//   createData("France", "1234567890", "26/12/2002", "Consituncy", "State"),
//   createData(
//     "United Kingdom",
//     "1234567890",
//     "26/12/2002",
//     "Consituncy",
//     "State"
//   ),
//   createData("Russia", "1234567890", "26/12/2002", "Consituncy", "State"),
//   createData("Nigeria", "1234567890", "26/12/2002", "Consituncy", "State"),
//   createData("Brazil", "1234567890", "26/12/2002", "Consituncy", "State"),
// ];

export default function CandidateList() {

  const [check, setCheck] = React.useState(false)
  const [id,setId] = React.useState();
  const [loading,setLoading] = React.useState(false);
const [rows,setRows] = React.useState([]);
const navigate = useNavigate();
React.useEffect(()=>{

  axios.get(apis.validate,{headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}).then((res)=>{
    console.log("here")
  }).catch((err)=>{
    console.log(err);
    navigate("/")
  })

  getAllCandidate();
},[check],[id])
async function getAllCandidate(){
  const res = await axios.get(apis.allcandidate)
  console.log(res.data)
  setRows(res.data);
  setLoading(true);
}
  const [addopen, addsetOpen] = React.useState(false);
  const addhandleClickOpen = () => {
    addsetOpen(true);
  };
  const addhandleClose = () => {
    addsetOpen(false);
  };
  function dateFormate(dt){
    const d = new Date(dt)
    var year = d.getFullYear();
    var month = ("0"+(d.getMonth()+1)).slice(-2);
    var day = ("0"+d.getDate()).slice(-2);
    // const day = d.getDate();
    return `${year}-${month}-${day}`
  }
  const [updateopen, updatesetOpen] = React.useState(false);
  const updatehandleClickOpen = (e,id) => {
    setId(id);
    updatesetOpen(true);
  };
  const updatehandleClose = () => {
    updatesetOpen(false);
  };
  const handleDelete = (e,id)=>{
    e.preventDefault();
    // var onclick = confirm("Are you sure you want to delete this party?")
    // console.log(onclick)
    if(window.confirm("Are you sure you want to delete this candidate?") == true){
      axios.delete(`${apis.deleteCandidate}/${id}`).then((res)=>{
        alert(res.data)
        if(check)
          setCheck(false)
        else
          setCheck(true)
      }).catch((err)=>console.log(err))
    }
    else{
      console.log("cancel");
    }

  }
  const handlecheck = ()=>{
    if(check)
      setCheck(false)
    else
      setCheck(true)
  }
  return (
    <>
   {loading ? <Paper
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
          <TableHead >
            <TableRow>
              <TableCell
                style={{
                  backgroundColor: "#00003B",
                  color: "#fff",
                  fontSize: 16,
                }}
              >
                Candidate Name
              </TableCell>
              <TableCell
                style={{
                  backgroundColor: "#00003B",
                  color: "#fff",
                  fontSize: 16,
                }}
              >
                Mobile No.
              </TableCell>
              <TableCell
                style={{
                  backgroundColor: "#00003B",
                  color: "#fff",
                  fontSize: 16,
                }}
              >
                Date of Birth
              </TableCell>
              <TableCell
                style={{
                  backgroundColor: "#00003B",
                  color: "#fff",
                  fontSize: 16,
                }}
              >
                Constituncy
              </TableCell>
              <TableCell
                style={{
                  backgroundColor: "#00003B",
                  color: "#fff",
                  fontSize: 16,
                }}
              >
                State
              </TableCell>
              <TableCell
                style={{
                  backgroundColor: "#00003B",
                  color: "#fff",
                  fontSize: 16,
                }}
              >
                Party
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
                  <TableCell sx={{fontSize:15}}>{row.name}</TableCell>
                  <TableCell sx={{fontSize:15}}>{row.mobileno}</TableCell>
                  <TableCell sx={{fontSize:15}}>{dateFormate(row.dob)}</TableCell>
                  <TableCell sx={{fontSize:15}}>{row.constituency.constituencyname}</TableCell>
                  <TableCell sx={{fontSize:15}}>{row.constituency.state.statename}</TableCell>
                  <TableCell sx={{fontSize:15}}>{row.party.partyname}</TableCell>
                  <TableCell>
                    <Button
                      onClick={(e)=>updatehandleClickOpen(e,row.adharid)}
                      variant="contained"
                      startIcon={<UpdateIcon />}
                      color="success"
                    >
                      {/* {console.log(row.adharid)} */}
                      Update
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      startIcon={<DeleteIcon />}
                      style={{ backgroundColor: "#ff4d4d" }}
                      onClick={(e)=>{
                        handleDelete(e,row.adharid)
                      }}
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
        <UpdateCandidate id={id} close={updatehandleClose} check={handlecheck}/>
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
          style={{ backgroundColor: "#00003B" }}
        >
          Add Candidate
        </Button>
        <Dialog
          open={addopen}
          onClose={addhandleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <AddCandidate close={addhandleClose} check={handlecheck} />
        </Dialog>
      </Box>
    </Paper>
:<Loading/>}
    </>
  );
}
