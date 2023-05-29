import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Loading from "../../../Loading/Loading";
import axios from "axios";
import { apis } from "../../../../api/bootapi";

export default function AddVoter({ close, check }) {
  const InputStyle = {
    marginTop: 10,
    marginLeft: 15,
    width: "90%",
  };
  useEffect(() => {
    getAllConstituency();
  }, []);

  const ButtonStyle = {
    marginTop: 12,
    backgroundColor: "#000080",
    marginLeft: "37%",
    width: "30%",
  };
  const [consti, setConsti] = useState([]);
  const [loading, setLoading] = useState(false);
  async function getAllConstituency() {
    try {
      const res = await axios.get(apis.allconstituency);
      setConsti(res.data);
      setLoading(true);
    } catch (e) {
      alert(e.response.data);
    }
  }
  const [details, setDetails] = useState({
    voterid: "",
    adharid: 0,
    email: "",
    roles: [],
    password: "",
    name: "",
    constituency: "",
  });
  const [role, setRole] = useState({
    voter: false,
    presidingOfficer: false,
  });
  const { voter, presidingOfficer } = role;
  let detailsChanged = (e) => {
    setDetails((values) => ({ ...values, [e.target.name]: e.target.value }));
  };
  const handleChange = (event) => {
    setRole({
      ...role,
      [event.target.name]: event.target.checked,
    });
  };
  const handleClick = (e) => {
    e.preventDefault();
    if (role.voter == true) {
      details.roles.push("user");
    }
    if (role.presidingOfficer == true) {
      details.roles.push("presiding");
    }
    console.log(details);
    axios
      .post(apis.signup, details)
      .then((res) => {
        console.log(res.data);
        alert(res.data.message);
        check();
        close();
      })
      .catch((err) => alert(err.response.data.message));
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
                width: "30%",
                fontWeight: "bold",
                fontSize: 25,
              }}
            >
              Add Voter
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
                  label="Name"
                  placeholder="Enter name"
                  id="name"
                  name="name"
                  onChange={detailsChanged}
                />
                <TextField
                  style={InputStyle}
                  fullWidth
                  id="adharId"
                  label="Adhar Id"
                  placeholder="Enter adhar no"
                  name="adharid"
                  type="number"
                  onChange={detailsChanged}
                />
                <TextField
                  style={InputStyle}
                  fullWidth
                  id="VoterId"
                  label="Voter Id"
                  placeholder="Enter voter id"
                  name="voterid"
                  onChange={detailsChanged}
                />
                <TextField
                  style={InputStyle}
                  fullWidth
                  label="Email"
                  placeholder="Enter email"
                  id="email"
                  type="email"
                  name="email"
                  onChange={detailsChanged}
                />
                <TextField
                  style={InputStyle}
                  fullWidth
                  label="Password"
                  placeholder="Enter password"
                  id="password"
                  type="password"
                  name="password"
                  onChange={detailsChanged}
                />
                <FormControl style={InputStyle}>
                  <InputLabel id="demo-multiple-name-label">
                    Constituency
                  </InputLabel>

                  <Select
                    input={<OutlinedInput label="Constituency" />}
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
                <Box sx={{ display: "flex" }}>
                  <FormControl style={InputStyle}>
                    <FormLabel component="legend">
                      Pick role accordingly!!
                    </FormLabel>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={voter}
                            onChange={handleChange}
                            name="voter"
                          />
                        }
                        label="Voter"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={presidingOfficer}
                            onChange={handleChange}
                            name="presidingOfficer"
                          />
                        }
                        label="Presiding Officer"
                      />
                    </FormGroup>
                  </FormControl>
                </Box>
                <Button
                  style={ButtonStyle}
                  type="button"
                  variant="contained"
                  onClick={handleClick}
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
