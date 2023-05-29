import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateIcon from "@mui/icons-material/Update";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Box from "@mui/material/Box";
import AddParty from "./AddParty";
import UpdateParty from "./UpdateParty";
import { Dialog } from "@mui/material";
import axios from "axios";
import { apis } from "../../../../api/bootapi";
import Loading from "../../../Loading/Loading";
import { useNavigate } from "react-router-dom";

export default function CandidateList() {
  const [check, setCheck] = React.useState(false);

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [updateopen, updatesetOpen] = React.useState(false);
  const updatehandleClickOpen = () => {
    updatesetOpen(true);
  };
  const updatehandleClose = () => {
    updatesetOpen(false);
  };

  const [rows, setRows] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const [regStart, setRegStart] = React.useState(Date());
  const [regEnd, setregEnd] = React.useState(Date());
  const [current, setCurrent] = React.useState(Date());
  React.useEffect(() => {
    const d = new Date();
    setCurrent(d);
    axios
      .get(apis.validate, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        console.log("here");
        axios
          .get(apis.rs)
          .then((res) => {
            const d = new Date(`${res.data}`);
            console.log(d);
            setRegStart(d);
          })
          .catch((err) => console.log(err));
        axios
          .get(apis.re)
          .then((res) => {
            const d = new Date(`${res.data}`);
            console.log(d);
            setregEnd(d);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        console.log(err);
        navigate("/");
      });
    getAllParty();
  }, [check]);
  async function getAllParty() {
    try {
      const res = await axios.get(apis.allparty);
      console.log(res.data);
      setRows(res.data);
      setLoading(true);
    } catch (e) {
      console.log(e);
    }
  }
  const handleDelete = (e, id) => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to delete this party?") == true) {
      axios
        .delete(`${apis.deleteparty}/${id}`)
        .then((res) => {
          alert(res.data);
          handlecheck();
        })
        .catch((err) => console.log(err));
    } else {
      console.log("cancel");
    }
  };
  const handlecheck = () => {
    if (check) setCheck(false);
    else setCheck(true);
  };
  return (
    <>
      {loading ? (
        current >= regStart ? (
          <Paper
            sx={{
              width: "100%",
              overflow: "hidden",
              marginTop: "1%",
              backgroundColor: "#f2f2f2",
              padding: 3,
            }}
          >
            <Typography sx={{ fontSize: 30, fontWeight: "bold" }}>
              Party List
            </Typography>
            <TableContainer sx={{ maxHeight: 450, backgroundColor: "#e6e6ff" }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <TableCell
                      style={{
                        backgroundColor: "#00003B",
                        color: "#fff",
                        fontSize: 16,
                      }}
                    >
                      Party Name
                    </TableCell>
                    <TableCell
                      style={{
                        backgroundColor: "#00003B",
                        color: "#fff",
                        fontSize: 16,
                      }}
                    >
                      Party Logo
                    </TableCell>
                    <TableCell
                      style={{
                        backgroundColor: "#00003B",
                        color: "#fff",
                        fontSize: 16,
                      }}
                    >
                      Leader Name
                    </TableCell>
                    <TableCell
                      style={{
                        backgroundColor: "#00003B",
                        color: "#fff",
                        fontSize: 16,
                      }}
                    >
                      Update
                    </TableCell>
                    <TableCell
                      style={{
                        backgroundColor: "#00003B",
                        color: "#fff",
                        fontSize: 16,
                      }}
                    >
                      Delete
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                        <TableCell sx={{ fontSize: 15 }}>
                          {row.partyname}
                        </TableCell>
                        <TableCell>
                          <img
                            src={`data:image/jpeg;base64,${row.partylogo}`}
                            alt="logo"
                            style={{ height: 35, width: 40 }}
                          />
                        </TableCell>
                        <TableCell sx={{ fontSize: 15 }}>
                          {row.leadername}
                        </TableCell>
                        <TableCell>
                          {current <= regEnd && (
                            <Button
                              onClick={updatehandleClickOpen}
                              variant="contained"
                              startIcon={<UpdateIcon />}
                              color="success"
                            >
                              Update
                            </Button>
                          )}
                        </TableCell>
                        <TableCell>
                          {current <= regEnd && (
                            <Button
                              variant="contained"
                              startIcon={<DeleteIcon />}
                              style={{ backgroundColor: "#ff4d4d" }}
                              onClick={(e) => {
                                handleDelete(e, row.id);
                              }}
                            >
                              Delete
                            </Button>
                          )}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
            <Dialog
              open={updateopen}
              onClose={updatehandleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <UpdateParty />
            </Dialog>
            <Box
              textAlign="center"
              paddingBottom={0}
              paddingLeft={3}
              paddingRight={3}
              paddingTop={3}
            >
              {current <= regEnd && (
                <Button
                  onClick={handleClickOpen}
                  variant="contained"
                  startIcon={<AddCircleIcon />}
                  style={{ backgroundColor: "#00003B" }}
                >
                  Add Party
                </Button>
              )}
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <AddParty close={handleClose} check={handlecheck} />
              </Dialog>
            </Box>
          </Paper>
        ) : (
          "No Registration Start"
        )
      ) : (
        <Loading />
      )}
    </>
  );
}
