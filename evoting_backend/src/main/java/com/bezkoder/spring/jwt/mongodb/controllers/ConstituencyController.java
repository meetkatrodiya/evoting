package com.bezkoder.spring.jwt.mongodb.controllers;

import com.bezkoder.spring.jwt.mongodb.dto.ConstituencyDTO;
import com.bezkoder.spring.jwt.mongodb.services.ConstituencyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("api/test/admin")
public class ConstituencyController {

    @Autowired
    private ConstituencyService constituencyService;

    @PostMapping("constituency/addConstituency")
    public ResponseEntity<?> addConstituency(@RequestBody ConstituencyDTO constituency){
        return constituencyService.addConstituency(constituency);
    }
}
