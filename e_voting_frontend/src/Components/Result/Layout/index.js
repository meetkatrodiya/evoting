import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Header from "./Header/index";
import Sidebar from "./Sidebar/index";

const drawerWidth = 240;

function Index(props) {

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Sidebar/>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {/* New element */}
        {props.render}
      </Box>
    </Box>
  );
}

// Index.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

export default Index;

// -----------------------------------------------------------------------------------------

// import * as React from "react";
// import PropTypes from "prop-types";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import CssBaseline from "@mui/material/CssBaseline";
// import Drawer from "@mui/material/Drawer";
// import IconButton from "@mui/material/IconButton";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemText from "@mui/material/ListItemText";
// import MenuIcon from "@mui/icons-material/Menu";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import logo from "../../../assets/logo.png";
// import "../style.css";
// import NavigateNextIcon from "@mui/icons-material/NavigateNext";
// import SearchIcon from "@mui/icons-material/Search";
// import { styled, alpha } from "@mui/material/styles";
// import InputBase from "@mui/material/InputBase";
// import { Link } from "react-router-dom";

// const drawerWidth = 240;

// function Header(props) {
//   // const [auth, setAuth] = React.useState(true);
//   // const [anchorEl, setAnchorEl] = React.useState(null);

//   // const handleChange = (event) => {
//   //   setAuth(event.target.checked);
//   // };

//   // const handleMenu = (event) => {
//   //   setAnchorEl(event.currentTarget);
//   // };

//   // const handleClose = () => {
//   //   setAnchorEl(null);
//   // };

//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const SidebarStyle = {
//     backgroundColor: "#00003B",
//   };

//   const Search = styled("div")(({ theme }) => ({
//     position: "relative",
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: alpha(theme.palette.common.white, 0.15),
//     "&:hover": {
//       backgroundColor: alpha(theme.palette.common.white, 0.25),
//     },
//     marginLeft: 0,
//     width: "100%",
//     [theme.breakpoints.up("sm")]: {
//       marginLeft: theme.spacing(1),
//       width: "auto",
//     },
//   }));

//   const SearchIconWrapper = styled("div")(({ theme }) => ({
//     padding: theme.spacing(0, 2),
//     height: "100%",
//     position: "absolute",
//     pointerEvents: "none",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   }));

//   const StyledInputBase = styled(InputBase)(({ theme }) => ({
//     color: "inherit",
//     "& .MuiInputBase-input": {
//       padding: theme.spacing(1, 1, 1, 0),
//       // vertical padding + font size from searchIcon
//       paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//       transition: theme.transitions.create("width"),
//       width: "100%",
//       [theme.breakpoints.up("sm")]: {
//         width: "12ch",
//         "&:focus": {
//           width: "20ch",
//         },
//       },
//     },
//   }));

//   const drawer = (
//     <div style={SidebarStyle}>
//       <List>
//         <img src={logo} alt="Logo" style={{ marginBottom: "10%" }} />
//       </List>
//       {/* <List>
//         {["Candidate", "Party", "Voter", "Constituncy", "State"].map(
//           (text, index) => (
//             <ListItem key={text} disablePadding>
//               <ListItemButton>
//                 <NavigateNextIcon />
//                 <ListItemText primary={text} />
//               </ListItemButton>
//             </ListItem>
//           )
//         )}
//       </List> */}

//       <List>
//         <ListItem disablePadding>
//           <ListItemButton component={Link} to="/candidate">
//             <NavigateNextIcon />
//             <ListItemText primary="Candidate" />
//           </ListItemButton>
//         </ListItem>
//         <ListItem disablePadding>
//           <ListItemButton>
//             <NavigateNextIcon />
//             <ListItemText primary="Party" />
//           </ListItemButton>
//         </ListItem>
//         <ListItem disablePadding>
//           <ListItemButton>
//             <NavigateNextIcon />
//             <ListItemText primary="Voter" />
//           </ListItemButton>
//         </ListItem>
//         <ListItem disablePadding>
//           <ListItemButton>
//             <NavigateNextIcon />
//             <ListItemText primary="Constituncy" />
//           </ListItemButton>
//         </ListItem>
//         <ListItem disablePadding>
//           <ListItemButton component={Link} to="/state">
//             <NavigateNextIcon />
//             <ListItemText primary="State" />
//           </ListItemButton>
//         </ListItem>
//       </List>

//       <List style={{ color: "#00003B" }}>
//         {["All mail", "Trash", "Spam", "All mail", "spam"].map(
//           (text, index) => (
//             <ListItem key={text} disablePadding>
//               <ListItemButton>
//                 <ListItemText primary={text} />
//               </ListItemButton>
//             </ListItem>
//           )
//         )}
//       </List>
//     </div>
//   );

//   const container =
//     window !== undefined ? () => window().document.body : undefined;

//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />
//         {/* <Header/> */}
//         <AppBar
//         style={SidebarStyle}
//         position="fixed"
//         sx={{
//           width: { sm: `calc(100% - ${drawerWidth}px)` },
//           ml: { sm: `${drawerWidth}px` },
//         }}
//       >
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: "none" } }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap component="div" marginRight={100}>
//             Welcome, Admin
//           </Typography>

//           <Search>
//             <SearchIconWrapper>
//               <SearchIcon />
//             </SearchIconWrapper>
//             <StyledInputBase
//               placeholder="Search…"
//               inputProps={{ "aria-label": "search" }}
//             />
//           </Search>
//         </Toolbar>
//       </AppBar>
//       <Box
//         component="nav"
//         sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
//         aria-label="mailbox folders"
//       >
//         {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: "block", sm: "none" },
//             "& .MuiDrawer-paper": {
//               boxSizing: "border-box",
//               width: drawerWidth,
//             },
//           }}
//         >
//           {drawer}
//         </Drawer>
//         <Drawer
//           variant="permanent"
//           sx={{
//             display: { xs: "none", sm: "block" },
//             "& .MuiDrawer-paper": {
//               boxSizing: "border-box",
//               width: drawerWidth,
//             },
//           }}
//           open
//         >
//           {drawer}
//         </Drawer>
//       </Box>
//       <Box
//         component="main"
//         sx={{
//           flexGrow: 1,
//           p: 3,
//           width: { sm: `calc(100% - ${drawerWidth}px)` },
//         }}
//       >
//         <Toolbar />
//         {/* New element */}

//       </Box>
//     </Box>
//   );
// }

// Header.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

// export default Header;

// // import * as React from "react";
// // import PropTypes from "prop-types";
// // import Box from "@mui/material/Box";
// // import CssBaseline from "@mui/material/CssBaseline";
// // import Toolbar from "@mui/material/Toolbar";
// // import "../style.css";
// // import CandidateList from "../Candidate/CandidateList";
// // import AdminHeader from "./Header/AdminHeader";
// // import AdminSidebar from "./Sidebar/AdminSidebar"

// // function Header(props) {
// //   return (
// //     <Box sx={{ display: "flex" }}>
// //       <CssBaseline />
// //         <AdminHeader/>

// //       <AdminSidebar/>
// //       <Box
// //         component="main"
// //         sx={{
// //           flexGrow: 1,
// //           p: 3,
// //           // width: { sm: `calc(100% - ${drawerWidth}px)` },
// //         }}
// //       >
// //         <Toolbar />
// //         <CandidateList />
// //       </Box>
// //     </Box>
// //   );
// // }

// // Header.propTypes = {
// //   /**
// //    * Injected by the documentation to work in an iframe.
// //    * You won't need it on your project.
// //    */
// //   window: PropTypes.func,
// // };

// // export default Header;
