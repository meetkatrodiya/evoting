import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { apis } from "../../../api/bootapi";
import axios from "axios";
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

  const [loginInfo,setLoginInfo] = useState();
  const navigate = useNavigate();
  const changeInfo = (e) =>{
    setLoginInfo(values => ({...values,[e.target.name]:e.target.value}))

  }

  const clear = ()=>{
    setLoginInfo({
    voterid:"",
    password:""
    })
  }
  const login = (e)=>{
    e.preventDefault();
    axios.post(apis.voterlogin,loginInfo).then((res)=>{
      clear();
      console.log(res.data);

      alert("Logged in Successfully");
      const data = {
        constituency:res.data,
        voterid:loginInfo.voterid
      }
      navigate("/voterLogin",{state:data})
      // console.log(res.data);
      // alert(res.data)
    }).catch((err)=>{
      clear()
      alert(err.response.data)
      console.log(err);
    })
  }

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
            {/* <TextField
              style={InputStyle}
              fullWidth
              label="Name"
              placeholder="Enter your name"
              id="name"
            /> */}
            {/* <TextField
              style={InputStyle}
              fullWidth
              id="adharId"
              label="Adhar Id"
              placeholder="Enter your adhar card no"
            /> */}
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
                      {showPassword ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <Button  style={ButtonStyle} variant="contained" onClick={login}>
              Login
            </Button>
          </form>
        </DialogContentText>
      </DialogContent>
    </div>
  );
}
