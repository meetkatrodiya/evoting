package com.bezkoder.spring.jwt.mongodb.controllers;

import com.bezkoder.spring.jwt.mongodb.dto.VoteDTO;
import com.bezkoder.spring.jwt.mongodb.models.Vote;
import com.bezkoder.spring.jwt.mongodb.services.VoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("api/test/admin")
public class VoteController {
    @Autowired
    private VoteService voteService;

    @PutMapping("vote/addVote")
    public ResponseEntity<?> addVote(@RequestBody VoteDTO vote){
        return voteService.addVote(vote);
    }

    @GetMapping("vote/countPartyVote")
    public ResponseEntity<?> countPartyVote(){
        return voteService.countPartyVote();
    }

    @GetMapping("vote/countConstituencyVote")
    public ResponseEntity<?> countConstituencyVote(){
        return voteService.countConstituencyVote();
    }

    @GetMapping("vote/countCandidateVoteConstituencywise/{constituency}")
    public ResponseEntity<?> countCandidateVoteConstituencyWise(@PathVariable("constituency") String constituency){
        return voteService.countCandidateVoteConstituencyWise(constituency);
    }
    @GetMapping("vote/countCandidateVote")
    public ResponseEntity<?> countCandidateVote(){
        return voteService.countCandidateVote();
    }

    @GetMapping("vote/winnerCandidate")
    public ResponseEntity<?> winnerCandidate(){
        return voteService.winnerCandidate();
    }

    @GetMapping("vote/statePartyCount")
    public ResponseEntity<?> statePartyCount(){
        return voteService.statePartyCount();
    }
}
