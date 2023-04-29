package com.bezkoder.spring.jwt.mongodb.services;

import com.bezkoder.spring.jwt.mongodb.dto.PartyCountDTO;
import com.bezkoder.spring.jwt.mongodb.dto.PartyMaxVoteCountDTO;
import com.bezkoder.spring.jwt.mongodb.dto.StateVoteDTO;
import com.bezkoder.spring.jwt.mongodb.dto.VoteDTO;
import com.bezkoder.spring.jwt.mongodb.models.*;
import com.bezkoder.spring.jwt.mongodb.repository.CandidateRepository;
import com.bezkoder.spring.jwt.mongodb.repository.ConstituencyRepository;
import com.bezkoder.spring.jwt.mongodb.repository.StateRepository;
import com.bezkoder.spring.jwt.mongodb.repository.VoteRepository;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.*;
import java.util.function.Predicate;
import java.util.stream.Collectors;

import org.json.JSONObject;
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

    @Autowired
    private StateRepository stateRepository;

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
        if(voteList.size() == 0){
            return ResponseEntity.status(500).body("No vote");
        }
        try{
            for(int i=0; i<partylist.size(); i++){
                voteCount.put(partylist.get(i).getPartyname(), 0L);
            }
            for(int i=0; i<voteList.size(); i++){
                long oldCount = voteCount.get(voteList.get(i).getCandidate().getParty().getPartyname());
                long newCount = voteList.get(i).getVotecount() + oldCount;
                voteCount.replace(voteList.get(i).getCandidate().getParty().getPartyname(),newCount);
            }
//            JSONObject json = new JSONObject(voteCount);
//            System.out.println(json);
            List<String> partyList = new ArrayList<>();
           for(Map.Entry m:voteCount.entrySet()){
               partyList.add(m.getKey().toString());
           }
            PartyCountDTO partyCountDTO = new PartyCountDTO();
           partyCountDTO.voteCount = voteCount;
           partyCountDTO.partyList = partyList;
            return new ResponseEntity<>(partyCountDTO, HttpStatus.OK);
//            return new ResponseEntity<>(voteCount, HttpStatus.OK);
        }catch (Exception ex){
            return ResponseEntity.status(500).body("No voting done");
        }
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

    private Map<String,Long> candidateVoteCount(String constituency){
        Map<String,Long> voteCount = new HashMap<String,Long>();
        List<Vote> voteList = voteRepository.findAll();
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
        return voteCount;
    }
    public ResponseEntity<?> countCandidateVoteConstituencyWise(String constituency){
        System.out.println(constituency);
        if(constituency == null){
            return ResponseEntity.status(500).body("constituency is not provided");
        }
//            Map<String,Long> voteCount = new HashMap<String,Long>();
//            List<Vote> voteList = voteRepository.findAll();

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
//        System.out.println(voteList.size());
//            for(int i=0; i<voteList.size(); i++){
//                String temp = voteList.get(i).getCandidate().getConstituency().getConstituencyname();
//                System.out.println(temp + " " + constituency);
//                System.out.println(temp.equals(constituency));
//                if(temp.equals(constituency))
//                {
//                    System.out.println("here");
//                    voteCount.put(voteList.get(i).getCandidate().getName(),voteList.get(i).getVotecount());
//                }
//            }
        Map<String,Long> voteCount = new HashMap<String,Long>();
        voteCount = candidateVoteCount(constituency);
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

    public ResponseEntity<?> winnerCandidate(){
        List<Candidate> winnerList = new ArrayList<Candidate>();
        List<Vote> voteList = voteRepository.findAll();
        List<Constituency> constituencyList = constituencyRepository.findAll();
        try {
            for (int i = 0; i < constituencyList.size(); i++) {
                long maxVote = 0;
                Candidate temp = new Candidate();

                for (int j = 0; j < voteList.size(); j++) {

                    if (constituencyList.get(i).getConstituencyname().equals(voteList.get(j).getCandidate().getConstituency().getConstituencyname())) {

                        if (voteList.get(j).getVotecount() > maxVote) {

                            maxVote = voteList.get(j).getVotecount();

                            temp = voteList.get(j).getCandidate();
                        }
                    }
                }
                winnerList.add(temp);
            }
            System.out.println(winnerList.size());
//        Map<String,Long> candidateVote = candidateVoteCount()
            return new ResponseEntity<>(winnerList, HttpStatus.OK);
        }catch (Exception e){
            return ResponseEntity.internalServerError().body("Not found");
        }
    }

    public ResponseEntity<?> statePartyCount(){
        List<StateVoteDTO> svd = new ArrayList<>();

        List<State> stateList = stateRepository.findAll();
        List<Vote> voteList = voteRepository.findAll();

        for(int i=0; i<stateList.size(); i++){
            int finalI = i;
            HashMap<String,String> party = new HashMap<>();
            Integer cnt = 0;
            Long count = voteList.stream().filter(vote -> {
                if(vote.getCandidate().getConstituency().getState().getStatename().equals(stateList.get(finalI).getStatename())){
                    party.put(vote.getCandidate().getParty().getPartyname(),vote.getCandidate().getParty().getPartyname());
                    return true;
                }
                else{
                    return false;
                }
            }).count();
            StateVoteDTO temp = new StateVoteDTO();
            temp.statename = stateList.get(i).getStatename();

            List<PartyMaxVoteCountDTO> pmvdList = new ArrayList<>();
            for(int j=0; j<party.size(); j++){
                PartyMaxVoteCountDTO pmvd = new PartyMaxVoteCountDTO();
                pmvd.partyname = (String) party.values().toArray()[j];
                System.out.println(pmvd.partyname);
                List<Vote> tempList = voteList.stream().filter(vote -> {
                    if(vote.getCandidate().getParty().getPartyname().equals(pmvd.partyname) && vote.getCandidate().getConstituency().getState().getStatename().equals(temp.statename)){
                        return true;
                    }
                    else{
                        return false;
                    }
                }).collect(Collectors.toList());
                System.out.println(tempList.size());
                long votecount = 0;
                if(tempList.size() == 1) {
                    pmvd.count = tempList.get(0).getVotecount();
                }

                else{
                    for(int k=0; k<tempList.size(); k++){
//                        System.out.println(tempList.get(i));
                        votecount += tempList.get(k).getVotecount();
                    }
                    pmvd.count = votecount;
                }
                pmvdList.add(pmvd);
            }
            temp.partycount = pmvdList;
            svd.add(temp);

        }
//        System.out.println(party);
        return new ResponseEntity<>(svd,HttpStatus.OK);
    }
}
