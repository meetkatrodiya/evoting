package com.bezkoder.spring.jwt.mongodb.controllers;

import com.bezkoder.spring.jwt.mongodb.dto.PartyDTO;
import com.bezkoder.spring.jwt.mongodb.models.Party;
import com.bezkoder.spring.jwt.mongodb.repository.PartyRepository;
import com.bezkoder.spring.jwt.mongodb.services.PartyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin(origins = "*",maxAge = 3600)
@RequestMapping("api/test/admin")
public class PartyController {
    @Autowired
    private PartyService partyService;

    @PostMapping("party/addParty")
    public ResponseEntity<?> addParty(@Valid PartyDTO party, @RequestParam("partylogo")MultipartFile file) throws IOException {
        return partyService.addParty(party,file);
    }

    @DeleteMapping("party/deleteParty/{id}")
    public ResponseEntity<?> deleteParty(@PathVariable("id") int id){
        return partyService.deleteParty(id);
    }

    @GetMapping("party/getAllParty")
    public List<Party> getAllParty(){
        return partyService.getAllParty();
//        return new ResponseEntity<>(parties, HttpStatus.OK);
//        return ResponseEntity.ok(parties);
    }
}
