import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import { Login } from "@mui/icons-material";
import AdminHomePage from "./Components/Admin/Pages/Home/index";
import Evm from "./Components/PresidingOfficer/Evm/Evm";
import Candidate from "./Components/Admin/Pages/Candidate/index";
import Party from "./Components/Admin/Pages/Party/index";
import Voter from "./Components/Admin/Pages/Voter/index";
import Consituncy from "./Components/Admin/Pages/Consituncy/index";
import State from "./Components/Admin/Pages/State/index";
import VoterHomePage from "./Components/PresidingOfficer/Home/index";
import Result from "./Components/Result/home";
import PartyResult from "./Components/Result/Chart/Party/index";
import ConsituncyResult from "./Components/Result/Chart/Consityuncy/index";
import StateResult from "./Components/Result/Chart/State/index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/officerHome" element={<VoterHomePage />} />
          <Route exact path="/voterLogin" element={<Evm />} />
          <Route exact path="/home" element={<AdminHomePage />} />
          <Route exact path="/candidate" element={<Candidate />} />
          <Route exact path="/party" element={<Party />} />
          <Route exact path="/voter" element={<Voter />} />
          <Route exact path="/consituncy" element={<Consituncy />} />
          <Route exact path="/state" element={<State />} />
          <Route exact path="/result" element={<Result />} />
          <Route exact path="partyresult" element={<PartyResult />} />
          <Route exact path="consituncyresult" element={<ConsituncyResult />} />
          <Route exact path="stateresult" element={<StateResult />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
