package com.bezkoder.spring.jwt.mongodb.repository;

import com.bezkoder.spring.jwt.mongodb.models.Constituency;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ConstituencyRepository extends MongoRepository<Constituency, Integer> {

    List<Constituency> findByOrderByIdDesc();
    Constituency findConstituencyByConstituencyname(String constituencyname);
    Boolean existsConstituencyByConstituencyname(String constituencyname);
}
