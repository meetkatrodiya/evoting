import { Avatar, Button, TextField, Typography } from "@mui/material";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import React, { useState } from "react";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import axios from "axios";
import { apis } from "../../../../api/bootapi";

export default function AddState({ close, check }) {
  const [state, setState] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    axios
      .get(`${apis.addstate}/${state}`)
      .then((res) => {
        alert(res.data);
        check();
        close();
      })
      .catch((e) => console.log(e));
  };
  return (
    <>
      <div width={200}>
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
            Add State
          </h2>
          <Typography style={{ margin: "auto", width: "66%" }}>
            Please enter state name correctly!
          </Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" width={400}>
            <form>
              <TextField
                style={{ marginTop: 10 }}
                fullWidth
                id="adhar"
                label="State Name"
                onChange={(e) => setState(e.target.value)}
                placeholder="Enter state name"
              />

              <Button
                style={{
                  marginTop: 10,
                  width: "30%",
                  marginLeft: "37%",
                  backgroundColor: "#000080",
                }}
                onClick={handleClick}
                type="submit"
                variant="contained"
              >
                Add
              </Button>
            </form>
          </DialogContentText>
        </DialogContent>
      </div>
    </>
  );
}
