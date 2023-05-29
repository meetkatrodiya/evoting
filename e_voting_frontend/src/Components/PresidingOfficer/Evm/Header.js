import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Logo from "../../../assets/logo.png";

function Header() {
  const AppbarStyle = {
    backgroundColor: "#00003B",
  };

  const LogoStyle = {
    width: "70px",
    height: "auto",
    margin: "0 10px 0 0",
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={AppbarStyle}>
        <Toolbar>
          <img src={Logo} alt="" style={LogoStyle} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Welcome, Voter
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
