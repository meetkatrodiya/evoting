package com.bezkoder.spring.jwt.mongodb.repository;

import com.bezkoder.spring.jwt.mongodb.models.Candidate;
import com.bezkoder.spring.jwt.mongodb.models.Vote;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface VoteRepository extends MongoRepository<Vote,Integer> {
    Boolean existsVoteByCandidate(Candidate candidate);
    List<Vote> findByOrderByIdDesc();
    Vote findVoteByCandidate(Candidate candidate);

}
