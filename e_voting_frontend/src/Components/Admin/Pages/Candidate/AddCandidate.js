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
import React from "react";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
// import axios from "axios";
// import base_url from "../../../api/bootapi";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function AddCandidate() {
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

  return (
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
              // onChange={(e) => {
              //   // add_candidate({ ...candidate, adharId: e.target.value });
              // }}
              label="Adhar Id"
              placeholder="Enter your adhar card no"
            />
            <TextField
              style={InputStyle}
              fullWidth
              label="Name"
              placeholder="Enter your name"
              id="candidate_name"
              // onChange={(e) => {
              //   // add_candidate({ ...candidate, name: e.target.value });
              // }}
            />
            <TextField
              style={InputStyle}
              fullWidth
              id="_city"
              // onChange={(e) => {
              //   // add_candidate({ ...candidate, city: e.target.value });
              // }}
              label="City"
              placeholder="Enter your City"
            />
            <TextField
              style={InputStyle}
              fullWidth
              id="_mobileNo"
              // onChange={(e) => {
              //   // add_candidate({ ...candidate, mobileNo: e.target.value });
              // }}
              label="Mobile No"
              placeholder="Enter your mobile no"
            />
            <TextField
              style={InputStyle}
              fullWidth
              label="Date of Birth"
              id="_dob"
              // onChange={(e) => {
              //   // add_candidate({ ...candidate, dob: e.target.value });
              // }}
              InputLabelProps={{ shrink: true }}
              type="date"
            />

            <FormControl style={InputStyle}>
              <InputLabel id="demo-multiple-name-label">State Name</InputLabel>

              <Select
                input={<OutlinedInput label="StateName" />}
                // value={party.id}
                // onChange={(e) => {
                //   // add_candidate({ ...candidate, party: e.target.value });
                // }}
                // inputProps={{
                //   name: "partyName",
                //   id: "id",
                // }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {/* {party.map((item) => {
                return <MenuItem value={item.id}>{item.partyName}</MenuItem>;
              })} */}
              </Select>
            </FormControl>

            <FormControl style={InputStyle}>
              <InputLabel id="demo-multiple-name-label">Consituncy</InputLabel>

              <Select
                input={<OutlinedInput label="Consituncy" />}
                // value={party.id}
                // onChange={(e) => {
                //   // add_candidate({ ...candidate, party: e.target.value });
                // }}
                // inputProps={{
                //   name: "partyName",
                //   id: "id",
                // }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {/* {party.map((item) => {
                return <MenuItem value={item.id}>{item.partyName}</MenuItem>;
              })} */}
              </Select>
            </FormControl>

            <Button style={ButtonStyle} type="submit" variant="contained">
              Add
            </Button>
          </form>
        </DialogContentText>
      </DialogContent>
    </div>
  );
}
