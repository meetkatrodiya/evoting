import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Button, TextField, Typography } from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function AddVoter() {
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
          Voter Login
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
              placeholder="Enter your name"
              id="name"
            />
            <TextField
              style={InputStyle}
              fullWidth
              id="adharId"
              label="Adhar Id"
              placeholder="Enter your adhar card no"
            />
            <TextField
              style={InputStyle}
              fullWidth
              id="VoterId"
              label="Voter Id"
              placeholder="Enter your voter id"
            />

            <Button component={Link} to="/voterLogin" style={ButtonStyle} variant="contained">
              Login
            </Button>
          </form>
        </DialogContentText>
      </DialogContent>
    </div>
  );
}
