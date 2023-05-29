import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { apis } from "../../../api/bootapi";
import VoterLogin from "../Login/VoterLogin";
export default function VoterHomePage() {
  const navigate = useNavigate();
  const [visible, setVisible] = React.useState(false);

  const [eleStart, setEleStart] = React.useState(Date());
  const [eleEnd, setEleEnd] = React.useState(Date());
  const [current, setCurrent] = React.useState(Date());

  const logout = () => {
    console.log("here");
    localStorage.removeItem("token");
    navigate("/");
  };
  React.useEffect(() => {
    axios
      .get(apis.validateOfficer, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        console.log("here");
        setVisible(true);
        const d = new Date();
        setCurrent(d);
        axios
          .get(apis.es)
          .then((res) => {
            const d = new Date(`${res.data}`);
            console.log(d);
            setEleStart(d);
          })
          .catch((err) => console.log(err));
        axios
          .get(apis.ee)
          .then((res) => {
            const d = new Date(`${res.data}`);
            console.log(d);
            setEleEnd(d);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        console.log(err);
        navigate("/");
      });
  }, []);

  return (
    <>
      {visible && current >= eleStart && current <= eleEnd ? (
        <>
          <VoterLogin />
        </>
      ) : current <= eleStart ? (
        <h3>Election not started yet</h3>
      ) : (
        current >= eleEnd && logout()
      )}
    </>
  );
}
