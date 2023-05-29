package com.bezkoder.spring.jwt.mongodb.controllers;

import com.bezkoder.spring.jwt.mongodb.models.ElectionInfo;
import com.bezkoder.spring.jwt.mongodb.repository.ElectionInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.TimeZone;

@RestController
@CrossOrigin(origins = "*",maxAge = 3600)
@RequestMapping("api/test/admin")
public class ElectionInfoController {

    @Autowired
    private ElectionInfoRepository electionInfoRepository;
    @PostMapping("launchElection")
    public ResponseEntity<?> launchElection(@RequestBody ElectionInfo electionInfo){
        if(electionInfo == null){
            return ResponseEntity.internalServerError().body("Enter date");
        }
//        if(electionInfo.registrationStartingDate.compareTo(electionInfo.registrationEndingDate)>=0 &&   electionInfo.registrationEndingDate.compareTo(electionInfo.electionStartingDate) >=0 && electionInfo.electionStartingDate.compareTo(electionInfo.electionEndingDate) >= 0 && electionInfo.electionEndingDate.compareTo(electionInfo.resultDate) >= 0){
        if(electionInfo.registrationStartingDate.compareTo(electionInfo.registrationEndingDate) <= 0 &&   electionInfo.registrationEndingDate.compareTo(electionInfo.electionStartingDate) <= 0 && electionInfo.electionStartingDate.compareTo(electionInfo.electionEndingDate) <= 0 && electionInfo.electionEndingDate.compareTo(electionInfo.resultDate) <= 0){
            electionInfoRepository.save(electionInfo);
            return ResponseEntity.ok("Election Launched Successfully!!");
        }
        return ResponseEntity.internalServerError().body("Date must be in Order");
    }

    @GetMapping("checkRegistrationStart")
    public LocalDateTime checkRegistrationStart(){
        List<ElectionInfo> list = electionInfoRepository.findAll();
//        ElectionInfo electionInfo = electionInfoRepository.findById("644dd401fff1124212983a09").get();
//        DateFormat formatter = new SimpleDateFormat("dd-MM-yyyy HH:mm:ss");
//        formatter.setTimeZone(TimeZone.getTimeZone("Asia/Kolkata"));
//        System.out.println((electionInfo.registrationStartingDate));
//        return electionInfo.registrationStartingDate;
//        return electionInfo.registrationStartingDate;
        try {
            ElectionInfo electionInfo = list.get(0);
            return electionInfo.registrationStartingDate;
        }
        catch (Exception e){
            return null;
        }
    }
    @GetMapping("checkRegistrationEnd")
    public LocalDateTime checkRegistrationEnd(){
        List<ElectionInfo> list = electionInfoRepository.findAll();
        try {
            ElectionInfo electionInfo = list.get(0);
            return electionInfo.registrationEndingDate;
        }
        catch (Exception e){
            return null;
        }
    }
    @GetMapping("checkElectionStart")
    public LocalDateTime checkElectionStart(){
        List<ElectionInfo> list = electionInfoRepository.findAll();
        try {
            ElectionInfo electionInfo = list.get(0);
            return electionInfo.electionStartingDate;
        }
        catch (Exception e){
            return null;
        }
    }
    @GetMapping("checkElectionEnd")
    public LocalDateTime checkElectionEnd(){
        List<ElectionInfo> list = electionInfoRepository.findAll();
        try {
            ElectionInfo electionInfo = list.get(0);
            return electionInfo.electionEndingDate;
        }
        catch (Exception e){
            return null;
        }
    }
    @GetMapping("checkResult")
    public LocalDateTime checkResult(){
        List<ElectionInfo> list = electionInfoRepository.findAll();
        try {
            ElectionInfo electionInfo = list.get(0);
            return electionInfo.resultDate;
        }
        catch (Exception e){
            return null;
        }
    }
    @GetMapping("GetInfo")
    public ResponseEntity<?> getInfo(){
        List<ElectionInfo> list = electionInfoRepository.findAll();
        if(list.size() == 0){
            return null;
        }

        ElectionInfo electionInfo = list.get(0);
        return new ResponseEntity<>(electionInfo, HttpStatus.OK);
    }

}
