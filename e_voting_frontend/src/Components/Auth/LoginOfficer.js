import React, { useState } from "react";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Avatar,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { apis } from "../../api/bootapi";

function LoginOfficer() {
  const ButtonStyle = {
    backgroundColor: "#000080",
    marginTop: 20,
    marginLeft: "37%",
    width: "30%",
  };
  const InputStyle = {
    marginTop: 10,
    marginLeft: 15,
    width: "90%",
  };
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const isAdmin = true;

  const [loginInfo, setLoginInfo] = useState();
  const navigate = useNavigate();
  const changeInfo = (e) => {
    setLoginInfo((values) => ({ ...values, [e.target.name]: e.target.value }));
  };
  const login = (e) => {
    e.preventDefault();
    axios
      .post(apis.login, loginInfo)
      .then((res) => {
        localStorage.setItem("token", res.data.accessToken);
        alert("Logedin Successfully");
        navigate("/officerHome");
      })
      .catch((err) => {
        alert("Bad Credantial");
        console.log(err);
      });
  };
  return (
    <div>
      <DialogTitle id="alert-dialog-title">
        <Avatar style={{ backgroundColor: "#000080", margin: "auto" }}>
          <AccountCircleIcon />
        </Avatar>
        <h2
          className="headerStyle"
          style={{
            margin: "auto",
            width: "80%",
            fontWeight: "bold",
            fontSize: 25,
          }}
        >
          Presiding Officer Login
        </h2>
        <Typography style={{ margin: "auto", width: "75%" }}>
          Please fill your information correctly!
        </Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <form>
            <TextField
              style={InputStyle}
              id="outlined-basic"
              label="User name"
              variant="outlined"
              name="voterid"
              onChange={changeInfo}
              required
            />
            <br />
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
            <Button
              style={ButtonStyle}
              type="submit"
              variant="contained"
              onClick={login}
            >
              {/* <Button component={Link} to={isAdmin ? "/home" : "/officerHome"} style={ButtonStyle} type="submit" variant="contained" onClick={}> */}
              Login
            </Button>
          </form>
        </DialogContentText>
      </DialogContent>
    </div>
  );
}

export default LoginOfficer;
