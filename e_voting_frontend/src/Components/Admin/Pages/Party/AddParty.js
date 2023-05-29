import {
  Avatar,
  Button,
  TextField,
  Typography,
  Card,
  CardActions,
  CardMedia,
} from "@mui/material";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import React, { useState } from "react";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import axios from "axios";
import { apis } from "../../../../api/bootapi";

export default function AddParty(props) {
  const [file, setFile] = useState("");
  const [logo, setLogo] = useState();
  const handleSave = (e) => {
    let url = URL.createObjectURL(e.target.files[0]);
    setFile(url);
    setLogo(e.target.files[0]);
  };

  const [details, setDetails] = useState({
    partyname: "",
    leadername: "",
  });
  let detailsChanged = (e) => {
    setDetails((values) => ({ ...values, [e.target.name]: e.target.value }));
    console.log(details);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    let partylogo = new FormData();
    partylogo.append("party", JSON.stringify(details));
    console.log(JSON.stringify(details));
    partylogo.append("partylogo", logo);
    console.log(details);
    axios
      .post(apis.addparty, partylogo, {
        headers: {
          "Content-Type":
            "multipart/form-data; boundary=<calculated when request is sent>",
        },
      })
      .then((res) => {
        alert(res.data);
        props.check();
        props.close();
      })
      .catch((e) => console.log(e));
  };
  return (
    <>
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
            Add Party
          </h2>
          <Typography style={{ margin: "auto", width: "66%" }}>
            Please fill your information correctly!
          </Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" width={400}>
            <form>
              <TextField
                style={{ marginTop: 10 }}
                fullWidth
                id="adhar"
                label="Party Name"
                placeholder="Enter your party name"
                name="partyname"
                onChange={detailsChanged}
              />

              <TextField
                style={{ marginTop: 15 }}
                name="file"
                type="file"
                fullWidth
                label="Party Logo"
                InputLabelProps={{ shrink: true }}
                onChange={handleSave}
              />

              {file.length > 0 && (
                <Card>
                  <CardActions>
                    <CardMedia
                      component="img"
                      alt="Contemplative Reptile"
                      image={file}
                      title="Contemplative Reptile"
                    />
                  </CardActions>
                </Card>
              )}

              <TextField
                style={{ marginTop: 10 }}
                fullWidth
                label="Leader Name"
                id="voter_id"
                placeholder="Enter your Leader name"
                name="leadername"
                onChange={detailsChanged}
              />

              <Button
                style={{
                  marginTop: 10,
                  width: "30%",
                  marginLeft: "37%",
                  backgroundColor: "#000080",
                }}
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
    </>
  );
}
