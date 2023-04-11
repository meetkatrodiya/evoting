package com.bezkoder.spring.jwt.mongodb.services;

import com.bezkoder.spring.jwt.mongodb.dto.PartyDTO;
import com.bezkoder.spring.jwt.mongodb.helper.FileUploadHelper;
import com.bezkoder.spring.jwt.mongodb.models.Party;
import com.bezkoder.spring.jwt.mongodb.repository.CandidateRepository;
import com.bezkoder.spring.jwt.mongodb.repository.PartyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.nio.file.Paths;
import java.util.Base64;
import java.util.List;

@Service
public class PartyService {
    @Autowired
    private PartyRepository partyRepository;

    @Autowired
    private FileUploadHelper fileUploadHelper;

    @Autowired
    private CandidateRepository candidateRepository;

    public ResponseEntity<?> addParty(PartyDTO party, MultipartFile file) throws IOException {
        if(file.isEmpty()){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Request must contain file");
        }
        if(party.getPartyname() == null || party.getLeadername()==null){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Enter details");
        }
        if(!file.getContentType().equals("image/png")){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Only PNG content type is allowed");
        }
        boolean f = fileUploadHelper.uploadFile(file);
        Party p = new Party();
        List<Party> plist = partyRepository.findByOrderByIdDesc();
        if(plist.size() == 0){
            p.setId(1);
        }
        else{
            p.setId(plist.get(0).getId()+1);
        }
        p.setPartyname(party.getPartyname());
        p.setLeadername(party.getLeadername());
        if(f){
            String pathOfImage = Paths.get(fileUploadHelper.UPLOAD_DIR+ File.separator+file.getOriginalFilename()).toString();
            BufferedImage simage = ImageIO.read(new File(pathOfImage));
            ByteArrayOutputStream bytes = new ByteArrayOutputStream();
            ImageIO.write(simage,"png",bytes);
            String srs = Base64.getEncoder().encodeToString(bytes.toByteArray());
            p.setPartylogo(srs);
            partyRepository.insert(p);
            return ResponseEntity.status(HttpStatus.ACCEPTED).body("Party Successfully Added");
        }
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Something went wrong!!");

    }
    public List<Party> getAllParty(){
        return partyRepository.findAll();
    }

    public ResponseEntity<?> deleteParty(int id){
        Party p = partyRepository.findById(id).get();
        if(p == null){
            return ResponseEntity.status(500).body("Party does not exist");
        }
        candidateRepository.deleteCandidatesByParty(p);
        partyRepository.deleteById(id);
        return ResponseEntity.ok("Party and respective candidates are removed");
    }
}
