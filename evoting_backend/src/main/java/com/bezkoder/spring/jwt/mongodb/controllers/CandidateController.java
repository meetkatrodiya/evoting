package com.bezkoder.spring.jwt.mongodb.controllers;

import com.bezkoder.spring.jwt.mongodb.dto.CandidateDTO;
import com.bezkoder.spring.jwt.mongodb.models.Candidate;
import com.bezkoder.spring.jwt.mongodb.repository.CandidateRepository;
import com.bezkoder.spring.jwt.mongodb.services.CandidateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*",maxAge = 3600)
@RequestMapping("api/test/admin")
public class CandidateController {
    @Autowired
    private CandidateService candidateService;

    @Autowired
    private CandidateRepository candidateRepository;

//    @PreAuthorize("candidate/addCandidate")
    @PostMapping("candidate/addCandidate")
    public ResponseEntity<?> addCandidate(@RequestBody CandidateDTO candidate){
        return candidateService.addCandidate(candidate);
    }

    @GetMapping("candidate/getCandidate/{constituency}")
    public ResponseEntity<?> getCandidate(@PathVariable("constituency") String constituency){
        return candidateService.getCandidate(constituency);
    }

    @PutMapping("" +
            "")
    public ResponseEntity<?> updateCandidate(@RequestBody CandidateDTO candidate){
        return candidateService.updateCandidate(candidate);
    }

    @GetMapping("candidate/getAllCandidate")
    public ResponseEntity<?> getAllCandidate(){
        return new ResponseEntity<>(candidateRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping("candidate/getCandidateFromId/{id}")
    public ResponseEntity<?> getCandidate(@PathVariable("id") long id){
        return candidateService.getCandidateFromId(id);
    }

    @DeleteMapping("candidate/deleteCandidate/{id}")
    public ResponseEntity<?> deleteCandidate(@PathVariable("id") long id){
        return candidateService.deleteCandidate(id);
    }
}
