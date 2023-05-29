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
    position: "fixed",
    width: 240,
  };

  return (
    <>
      <div style={SidebarStyle}>
        <img
          src={logo}
          alt="Logo"
          width={200}
          style={{ marginBottom: "22%" }}
        />

        <List>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/home">
              <NavigateNextIcon />
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component={Link} to="/candidate">
              <NavigateNextIcon />
              <ListItemText primary="Candidate" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component={Link} to="/party">
              <NavigateNextIcon />
              <ListItemText primary="Party" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component={Link} to="/voter">
              <NavigateNextIcon />
              <ListItemText primary="Voter" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component={Link} to="/consituncy">
              <NavigateNextIcon />
              <ListItemText primary="Constituncy" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component={Link} to="/state">
              <NavigateNextIcon />
              <ListItemText primary="State" />
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
