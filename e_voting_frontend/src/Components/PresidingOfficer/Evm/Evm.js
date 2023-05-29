import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Button from "@mui/material/Button";
import Header from "./Header";
import "./Evm.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { apis } from "../../../api/bootapi";
import Loading from "../../Loading/Loading";

function Row(props) {
  const navigate = useNavigate();
  const [style, setStyle] = useState("circle");
  const [disabled, setDisabled] = useState(false);

  // Function : When button click Light is on...
  const clickHandle = (adharid, voterid) => {
    if (disabled) return;
    setDisabled({ disabled: true });
    const data = {
      adharid: adharid,
    };
    axios.put(apis.addvote, data).then((res) => {
      axios
        .put(`${apis.aftervote}/${voterid}`)
        .then((res) => {
          console.log("clicked!!");
          setStyle("afterClick_circle");
          setTimeout(() => {
            setStyle("circle");
          }, 3000);
          navigate("/officerHome");
        })
        .catch((e) => {
          console.log(e);
        })
        .catch((e) => {
          console.log(e);
        });
    });
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
            src={`data:image/png;base64,${props.logo}`}
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
            onClick={() => clickHandle(props.adharid, props.voterid)}
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
  const location = useLocation();
  const [check, setCheck] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getCandidate();
  }, [check]);
  const [candidates, setCandidates] = useState();
  const getCandidate = () => {
    axios
      .get(`${apis.candidatefromconstituency}/${location.state.constituency}`)
      .then((res) => {
        setCandidates(res.data);
        setLoading(true);
        console.log(res.data);
      })
      .catch((err) => {
        alert(err.response.data);
      });
  };
  var cnt = 1;
  return (
    <>
      {loading ? (
        <>
          <Header />
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
                {candidates.length
                  ? candidates.map((candidate) => (
                      <Row
                        key={cnt}
                        no={`${cnt}.`}
                        candidate={candidate.name}
                        party={candidate.party.partyname}
                        logo={candidate.party.partylogo}
                        adharid={candidate.adharid}
                        voterid={location.state.voterid}
                      ></Row>
                    ))
                  : "No candidate for this constituency"}
              </TableBody>
            </Table>
          </Container>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};
export default Evm;
