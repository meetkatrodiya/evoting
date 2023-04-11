package com.bezkoder.spring.jwt.mongodb.controllers;

import com.bezkoder.spring.jwt.mongodb.dto.CandidateDTO;
import com.bezkoder.spring.jwt.mongodb.models.Candidate;
import com.bezkoder.spring.jwt.mongodb.services.CandidateService;
import org.springframework.beans.factory.annotation.Autowired;
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

//    @PreAuthorize("candidate/addCandidate")
    @PostMapping("candidate/addCandidate")
    public ResponseEntity<?> addCandidate(@RequestBody CandidateDTO candidate){
        return candidateService.addCandidate(candidate);
    }

    @GetMapping("candidate/getCandidate/{constituency}")
    public ResponseEntity<?> getCandidate(@PathVariable("constituency") String constituency){
        return candidateService.getCandidate(constituency);
    }

    @PutMapping("candidate/updateCandidate")
    public ResponseEntity<?> updateCandidate(@RequestBody CandidateDTO candidate){
        return candidateService.updateCandidate(candidate);
    }
}
