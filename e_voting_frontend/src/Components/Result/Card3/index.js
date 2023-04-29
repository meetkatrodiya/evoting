

import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

function Index() {
    return(
    <Card sx={{ minWidth: 275, margin:3}}>
      <CardContent>
        Consituncy wise vote result
      </CardContent>
      <div style={{display: "flex"}}>
      <CardActions>
        <Button size="small">Pie Chart</Button>
      </CardActions>
      <CardActions>
        <Button size="small">Line Chart</Button>
      </CardActions>
      <CardActions>
        <Button size="small">Bar Chart</Button>
      </CardActions>
      </div>
    </Card>
    );
}

export default Index;