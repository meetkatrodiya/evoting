import React, { useState } from "react";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Button from "@mui/material/Button";
import Header from "../Home/Header";
import "./Evm.css";

function Row(props) {

  const [style, setStyle] = useState("circle");
  const [disabled, setDisabled] = useState(false);

  // Function : When button click Light is on...
  const clickHandle = () => {
    if(disabled) return;
    setDisabled({disabled: true});
    // alert("You clicked the button")
    console.log("clicked!!");
    setStyle("afterClick_circle");
    setTimeout(() => {
      setStyle("circle");
    }, 3000);
  };

  return (
    <>
      <TableRow className={"hover:bg-gray-100"}>
        <TableCell>
          <Typography style={{ fontWeight: 600 }}>{props.no}</Typography>
        </TableCell>
        <TableCell>
          <Typography style={{ fontWeight: 600 }}>{props.candidate}</Typography>
        </TableCell>
        <TableCell>
          <Typography style={{ fontWeight: 600 }}>{props.party}</Typography>
        </TableCell>
        <TableCell>
          <img
            src={props.logo}
            alt="logo"
            className={"h-10 w-11"}
          />
        </TableCell>
        <TableCell>
          <div className={style}></div>
        </TableCell>
        <TableCell>
          <Button
            variant={"contained"}
            style={{
              borderRadius: 35,
              backgroundColor: "#00003B",
              width: 110,
              height: 40,
              fontWeight: "bold",
            }}
            onClick={() => clickHandle(props)}
            disabled={disabled}
          >
            Vote
          </Button>
        </TableCell>
      </TableRow>
    </>
  );
}

const Evm = (props) => {

  return (
    <>
    <Header/>
    <Container>
      <Table className={"my-32 shadow-lg shadow-gray-500/40 border-2"}>
        <TableHead className={"bg-gray-300"}>
          <TableRow>
            <TableCell
              className={"text-lg font-bold"}
              style={{ fontSize: "20px", fontWeight: "bolder" }}
            >
              No.
            </TableCell>
            <TableCell
              className={"text-lg font-bold"}
              style={{ fontSize: "20px", fontWeight: "bolder" }}
            >
              Candidate Name
            </TableCell>
            <TableCell
              className={"text-lg font-bold"}
              style={{ fontSize: "20px", fontWeight: "bolder" }}
            >
              Party
            </TableCell>
            <TableCell
              className={"text-lg font-bold"}
              style={{ fontSize: "20px", fontWeight: "bolder" }}
            >
              Logo
            </TableCell>
            <TableCell className={"text-lg font-bold"}></TableCell>
            <TableCell className={"text-lg font-bold"}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
                <Row
                  // key={count}
                  no="1."
                  candidate="Narendra Modi"
                  party="BJP"
                  logo="https://imgs.search.brave.com/TQOK3VGN-663e6nRoA89ecWLDg6s-UXYSZpeNxjixQw/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC55/bjNHOXVFS3RZd3Nz/cU5XQUlEZTdnSGFG/aiZwaWQ9QXBp"
                ></Row>
                <Row
                  // key={count}
                  no="2."
                  candidate="Revatsinh Gohil"
                  party="Congress"
                  logo="https://imgs.search.brave.com/d5rU3hTz-kDrjLm6-L0tE44BkSddqskqFWxiBOtZ1DA/rs:fit:270:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5F/QWpNWDNLdzdyQk51/VUdyM2JzN2hnSGFN/XyZwaWQ9QXBp"
                ></Row>
                <Row
                  // key={count}
                  no="3."
                  candidate="Jitendra Chowdhury"
                  party="CPIM"
                  logo="https://imgs.search.brave.com/JjEb89u8oYbAMomZyYOgBlPuSeqNapyAos-MAw5cC9w/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5k/SjJibExOV01FcC1K/aWxWUk95ay13SGFI/YSZwaWQ9QXBp"
                ></Row>
        </TableBody>
      </Table>
    </Container>
    </>
  );
};
export default Evm;
