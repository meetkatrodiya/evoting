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
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function UpdateCandidate() {
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

  const [input, setInput] = React.useState({
    adharid: "1532 4598 2011",
    name: "Bhanuben Babaria", 
    mobileNo: "9428561058", 
    dob: "12/5/1976",
    consituncy:  "Rajkot Rural (SC)",
    state:  "Gujarat"
  });

  return (
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
              value={input.adharid}
              placeholder="Enter your adhar card no"
            />
            <TextField
              style={InputStyle}
              fullWidth
              label="Name"
              value={input.name}
              placeholder="Enter your name"
              id="candidate_name"
            />
            <TextField
              style={InputStyle}
              fullWidth
              id="_city"
              label="City"
              value="Rajkot"
              placeholder="Enter your City"
            />
            <TextField
              style={InputStyle}
              fullWidth
              id="_mobileNo"
              label="Mobile No"
              value={input.mobileNo}
              placeholder="Enter your mobile no"
            />
            <TextField
              style={InputStyle}
              fullWidth
              label="Date of Birth"
              value={input.dob}
              id="_dob"
              InputLabelProps={{ shrink: true }}
              type="date"
            />

            <TextField
              style={InputStyle}
              fullWidth
              id="_constituency"
              label="Constituency"
              value={input.consituncy}
              placeholder="Enter your constituency"
            />

            <FormControl style={InputStyle}>
              <InputLabel id="demo-multiple-name-label">Party</InputLabel>

              <Select input={<OutlinedInput label="Party" />}>
                <MenuItem value="BJP">BJP
                  {/* <em>None</em> */}
                </MenuItem>
              </Select>
            </FormControl>

            <Button style={ButtonStyle} type="submit" variant="contained">
              Update
            </Button>
          </form>
        </DialogContentText>
      </DialogContent>
    </div>
  );
}
