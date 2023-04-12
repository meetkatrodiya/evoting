import {
  Avatar,
  Button,
  TextField,
  Typography,
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
  InputLabel,
} from "@mui/material";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import React from "react";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

export default function AddConsituncy() {

    const InputStyle = {
        marginTop: 10, 
        marginLeft: 15,
         width: "90%"
    }
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
              width: "50%",
              fontWeight: "bold",
              fontSize: 25,
            }}
          >
            Add Consituncy
          </h2>
          <Typography style={{ margin: "auto", width: "63%" }}>
            Please enter state name correctly!
          </Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" width={400}>
            <form>
              <FormControl
                style={InputStyle}
              >
                <InputLabel id="demo-multiple-name-label">
                  State Name
                </InputLabel>

                <Select
                  input={<OutlinedInput label="State Name" />}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                </Select>
              </FormControl>

              <TextField
                style={InputStyle}
                id="adhar"
                label="Consituncy Name"
                placeholder="Enter consituncy name"
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
