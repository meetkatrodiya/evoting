import React from "react";
import Header from "./Header";
import Home from "./Home";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { apis } from "../../../api/bootapi";
import VoterLogin from "../Login/VoterLogin";
export default function VoterHomePage() {

  const navigate = useNavigate();
  const [visible,setVisible] = React.useState(false);
  React.useEffect(()=>{
      axios.get(apis.validateOfficer,{headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}).then((res)=>{
          console.log("here")
          setVisible(true);
        }).catch((err)=>{
          console.log(err);
          navigate("/")
        })
  },[]);


  return (
    <>
     {
      visible &&
      <>
        <VoterLogin/>
      </>
     }
    </>
  );
}
