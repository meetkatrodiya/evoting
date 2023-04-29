package com.bezkoder.spring.jwt.mongodb.services;

import com.bezkoder.spring.jwt.mongodb.dto.CandidateDTO;
import com.bezkoder.spring.jwt.mongodb.models.Candidate;
import com.bezkoder.spring.jwt.mongodb.models.Constituency;
import com.bezkoder.spring.jwt.mongodb.models.Party;
import com.bezkoder.spring.jwt.mongodb.repository.CandidateRepository;
import com.bezkoder.spring.jwt.mongodb.repository.ConstituencyRepository;
import com.bezkoder.spring.jwt.mongodb.repository.PartyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.parameters.P;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CandidateService {
    @Autowired
    private CandidateRepository candidateRepository;

    @Autowired
    private PartyRepository partyRepository;

    @Autowired
    private ConstituencyRepository constituencyRepository;

    public ResponseEntity<?> addCandidate(CandidateDTO candidate){
        if(candidate == null){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Enter details");
        }
        String temp = Long.toString(candidate.getAdharid());
        if(temp.length() != 12){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Length of adhar id must be 12");
        }
        if(candidateRepository.existsCandidateByAdharid(candidate.getAdharid())){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Already registered");
        }
        Party p = partyRepository.findPartyByPartyname(candidate.getParty());
        System.out.println(p);
        if(p == null){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Party does not exist");
        }
        Constituency c = constituencyRepository.findConstituencyByConstituencyname(candidate.getConstituency());
        System.out.println(c);
        System.out.println(candidateRepository.existsCandidateByConstituency(c));
        System.out.println(candidateRepository.existsCandidateByParty(p));
        if(c == null){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Constituency does not exist");
        }
//        if(candidateRepository.existsCandidateByConstituency(c) && candidateRepository.existsCandidateByParty(p)){
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Already one of your candidate is registered for this constituency");
//        }
        Candidate cand = new Candidate();
        cand.setAdharid(candidate.getAdharid());
        cand.setName(candidate.getName());
        cand.setCity(candidate.getCity());
        cand.setConstituency(c);
        cand.setMobileno(candidate.getMobileno());
        cand.setDob(candidate.getDob());
        cand.setParty(p);
        candidateRepository.save(cand);
        return  ResponseEntity.ok("Candidate added successfully");
    }

    public ResponseEntity<?> getCandidate(String constituency){
        Constituency con = new Constituency();
        con = constituencyRepository.findConstituencyByConstituencyname(constituency);
        if(con == null){
            return ResponseEntity.status(500).body("No constituency found");
        }
        List<Candidate> canlist = candidateRepository.findCandidatesByConstituency(con);
        if(canlist.size() == 0){
            return ResponseEntity.status(500).body("No candidate found");
        }
        return new ResponseEntity<>(canlist, HttpStatus.OK);
    }

    public ResponseEntity<?> updateCandidate(CandidateDTO candidate){
        try{
            Candidate can = candidateRepository.findById(candidate.getAdharid()).get();
            can.setName(candidate.getName());
            can.setCity(candidate.getCity());
            can.setMobileno(candidate.getMobileno());
            can.setDob(candidate.getDob());
            Party p = partyRepository.findPartyByPartyname(candidate.getParty());
            if(p == null){
                return ResponseEntity.status(500).body("Party not found");
            }
            can.setParty(p);
            Constituency con = constituencyRepository.findConstituencyByConstituencyname(candidate.getConstituency());
            if(con == null){
                return ResponseEntity.status(500).body("Constituency not found");
            }
            can.setConstituency(con);
            candidateRepository.save(can);
            return ResponseEntity.ok("Candidate updated Successfully");
        }
        catch (Exception ex){
            return ResponseEntity.status(500).body(ex.getMessage());
        }

    }
    public ResponseEntity<?> getCandidateFromId(long id){
        try{
            Candidate can = candidateRepository.findById(id).get();
            return new ResponseEntity<>(can,HttpStatus.OK);
        }catch (Exception ex){
            return ResponseEntity.status(500).body("No candidate found");
        }
    }

    public ResponseEntity<?> deleteCandidate(long id){
        try{
            Candidate candidate = candidateRepository.findById(id).get();
            candidateRepository.deleteById(id);
            return ResponseEntity.ok("Candidate Deleted Successfully");
        }catch (Exception ex){
            return ResponseEntity.status(500).body("No candidate found");
        }
    }
}
