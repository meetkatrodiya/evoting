package com.bezkoder.spring.jwt.mongodb.repository;

import com.bezkoder.spring.jwt.mongodb.models.Candidate;
import com.bezkoder.spring.jwt.mongodb.models.Constituency;
import com.bezkoder.spring.jwt.mongodb.models.Party;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface CandidateRepository extends MongoRepository<Candidate,Long> {
    Boolean existsCandidateByAdharid(long adharid);
    Boolean existsCandidateByParty(Party p);
    Boolean existsCandidateByConstituency(Constituency c);

    List<Candidate> findCandidatesByConstituency(Constituency con);

    void deleteCandidatesByParty(Party p);
}
