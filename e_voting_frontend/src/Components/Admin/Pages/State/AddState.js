import { Avatar, Button, TextField, Typography } from "@mui/material";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import React from "react";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

export default function AddState() {
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
                placeholder="Enter state name"
              />

              <Button
                style={{
                  marginTop: 10,
                  width: "30%",
                  marginLeft: "37%",
                  backgroundColor: "#000080",
                }}
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
