import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Date from "./Date";
import Time from "./Time";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function ShowCard(props) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" sx={{ padding: 3, color: "#00003B" }}>
            {props.title}
          </Typography>
          <Accordion sx={{ marginBottom: 3 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6">Set Starting Date & Time</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ marginBottom: 3 }}>
                Starting Date :
                <br />
                <Date />
              </Typography>
              <Typography sx={{ marginBottom: 3 }}>
                Starting Time : <Time />
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6">Set Ending Date & Time</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Ending Date :
                <br />
                <Date />
              </Typography>
              <Typography>
                Ending Time : <Time />
              </Typography>
            </AccordionDetails>
          </Accordion>
        </CardContent>
      </Card>
    </Box>
  );
}
