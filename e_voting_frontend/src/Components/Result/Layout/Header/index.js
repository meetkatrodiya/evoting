import * as React from "react";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
const drawerWidth = 240;

const Index = () => {
  const ButtonStyle = {
    backgroundColor: "white",
    color: "#000080",
    opacity: 0.5,
    padding: 7,
  };

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const SidebarStyle = {
    backgroundColor: "#00003B",
  };

  return (
    <AppBar
      style={SidebarStyle}
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div" marginRight={100}>
          Election Result
        </Typography>
        <Button component={Link} to="/" color="inherit" style={ButtonStyle}>
          Back
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Index;
