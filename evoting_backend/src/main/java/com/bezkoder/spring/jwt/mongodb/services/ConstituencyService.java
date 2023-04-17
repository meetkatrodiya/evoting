package com.bezkoder.spring.jwt.mongodb.services;

import com.bezkoder.spring.jwt.mongodb.dto.ConstituencyDTO;
import com.bezkoder.spring.jwt.mongodb.models.Constituency;
import com.bezkoder.spring.jwt.mongodb.models.State;
import com.bezkoder.spring.jwt.mongodb.repository.ConstituencyRepository;
import com.bezkoder.spring.jwt.mongodb.repository.StateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ConstituencyService {
    @Autowired
    private ConstituencyRepository constituencyRepository;

    @Autowired
    private StateRepository stateRepository;

    public ResponseEntity<?> addConstituency(ConstituencyDTO constituency){
        if(constituency == null){
            return ResponseEntity.noContent().build();
        }
        if(constituency.getStatename() == null){
            return  ResponseEntity.noContent().build();
        }
        State st = stateRepository.findByStatename(constituency.getStatename());
        if(st != null){
            Constituency con = new Constituency();
            List<Constituency> clist = constituencyRepository.findByOrderByIdDesc();
            con.setState(st);
            con.setConstituencyname(constituency.getConstituencyname());
            if(clist.size() == 0){
                con.setId(1);
                constituencyRepository.save(con);
            }
            else {
                con.setId(clist.get(0).getId()+1);
                constituencyRepository.save(con);
            }
            return ResponseEntity.ok("Constituency added successfully");
        }
        else{
            return ResponseEntity.internalServerError().body("Something went wrong");
        }

    }
    public ResponseEntity<?> getConstituencyFromState(String statename){
        if(statename == null){
            return ResponseEntity.status(500).body("No state found");
        }
        State s = stateRepository.findByStatename(statename);
        if(s == null){
            return ResponseEntity.status(500).body("No state found");
        }
        List<Constituency> clist = constituencyRepository.findConstituenciesByState(s);
        return new ResponseEntity<>(clist, HttpStatus.OK);
    }
}
