package com.bezkoder.spring.jwt.mongodb.services;

import com.bezkoder.spring.jwt.mongodb.models.State;
import com.bezkoder.spring.jwt.mongodb.repository.StateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StateServices {

    @Autowired
    private StateRepository stateRepository;

    public ResponseEntity<?> addState(String state){
            try{
                List<State> st = stateRepository.findByOrderByIdDesc();
                if(st.size() == 0){
                    State s = new State(1,state);
                    stateRepository.save(s);
                }
                else{
                    State s = new State(st.get(0).getId()+1,state);
                    stateRepository.save(s);
                }
                return ResponseEntity.ok("State added successfully");
            }catch (Exception e){
                System.out.println(e);
                return ResponseEntity.status(500).body("Something went wrong");
            }
    }
}
