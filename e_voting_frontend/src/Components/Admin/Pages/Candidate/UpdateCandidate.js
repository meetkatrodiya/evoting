import {
  Avatar,
  Button,
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import { apis } from "../../../../api/bootapi";
import Loading from "../../../Loading/Loading";

export default function UpdateCandidate(props) {
  const InputStyle = {
    marginTop: 10,
    marginLeft: 15,
    width: "90%",
  };

  const ButtonStyle = {
    marginTop: 12,
    backgroundColor: "#000080",
    marginLeft: "37%",
    width: "30%",
  };

  // const [input, setInput] = React.useState({
  //   adharid: "1532 4598 2011",
  //   name: "Bhanuben Babaria", 
  //   mobileNo: "9428561058", 
  //   dob: "12/5/1976",
  //   consituncy:  "Rajkot Rural (SC)",
  //   state:  "Gujarat"
  // });
  const [details,setDetails] = React.useState([])
  const [candidate,setCandidate] = useState([]);
  useEffect(()=>{
    console.log("here"+props.id);
    getAllInfo();
    getCandidate();
    
  })
  const [loading,setLoading] = useState(false);
  async function getCandidate () {
    const res = await axios.get(`${apis.getcandidate}/${props.id}`);
    setCandidate(res.data);
    // setConsti(res.data.constituency.constituencyname)
    setLoading(true)
  }
  function dateFormate(dt){
    const d = new Date(dt)
//     let month = d.getMonth() + 1; // Add 1 
// let monthWithTwoDigits = month.toString().padStart(2, '0');
    const year = d.getFullYear();
    // const day = d.getDate();
    var month = ("0" + (d.getMonth() )).slice(-2);
                var day = ("0" + d.getDate()).slice(-2);
    console.log(`${day}-${month}-${year}`)
    return `${year}-${month}-${day}`
  }
  const [partyList,setPartyList] = useState([{}]);
  const [consti,setConsti] = useState([]);
  const [state,setState] = useState([]);
  const [sstate,SetSState] = useState("")
  
  async function getAllInfo  () {
    try{
      const pres = await  axios.get(apis.allparty,{headers:{"Content-Type":"application/json"}});
      console.log(pres.data);
      setPartyList(pres.data);

      const sres = await axios.get(apis.allstate)
      setState(sres.data);

      setLoading(true);
    }catch(err){
      console.log(err);
    }
  }
  async function getAllConstituencyFromState (statename){
    const res = await axios.get(`${apis.constituenciesbystate}/${statename}`)
    setConsti(res.data);
  }
  let detailsChanged = (e) =>{
    setDetails(values => ({...values,[e.target.name]:e.target.value}))
  }
  return (
    <>
    {loading ?
    <div width={400}>
      <DialogTitle id="alert-dialog-title">
        <Avatar style={{ backgroundColor: "#000080", margin: "auto" }}>
          <AddCircleOutlineOutlinedIcon />
        </Avatar>
        <h2
          style={{
            margin: "auto",
            width: "60%",
            fontWeight: "bold",
            fontSize: 25,
          }}
        >
          Update Candidate
        </h2>
        <Typography style={{ margin: "auto", width: "68%" }}>
          Please fill your information correctly!
        </Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description" width={400}>
          <form>
            {/* <form onSubmit={handleForm}> */}
            <TextField
              style={InputStyle}
              fullWidth
              id="adhar"
              label="Adhar Id"
              disabled
              defaultValue={candidate.adharid}
              // value={input.adharid}
              placeholder="Enter your adhar card no"
            />
            <TextField
              style={InputStyle}
              fullWidth
              label="Name"
              // value={input.name}
              defaultValue={candidate.name}
              
              placeholder="Enter your name"
              id="candidate_name"
            />
            <TextField
              style={InputStyle}
              fullWidth
              id="_city"
              label="City"
              // value="Rajkot"
              defaultValue={candidate.city}
              placeholder="Enter your City"
            />
            <TextField
              style={InputStyle}
              fullWidth
              id="_mobileNo"
              label="Mobile No"
              // value={input.mobileNo}
              defaultValue={candidate.mobileno}
              placeholder="Enter your mobile no"
            />
            <TextField
              style={InputStyle}
              fullWidth
              label="Date of Birth"
              // value={input.dob}
              defaultValue={dateFormate(candidate.dob)}
              id="_dob"
              InputLabelProps={{ shrink: true }}
              type="date"
            />
            <FormControl style={InputStyle}>
              <InputLabel id="demo-multiple-name-label">State Name</InputLabel>

              <Select
                input={<OutlinedInput label="StateName" />}
                // value={details.state}
                value={candidate.constituency.state.statenamete}
                // defaultValue={}
                onChange={(e)=>{
                  detailsChanged(e);
                  SetSState(e.target.value)
                  getAllConstituencyFromState(e.target.value);
                }
                }
                inputProps={{
                  name: "state",
                  id: "id",
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {state.map((item) => {
                return <MenuItem value={item.statename}>{item.statename}</MenuItem>;
              })}
              </Select>
            </FormControl>
            <FormControl style={InputStyle}>
              <InputLabel id="demo-multiple-name-label">Consituncy</InputLabel>

              <Select
                input={<OutlinedInput label="Consituncy" />}
                // value={details.constituency}
                defaultValue={candidate.constituency.constituencyname}
                onChange={
                  detailsChanged
                  // add_candidate({ ...candidate, party: e.target.value });
                }
                inputProps={{
                  name: "constituency",
                  id: "id",
                }}
              >  
               <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {consti.map((item) => {
                return <MenuItem value={item.constituencyname}>{item.constituencyname}</MenuItem>;
              })}
              </Select>
            </FormControl>

            <FormControl style={InputStyle}>
              <InputLabel id="demo-multiple-name-label">Party</InputLabel>

              <Select
                input={<OutlinedInput label="Party" />}
                // value={details.party}
                defaultValue={candidate.party.partyname}
                // value={partyList.partyname}
                onChange={
                  detailsChanged
                }
                inputProps={{
                  name: "party",
                  id: "id",
                }}
              >  
              { partyList.map((item) => {
                return <MenuItem value={item.partyname}>{item.partyname}</MenuItem>;
              })}
              </Select>
            </FormControl>

            <Button style={ButtonStyle} type="submit" variant="contained">
              Update
            </Button>
          </form>
        </DialogContentText>
      </DialogContent>
    </div>
    :<Loading/>
}
    </>
  );
}
