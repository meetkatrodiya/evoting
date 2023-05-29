import React, { useEffect, useState } from "react";
import Layout from "../../Layout/index";
import VoterList from "./VoterList";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { apis } from "../../../../api/bootapi";

const toRender = (
    <VoterList/>
);

const Index = () => {

    const [visible,setVisible] = useState(false);
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get(apis.validate,{headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}).then((res)=>{
            console.log("here")
            setVisible(true)
          }).catch((err)=>{
            console.log(err);
            navigate("/")
          })
    },[])

    return (
       <>
         {
            visible &&
            <Layout render={toRender} />
        }
       </>
    );
  };
  
  export default Index;