package com.bezkoder.spring.jwt.mongodb.controllers;

import com.bezkoder.spring.jwt.mongodb.models.State;
import com.bezkoder.spring.jwt.mongodb.repository.StateRepository;
import com.bezkoder.spring.jwt.mongodb.services.StateServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("api/test/admin")
public class StateController {

    @Autowired
    private StateServices stateServices;

    @Autowired
    private StateRepository stateRepository;
    @GetMapping("/state/addState/{state}")
    public ResponseEntity<?> addState(@PathVariable("state") String state){
        return stateServices.addState(state);
    }

    @GetMapping("/getAllStates")
    public List<State> getAllStates(){
        List<State> states = stateRepository.findAll();
        return states;
    }
}
