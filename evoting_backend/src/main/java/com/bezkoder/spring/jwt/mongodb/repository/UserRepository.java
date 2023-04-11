package com.bezkoder.spring.jwt.mongodb.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.bezkoder.spring.jwt.mongodb.models.User;

public interface UserRepository extends MongoRepository<User, String> {
  Optional<User> findByVoterid(String voterid);

  Boolean existsByVoterid(String voterid);

  Boolean existsByAdharid(long adharid);
  Boolean existsByEmail(String email);
}
