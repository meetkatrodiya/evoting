import * as React from "react";
import ShowCard from "./Card";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import axios from "axios";
import { apis } from "../../../../api/bootapi";
import { useNavigate } from "react-router-dom";

export default function Home() {

  const nevigate = useNavigate(); 
  const [visible,setVisible] = React.useState(false);
  React.useEffect(()=>{
    axios.get(apis.validate,{headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}).then((res)=>{
      console.log("here")
      setVisible(true)
    }).catch((err)=>{
      console.log(err);
      nevigate("/")
    })
  },[])
  const ButtonStyle = {
    marginTop:40,
    marginBottom: 0,
    marginRight: "auto",
    marginLeft: "auto",
    display: "block",
    backgroundColor: "#00003B",
    width: "20%",
  };

  return (
    <>
    {visible &&
    <div style={{padding: 30,
      backgroundColor: "#f2f2f2"}}>
      <Typography
        variant="h4"
        style={{ textAlign: "center", fontWeight: "bold", marginBottom: 5 }}
        textAlign
      >
        Election Details
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <ShowCard title={"For Election"} />
        <ShowCard title={"For Registration"} />
      </div>
      <Button
                style={ButtonStyle}
                type="submit"
                variant="contained"
              >
                Launch Election
              </Button>
    </div>
}</>
  );
}
