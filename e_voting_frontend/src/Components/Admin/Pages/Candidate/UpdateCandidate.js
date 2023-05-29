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
  const [check, setCheck] = useState(false);

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

  const [details, setDetails] = React.useState({});
  const [candidate, setCandidate] = useState([]);
  useEffect(() => {
    console.log("here" + props.id);
    getAllInfo();
    getCandidate();
  }, [check]);
  const [loading, setLoading] = useState(false);
  async function getCandidate() {
    const res = await axios.get(`${apis.getcandidate}/${props.id}`);
    setCandidate(res.data);
    setDetails({
      adharid: res.data.adharid,
      name: res.data.name,
      city: res.data.city,
      mobileno: res.data.mobileno,
      dob: res.data.dob,
      constituency: res.data.constituency.constituencyname,
      party: res.data.party.partyname,
    });
    console.log("can: " + res.data.constituency.state.statename);
    getAllConstituencyFromState(res.data.constituency.state.statename);
    setLoading(true);
  }
  function dateFormate(dt) {
    const d = new Date(dt);
    const year = d.getFullYear();
    var month = ("0" + d.getMonth()).slice(-2);
    var day = ("0" + d.getDate()).slice(-2);
    console.log(`${day}-${month}-${year}`);
    return `${year}-${month}-${day}`;
  }
  const [partyList, setPartyList] = useState([{}]);
  const [consti, setConsti] = useState([]);
  const [state, setState] = useState([]);
  const [sstate, SetSState] = useState("");

  async function getAllInfo() {
    try {
      const pres = await axios.get(apis.allparty, {
        headers: { "Content-Type": "application/json" },
      });
      console.log(pres.data);
      setPartyList(pres.data);

      const sres = await axios.get(apis.allstate);
      setState(sres.data);

      setLoading(true);
    } catch (err) {
      console.log(err);
    }
  }
  async function getAllConstituencyFromState(statename) {
    const res = await axios.get(`${apis.constituenciesbystate}/${statename}`);
    setConsti(res.data);
    console.log("here:");
    console.log(res.data);
  }
  let detailsChanged = (e) => {
    setDetails((values) => ({ ...values, [e.target.name]: e.target.value }));
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    console.log(details);
    axios
      .put(apis.updatecandidate, details)
      .then((res) => {
        alert(res.data);
        props.check();
        console.log(res.data);
        props.close();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      {loading ? (
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
                <TextField
                  style={InputStyle}
                  fullWidth
                  id="adhar"
                  label="Adhar Id"
                  disabled
                  defaultValue={candidate.adharid}
                  name="adharid"
                  onChange={detailsChanged}
                  placeholder="Enter your adhar card no"
                />
                <TextField
                  style={InputStyle}
                  fullWidth
                  label="Name"
                  defaultValue={candidate.name}
                  onChange={detailsChanged}
                  name="name"
                  placeholder="Enter your name"
                  id="candidate_name"
                />
                <TextField
                  style={InputStyle}
                  fullWidth
                  id="_city"
                  label="City"
                  defaultValue={candidate.city}
                  onChange={detailsChanged}
                  placeholder="Enter your City"
                  name="city"
                />
                <TextField
                  style={InputStyle}
                  fullWidth
                  id="_mobileNo"
                  label="Mobile No"
                  name="mobileno"
                  onChange={detailsChanged}
                  defaultValue={candidate.mobileno}
                  placeholder="Enter your mobile no"
                />
                <TextField
                  style={InputStyle}
                  fullWidth
                  label="Date of Birth"
                  defaultValue={dateFormate(candidate.dob)}
                  id="_dob"
                  onChange={detailsChanged}
                  name="dob"
                  InputLabelProps={{ shrink: true }}
                  type="date"
                />
                <FormControl style={InputStyle}>
                  <InputLabel id="demo-multiple-name-label">
                    State Name
                  </InputLabel>

                  <Select
                    input={<OutlinedInput label="StateName" />}
                    defaultValue={candidate.constituency.state.statename}
                    onChange={(e) => {
                      SetSState(e.target.value);
                      getAllConstituencyFromState(e.target.value);
                    }}
                    inputProps={{
                      id: "id",
                    }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {state.map((item) => {
                      return (
                        <MenuItem value={item.statename}>
                          {item.statename}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
                <FormControl style={InputStyle}>
                  <InputLabel id="demo-multiple-name-label">
                    Consituncy
                  </InputLabel>

                  <Select
                    input={<OutlinedInput label="Consituncy" />}
                    defaultValue={candidate.constituency.constituencyname}
                    onChange={detailsChanged}
                    inputProps={{
                      name: "constituency",
                      id: "id",
                    }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {consti.map((item) => {
                      return (
                        <MenuItem value={item.constituencyname}>
                          {item.constituencyname}
                        </MenuItem>
                      );
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
                    onChange={detailsChanged}
                    inputProps={{
                      name: "party",
                      id: "id",
                    }}
                  >
                    {partyList.map((item) => {
                      return (
                        <MenuItem value={item.partyname}>
                          {item.partyname}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>

                <Button
                  style={ButtonStyle}
                  type="submit"
                  variant="contained"
                  onClick={handleUpdate}
                >
                  Update
                </Button>
              </form>
            </DialogContentText>
          </DialogContent>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
