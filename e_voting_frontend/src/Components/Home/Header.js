import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Logo from "../../assets/logo.png";
import { Dialog } from "@mui/material";
import Login from "../Auth/Login";
import OfficerLogin from "../Auth/LoginOfficer";
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

  const [open, setOpen] = React.useState(false);
  const [officeropen, officersetOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickOfficerOpen = () => {
    officersetOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={AppbarStyle}>
        <Toolbar>
          <img src={Logo} alt="" style={LogoStyle} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            E - Voting System
          </Typography>
          <Button
            color="inherit"
            onClick={handleClickOfficerOpen}
            style={ButtonStyle}
          >
            Presiding Officer Login
          </Button>
          <Dialog
            open={officeropen}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <OfficerLogin />
          </Dialog>
          <Button color="inherit" onClick={handleClickOpen} style={ButtonStyle}>
            Admin Login
          </Button>

          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <Login />
          </Dialog>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
