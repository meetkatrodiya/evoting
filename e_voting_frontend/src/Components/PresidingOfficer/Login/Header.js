import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";

function Header() {
  const AppbarStyle = {
    backgroundColor: "#00003B",
  };

  const LogoStyle = {
    width: "70px",
    height: "auto",
    margin: "0 10px 0 0",
  };

  const ButtonStyle = {
    backgroundColor: "white",
    color: "#000080",
    opacity: 0.5,
    padding: 7,
    marginLeft: 10,
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={AppbarStyle}>
        <Toolbar>
          <img src={Logo} alt="" style={LogoStyle} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Welcome, Presiding Officer
          </Typography>
          <Button component={Link} to="/" color="inherit" style={ButtonStyle}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
