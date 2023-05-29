import * as React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { apis } from "../../../api/bootapi";

export default function Home() {
  const navigate = useNavigate();
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    axios
      .get(apis.validateOfficer, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        console.log("here");
        setVisible(true);
      })
      .catch((err) => {
        console.log(err);
        navigate("/");
      });
  }, []);

  return <>{visible && <h1>Hello</h1>}</>;
}
