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
import React, { useState, useEffect } from "react";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import Loading from "../../../Loading/Loading";
import axios from "axios";
import { apis } from "../../../../api/bootapi";

export default function AddConsituncy(props) {
  const InputStyle = {
    marginTop: 10,
    marginLeft: 15,
    width: "90%",
  };
  useEffect(() => {
    getAllInfo();
  }, []);
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState([]);
  async function getAllInfo() {
    try {
      const sres = await axios.get(apis.allstate);
      setState(sres.data);
      setLoading(true);
    } catch (err) {
      console.log(err);
    }
  }
  const [details, setDetails] = useState({
    constituencyname: "",
    statename: "",
  });
  let detailsChanged = (e) => {
    setDetails((values) => ({ ...values, [e.target.name]: e.target.value }));
  };
  const handleClick = (e) => {
    e.preventDefault();
    axios
      .post(apis.addconst, details)
      .then((res) => {
        alert(res.data);
        props.check();
        props.close();
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      {loading ? (
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
                <FormControl style={InputStyle}>
                  <InputLabel id="demo-multiple-name-label">
                    State Name
                  </InputLabel>

                  <Select
                    input={<OutlinedInput label="StateName" />}
                    value={details.statename}
                    onChange={(e) => {
                      detailsChanged(e);
                    }}
                    inputProps={{
                      name: "statename",
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

                <TextField
                  style={InputStyle}
                  id="adhar"
                  label="Consituncy Name"
                  name="constituencyname"
                  onChange={detailsChanged}
                  placeholder="Enter consituncy name"
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
      ) : (
        <Loading />
      )}
    </>
  );
}
