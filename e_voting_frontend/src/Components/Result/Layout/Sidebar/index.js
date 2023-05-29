import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import logo from "../../../../assets/logo.png";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link } from "react-router-dom";

const Index = () => {
  const SidebarStyle = {
    backgroundColor: "#00003B",
    color: "white",
    height: "100vh",
  };

  return (
    <>
      <div style={SidebarStyle}>
        <List>
          <img
            src={logo}
            alt="Logo"
            style={{ marginBottom: "30%", width: "100%" }}
          />
        </List>

        <List>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/partyresult">
              <NavigateNextIcon />
              <ListItemText primary="Party wise vote result" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component={Link} to="/stateresult">
              <NavigateNextIcon />
              <ListItemText primary="State wise vote result" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component={Link} to="/consituncyresult">
              <NavigateNextIcon />
              <ListItemText primary="Consituncy wise vote result" />
            </ListItemButton>
          </ListItem>
        </List>

        <List style={{ color: "#00003B" }}>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>
    </>
  );
};

export default Index;
