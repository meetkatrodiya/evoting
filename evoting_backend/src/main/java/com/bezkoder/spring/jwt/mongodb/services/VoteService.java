package com.bezkoder.spring.jwt.mongodb.services;

import com.bezkoder.spring.jwt.mongodb.dto.VoteDTO;
import com.bezkoder.spring.jwt.mongodb.models.Candidate;
import com.bezkoder.spring.jwt.mongodb.models.Constituency;
import com.bezkoder.spring.jwt.mongodb.models.Party;
import com.bezkoder.spring.jwt.mongodb.models.Vote;
import com.bezkoder.spring.jwt.mongodb.repository.CandidateRepository;
import com.bezkoder.spring.jwt.mongodb.repository.ConstituencyRepository;
import com.bezkoder.spring.jwt.mongodb.repository.VoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.*;

@Service
public class VoteService {
    @Autowired
    private VoteRepository voteRepository;

    @Autowired
    private CandidateRepository candidateRepository;

    @Autowired
    private ConstituencyRepository constituencyRepository;

    @Autowired
    private PartyService partyService;
    public ResponseEntity<?> addVote(VoteDTO vote){
        if(vote == null){
            return ResponseEntity.status(500).body("Not valid details found");
        }
       try{
           Candidate candidate = candidateRepository.findById(vote.getAdharid()).get();
           if(candidate == null){
               return ResponseEntity.status(500).body("Not valid details found");
           }
           Vote v = new Vote();
           List<Vote> vlist = voteRepository.findByOrderByIdDesc();

           if(vlist.size() == 0){
               v.setId(1);
           }
           else{
               v.setId(vlist.get(0).getId()+1);
           }
           if(voteRepository.existsVoteByCandidate(candidate)){
               Vote temp = voteRepository.findVoteByCandidate(candidate);
               temp.setVotecount(temp.getVotecount()+1);
               voteRepository.save(temp);
           }
           else{
               v.setCandidate(candidate);
               v.setVotecount(1);
               voteRepository.save(v);
           }

           return ResponseEntity.ok("Thanks!! for vote...");
       }catch (Exception e){
           return ResponseEntity.status(500).body("Candidate not found");
       }

    }

    public ResponseEntity<?> countPartyVote(){
        Map<String,Long> voteCount = new HashMap<String,Long>();
        List<Party> partylist = partyService.getAllParty();
        List<Vote> voteList = voteRepository.findAll();
        for(int i=0; i<partylist.size(); i++){
            voteCount.put(partylist.get(i).getPartyname(), 0L);
        }
        for(int i=0; i<voteList.size(); i++){
            long oldCount = voteCount.get(voteList.get(i).getCandidate().getParty().getPartyname());
            long newCount = voteList.get(i).getVotecount() + oldCount;
            voteCount.replace(voteList.get(i).getCandidate().getParty().getPartyname(),newCount);
        }
        return new ResponseEntity<>(voteCount, HttpStatus.OK);
    }
    public ResponseEntity<?> countConstituencyVote(){

        Map<String,Map<String,Long>> voteCount = new HashMap<String,Map<String,Long>>();
        List<Vote> voteList = voteRepository.findAll();

        for(int i=0; i<voteList.size(); i++){
            Map<String,Long> partyList = new  HashMap<String,Long>();
            String temp1 = voteList.get(i).getCandidate().getConstituency().getConstituencyname();
            for(int j=i; j<voteList.size(); j++){
                String temp2 = voteList.get(j).getCandidate().getConstituency().getConstituencyname();
                if(temp1.equals(temp2)){
                    if(partyList.containsKey(voteList.get(j).getCandidate().getParty().getPartyname())){
                        continue;
                    }
                    partyList.put(voteList.get(j).getCandidate().getParty().getPartyname(),voteList.get(j).getVotecount());
                }
            }
            if(voteCount.containsKey(voteList.get(i).getCandidate().getConstituency().getConstituencyname())){
//                    partyList.put(voteList.get(i).getCandidate().getParty().getPartyname(),voteList.get(i).getVotecount());
                continue;
            }
            else{
                voteCount.put(voteList.get(i).getCandidate().getConstituency().getConstituencyname(),partyList);
            }
        }

        return new ResponseEntity<>(voteCount,HttpStatus.OK);
//        Map<String,Map<String,Long>> voteCount = new HashMap<String,Map<String,Long>>();
//        List<Party> partylist = partyService.getAllParty();
//        List<Constituency> constituencyList = constituencyRepository.findAll();
//        System.out.println(constituencyList.size());
//        List<Vote> voteList = voteRepository.findAll();
//        System.out.println(voteList);
//        for(int i=0; i<constituencyList.size(); i++){
//            Map<String,Long> partyMap = new HashMap<String,Long>();
//            for(int j=0; j<partylist.size(); j++){
//                partyMap.put(partylist.get(j).getPartyname(),0L);
//            }
//            voteCount.put(constituencyList.get(i).getConstituencyname(),partyMap);
//        }
//        for(int i=0; i<constituencyList.size(); i++){
//            Map<String,Long> partyMap = new HashMap<String,Long>();
//            for(int j=0; j<voteList.size(); j++){
//                long count = partyMap.get(voteList.get(j).getCandidate().getParty().getPartyname());
//                long newCount = voteList.get(i).getVotecount();
//                partyMap.replace(voteList.get(j).getCandidate().getParty().getPartyname(),newCount);
//            }
//            voteCount.replace(constituencyList.get(i).getConstituencyname(),partyMap);
//        }
//        return new ResponseEntity<>(voteCount,HttpStatus.OK);
    }

    public ResponseEntity<?> countCandidateVoteConstituencyWise(String constituency){
        System.out.println(constituency);
        if(constituency == null){
            return ResponseEntity.status(500).body("constituency is not provided");
        }
            Map<String,Long> voteCount = new HashMap<String,Long>();
            List<Vote> voteList = voteRepository.findAll();

//            for(int i=0; i<voteList.size(); i++){
//                Map<String,Long> partyList = new  HashMap<String,Long>();
//                for(int j=i; j<voteList.size() ;j++){
//
//                }
//                if(voteCount.containsKey(voteList.get(i).getCandidate().getConstituency().getConstituencyname())){
//                    partyList.put(voteList.get(i).getCandidate().getParty().getPartyname(),voteList.get(i).getVotecount());
//                }
//                else{
//                    voteCount.put()
//                }
//            }
        System.out.println(voteList.size());
            for(int i=0; i<voteList.size(); i++){
                String temp = voteList.get(i).getCandidate().getConstituency().getConstituencyname();
                System.out.println(temp + " " + constituency);
                System.out.println(temp.equals(constituency));
                if(temp.equals(constituency))
                {
                    System.out.println("here");
                    voteCount.put(voteList.get(i).getCandidate().getName(),voteList.get(i).getVotecount());
                }
            }
            return new ResponseEntity<>(voteCount,HttpStatus.OK);
    }
    public ResponseEntity<?> countCandidateVote(){
        Map<String,Long> voteCount = new HashMap<String,Long>();
        List<Vote> voteList = voteRepository.findAll();
        for(int i=0; i<voteList.size(); i++){
            voteCount.put(voteList.get(i).getCandidate().getName(),voteList.get(i).getVotecount());
        }
        return new ResponseEntity<>(voteCount,HttpStatus.OK);
    }
}
