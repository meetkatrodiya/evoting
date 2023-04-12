import { Avatar, Button, TextField, Typography } from "@mui/material";
import React from "react";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function UpdateVoter(props) {
    const [input, setInput] = React.useState({
        name: "Meet Patel",
        adharId: "1111 5252 0330",
        voterId: "GNO0271102",
      });

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
          Update Voter
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
              label="Name"
              value={input.name}
              placeholder="Enter your name"
              id="name"
            />
            <TextField
              style={InputStyle}
              fullWidth
              id="adharId"
              label="Adhar Id"
              value={input.adharId}
              placeholder="Enter your adhar card no"
            />
            <TextField
              style={InputStyle}
              fullWidth
              id="VoterId"
              label="Voter Id"
              value={input.voterId}
              placeholder="Enter your voter id"
            />

            <Button style={ButtonStyle} type="submit" variant="contained">
              Update
            </Button>
          </form>
        </DialogContentText>
      </DialogContent>
    </div>
  );
}


