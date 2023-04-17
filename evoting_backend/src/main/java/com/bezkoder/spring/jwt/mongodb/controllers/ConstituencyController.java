package com.bezkoder.spring.jwt.mongodb.controllers;

import com.bezkoder.spring.jwt.mongodb.dto.ConstituencyDTO;
import com.bezkoder.spring.jwt.mongodb.models.Constituency;
import com.bezkoder.spring.jwt.mongodb.repository.ConstituencyRepository;
import com.bezkoder.spring.jwt.mongodb.services.ConstituencyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("api/test/admin")
public class ConstituencyController {

    @Autowired
    private ConstituencyService constituencyService;
    @Autowired
    private ConstituencyRepository constituencyRepository;

    @PostMapping("constituency/addConstituency")
    public ResponseEntity<?> addConstituency(@RequestBody ConstituencyDTO constituency){
        return constituencyService.addConstituency(constituency);
    }

    @GetMapping("constituency/getConstituencyFromState/{statename}")
    public ResponseEntity<?> getConstituencyFromState(@PathVariable("statename") String statename){
        return constituencyService.getConstituencyFromState(statename);
    }
    @GetMapping("constituency/getAllConstituency")
    public List<Constituency> getAllConstituency(){
        return constituencyRepository.findAll();
    }
}
