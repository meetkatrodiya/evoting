import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Avatar,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { apis } from "../../../api/bootapi";
import axios from "axios";
import Header from "./Header";
export default function VoterLogin() {
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
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [loginInfo, setLoginInfo] = useState();
  const navigate = useNavigate();
  const changeInfo = (e) => {
    setLoginInfo((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  const clear = () => {
    setLoginInfo({
      voterid: "",
      password: "",
    });
  };
  const login = (e) => {
    e.preventDefault();
    axios
      .post(apis.voterlogin, loginInfo)
      .then((res) => {
        clear();
        console.log(res.data);

        alert("Logged in Successfully");
        const data = {
          constituency: res.data,
          voterid: loginInfo.voterid,
        };
        navigate("/voterLogin", { state: data });
      })
      .catch((err) => {
        clear();
        alert(err.response.data);
        console.log(err);
      });
  };

  return (
    <>
      <Header name="Presiding Officer" />
      <div
        style={{
          backgroundColor: "#f2f2f2",
          width: 450,
          margin: "auto",
          marginTop: "10%",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          padding: 30,
        }}
      >
        <Avatar style={{ backgroundColor: "#000080", margin: "auto" }}>
          <AddCircleOutlineOutlinedIcon />
        </Avatar>
        <h2
          style={{
            marginLeft: "35%",
            fontWeight: "bold",
            fontSize: 25,
          }}
        >
          Voter Login
        </h2>
        <Typography
          style={{
            marginLeft: "20%",
          }}
        >
          Please fill your information correctly!
        </Typography>
        <form style={{ width: 400, margin: "auto" }}>
          <TextField
            style={InputStyle}
            fullWidth
            id="VoterId"
            label="Voter Id"
            placeholder="Enter your voter id"
            name="voterid"
            onChange={changeInfo}
          />
          <FormControl variant="outlined" style={InputStyle}>
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              onChange={changeInfo}
              name="password"
              required
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <Button style={ButtonStyle} variant="contained" onClick={login}>
            Login
          </Button>
        </form>
      </div>
    </>
  );
}
