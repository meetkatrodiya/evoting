import * as React from "react";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

const drawerWidth = 240;

const Index = () => {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const Search = styled("div")(({ theme }) => ({
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        "&:hover": {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
          marginLeft: theme.spacing(1),
          width: "auto",
        },
      }));
    
      const SearchIconWrapper = styled("div")(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }));
    
      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: "inherit",
        "& .MuiInputBase-input": {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create("width"),
          width: "100%",
          [theme.breakpoints.up("sm")]: {
            width: "12ch",
            "&:focus": {
              width: "20ch",
            },
          },
        },
      }));

      const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
      };
    
      const SidebarStyle = {
        backgroundColor: "#00003B",
      };

    return(
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
            Welcome, Admin
          </Typography>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    );
}

export default Index;