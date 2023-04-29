export const base_url = "http://localhost:8080";


export const apis = {
    login:`${base_url}/api/auth/signin`,
    signup:`${base_url}/api/auth/signup`,
    // candidateConstituencywise:`${base_url}/`
    allparty:`${base_url}/api/test/admin/party/getAllParty`,
    allstate:`${base_url}/api/test/admin/getAllStates`,
    constituenciesbystate:`${base_url}/api/test/admin/constituency/getConstituencyFromState`,
    addcandidate:`${base_url}/api/test/admin/candidate/addCandidate`,
    allcandidate:`${base_url}/api/test/admin/candidate/getAllCandidate`,
    getcandidate:`${base_url}/api/test/admin/candidate/getCandidateFromId`,
    updatecandidate:`${base_url}/api/test/admin/candidate/updateCandidate`,
    allconstituency:`${base_url}/api/test/admin/constituency/getAllConstituency`,
    allvoters:`${base_url}/api/auth/getAllVoter`,
    deletevoter:`${base_url}/api/auth/deleteUser`,
    addstate:`${base_url}/api/test/admin/state/addState`,
    addconst:`${base_url}/api/test/admin/constituency/addConstituency`,
    addparty:`${base_url}/api/test/admin/party/addParty`,
    deleteparty:`${base_url}/api/test/admin/party/deleteParty`,
    deleteCandidate:`${base_url}/api/test/admin/candidate/deleteCandidate`,
    partycount:`${base_url}/api/test/admin/vote/countPartyVote`,
    constituencycount:`${base_url}/api/test/admin/vote/countConstituencyVote`,
    winnercandidate:`${base_url}/api/test/admin/vote/winnerCandidate`,
    statecount:`${base_url}/api/test/admin/vote/statePartyCount`,
}