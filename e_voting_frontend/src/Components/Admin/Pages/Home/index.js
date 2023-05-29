import React, { useEffect, useState } from "react";
import Layout from "../../Layout/index";
import Home from "./home";
import axios from "axios";
import { apis } from "../../../../api/bootapi";
import { useNavigate } from "react-router-dom";

const toRender = <Home />;

const Index = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(apis.validate, {
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

  return <>{visible && <Layout render={toRender} />}</>;
};

export default Index;
