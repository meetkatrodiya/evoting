import * as React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import axios from "axios";
import { apis } from "../../../../api/bootapi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Home() {
  const nevigate = useNavigate();
  const [visible, setVisible] = React.useState(false);
  const [EleInfo, setEleInfo] = React.useState();
  const [check, setCheck] = React.useState(false);
  React.useEffect(() => {
    axios
      .get(apis.validate, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        console.log("here");
        axios
          .get(apis.info)
          .then((res) => {
            setEleInfo(res.data);
            handlecheck();
          })
          .catch((e) => {
            console.log(e);
          });
        setVisible(true);
      })
      .catch((err) => {
        console.log(err);
        nevigate("/");
      });
  }, [check]);
  const ButtonStyle = {
    marginTop: 40,
    marginBottom: 0,
    marginRight: "auto",
    marginLeft: "auto",
    display: "block",
    backgroundColor: "#00003B",
    width: "20%",
  };

  const [info, setInfo] = useState();
  const changeInfo = (e) => {
    setInfo((values) => ({ ...values, [e.target.name]: e.target.value }));
  };
  const handlecheck = () => {
    if (check) setCheck(false);
    else setCheck(true);
  };
  const handleClick = (e) => {
    e.preventDefault();
    axios
      .post(apis.launch, info)
      .then((res) => {
        console.log(res.data);
        alert(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data);
      });
  };
  return (
    <>
      {visible && EleInfo ? (
        <TableContainer component={Paper} sx={{ marginTop: 5 }}>
          <Table size="medium" aria-label="a dense table">
            <TableHead style={{ backgroundColor: "#00003B" }}>
              <TableRow sx={{ paddingRight: 50 }}>
                <TableCell style={{ color: "#ffffff", fontSize: 16 }}>
                  Election Information
                </TableCell>
                <TableCell
                  style={{ color: "#ffffff", fontSize: 16 }}
                ></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell style={{ fontSize: 15 }}>
                  Registration Start Date:{" "}
                </TableCell>
                <TableCell style={{ fontSize: 15 }}>
                  {EleInfo.registrationStartingDate}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ fontSize: 15 }}>
                  Registration End Date:{" "}
                </TableCell>
                <TableCell style={{ fontSize: 15 }}>
                  {EleInfo.registrationEndingDate}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ fontSize: 15 }}>
                  Election Start Date:{" "}
                </TableCell>
                <TableCell style={{ fontSize: 15 }}>
                  {EleInfo.electionStartingDate}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ fontSize: 15 }}>
                  Election End Date:{" "}
                </TableCell>
                <TableCell style={{ fontSize: 15 }}>
                  {EleInfo.electionEndingDate}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ fontSize: 15 }}>Result Date: </TableCell>
                <TableCell style={{ fontSize: 15 }}>
                  {EleInfo.resultDate}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <div>
          <form
            action=""
            style={{ backgroundColor: "#f2f2f2", padding: 10, margin: 20 }}
          >
            <Typography
              variant="h5"
              sx={{ padding: 3, color: "#00003B", fontWeight: "bold" }}
            >
              Set Date and Time for Election
            </Typography>
            <div style={{ display: "flex", margin: 20 }}>
              <Typography for="Set date and time">Starting Date : </Typography>
              <input
                style={{
                  marginLeft: 10,
                  border: "1px solid gray",
                  borderRadius: 5,
                  padding: 10,
                  backgroundColor: "transparent",
                }}
                type="datetime-local"
                name="electionStartingDate"
                onChange={changeInfo}
                min="2023-04-30T00:00"
              />
              <Typography for="Set date and time" sx={{ marginLeft: 30 }}>
                Ending Date :{" "}
              </Typography>
              <input
                style={{
                  marginLeft: 10,
                  border: "1px solid gray",
                  borderRadius: 5,
                  padding: 10,
                  backgroundColor: "transparent",
                }}
                type="datetime-local"
                name="electionEndingDate"
                onChange={changeInfo}
                min="2023-04-30T00:00"
              />
            </div>
            <Typography
              variant="h5"
              sx={{ padding: 3, color: "#00003B", fontWeight: "bold" }}
            >
              Set Date and Time for Registeration
            </Typography>
            <div style={{ display: "flex", margin: 20 }}>
              <Typography for="Set date and time">Starting Date : </Typography>
              <input
                style={{
                  marginLeft: 10,
                  border: "1px solid gray",
                  borderRadius: 5,
                  padding: 10,
                  backgroundColor: "transparent",
                }}
                type="datetime-local"
                name="registrationStartingDate"
                onChange={changeInfo}
                min="2023-04-30T00:00"
              />
              <Typography for="Set date and time" sx={{ marginLeft: 30 }}>
                Ending Date :{" "}
              </Typography>
              <input
                style={{
                  marginLeft: 10,
                  border: "1px solid gray",
                  borderRadius: 5,
                  padding: 10,
                  backgroundColor: "transparent",
                }}
                type="datetime-local"
                name="registrationEndingDate"
                onChange={changeInfo}
                min="2023-04-30T00:00"
              />
            </div>

            <Typography
              variant="h5"
              sx={{ padding: 3, color: "#00003B", fontWeight: "bold" }}
            >
              Set Result Date and Time
            </Typography>
            <div style={{ display: "flex", margin: 20 }}>
              <Typography for="Set date and time">Starting Date : </Typography>
              <input
                style={{
                  marginLeft: 10,
                  border: "1px solid gray",
                  borderRadius: 5,
                  padding: 10,
                  backgroundColor: "transparent",
                }}
                type="datetime-local"
                name="resultDate"
                onChange={changeInfo}
                min="2023-04-30T00:00"
              />
            </div>
            <Button
              style={ButtonStyle}
              type="submit"
              variant="contained"
              onClick={handleClick}
            >
              Launch Election
            </Button>
          </form>
        </div>
      )}
    </>
  );
}
