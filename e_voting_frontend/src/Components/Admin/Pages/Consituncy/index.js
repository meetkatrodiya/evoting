import React, { useEffect, useState } from "react";
import Layout from "../../Layout/index";
import ConsituncyList from "./ConsituncyList";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { apis } from "../../../../api/bootapi";

const toRender = <ConsituncyList />;

const Index = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
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
