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
import { useNavigate } from "react-router-dom";

export default function AddCandidate({ close, check }) {
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(apis.validate, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        console.log("here");
      })
      .catch((err) => {
        console.log(err);
        navigate("/");
      });
    getAllInfo();
  }, []);

  const InputStyle = {
    marginTop: 10,
    marginLeft: 15,
    width: "90%",
  };
  const [loading, setLoading] = useState(false);
  const ButtonStyle = {
    marginTop: 12,
    backgroundColor: "#000080",
    marginLeft: "37%",
    width: "30%",
  };

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

  const [partyList, setPartyList] = useState([{}]);
  const [consti, setConsti] = useState([]);
  const [state, setState] = useState([]);
  const [sstate, SetSState] = useState("");
  async function getAllConstituencyFromState(statename) {
    const res = await axios.get(`${apis.constituenciesbystate}/${statename}`);
    setConsti(res.data);
  }
  let [details, setDetails] = useState({
    adharid: "",
    name: "",
    city: "",
    mobileno: "",
    dob: "",
    constituency: "",
    party: "",
  });
  const clear = () => {
    setDetails({
      adharid: "",
      name: "",
      city: "",
      mobileno: "",
      dob: "",
      constituency: "",
      party: "",
    });
    SetSState("");
  };
  let detailsChanged = (e) => {
    setDetails((values) => ({ ...values, [e.target.name]: e.target.value }));
  };
  const handleForm = (e) => {
    e.preventDefault();
    console.log(details);
    axios
      .post(apis.addcandidate, details)
      .then((res) => {
        console.log(res.data);
        alert(res.data);
        check();
        close();
      })
      .catch((e) => {
        console.log("here: " + e);
        console.log(e);
      });
    clear();
    console.log("finish");
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
                width: "45%",
                fontWeight: "bold",
                fontSize: 25,
              }}
            >
              Add Candidate
            </h2>
            {console.log(partyList)}
            <Typography style={{ margin: "auto", width: "68%" }}>
              Please fill information correctly!
            </Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description" width={400}>
              <form>
                <TextField
                  style={InputStyle}
                  fullWidth
                  id="adhar"
                  value={details.adharid}
                  onChange={detailsChanged}
                  name="adharid"
                  label="Adhar Id"
                  placeholder="Enter your adhar card no"
                />
                <TextField
                  style={InputStyle}
                  fullWidth
                  label="Name"
                  name="name"
                  placeholder="Enter your name"
                  id="candidate_name"
                  value={details.name}
                  onChange={detailsChanged}
                />
                <TextField
                  style={InputStyle}
                  fullWidth
                  id="_city"
                  name="city"
                  value={details.city}
                  onChange={detailsChanged}
                  label="City"
                  placeholder="Enter your City"
                />
                <TextField
                  style={InputStyle}
                  fullWidth
                  id="_mobileNo"
                  name="mobileno"
                  value={details.mobileno}
                  onChange={detailsChanged}
                  label="Mobile No"
                  placeholder="Enter your mobile no"
                />
                <TextField
                  style={InputStyle}
                  fullWidth
                  label="Date of Birth"
                  id="_dob"
                  name="dob"
                  value={details.dob}
                  onChange={detailsChanged}
                  InputLabelProps={{ shrink: true }}
                  type="date"
                />
                <FormControl style={InputStyle}>
                  <InputLabel id="demo-multiple-name-label">Party</InputLabel>

                  <Select
                    input={<OutlinedInput label="Party" />}
                    value={details.party}
                    onChange={detailsChanged}
                    inputProps={{
                      name: "party",
                      id: "id",
                    }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>

                    {partyList.map((item) => {
                      return (
                        <MenuItem value={item.partyname}>
                          {item.partyname}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
                <FormControl style={InputStyle}>
                  <InputLabel id="demo-multiple-name-label">
                    State Name
                  </InputLabel>

                  <Select
                    input={<OutlinedInput label="StateName" />}
                    value={sstate}
                    onChange={(e) => {
                      detailsChanged(e);
                      SetSState(e.target.value);
                      getAllConstituencyFromState(e.target.value);
                    }}
                    inputProps={{
                      name: "state",
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
                    value={details.constituency}
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

                <Button
                  style={ButtonStyle}
                  type="button"
                  onClick={handleForm}
                  variant="contained"
                >
                  Add
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
