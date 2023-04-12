import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Dialog } from "@mui/material";
import PieChart from "./PieChart";
import ColumnChart from "./ColumnChart";
import AreaChart from "./AreaChart";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function Index() {
    return(
    <Card sx={{ minWidth: 275, margin:3}}>
      <CardContent>
        Party wise vote result
      </CardContent>
      <div style={{display: "flex"}}>
      </div>
    </Card>
    );
}

export default Index;