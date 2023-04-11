package com.bezkoder.spring.jwt.mongodb.repository;

import com.bezkoder.spring.jwt.mongodb.models.Candidate;
import com.bezkoder.spring.jwt.mongodb.models.Party;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface PartyRepository extends MongoRepository<Party,Integer> {
    List<Party> findByOrderByIdDesc();
    Party findPartyByPartyname(String partyname);
    Boolean existsPartyByPartyname(String partyname);

}
