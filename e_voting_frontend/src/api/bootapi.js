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
    allconstituency:`${base_url}/api/test/admin/constituency/getAllConstituency`,
    allvoters:`${base_url}/api/test/admin`
}