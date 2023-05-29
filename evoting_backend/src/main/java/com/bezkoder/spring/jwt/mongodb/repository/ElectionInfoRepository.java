package com.bezkoder.spring.jwt.mongodb.repository;

import com.bezkoder.spring.jwt.mongodb.models.ElectionInfo;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ElectionInfoRepository extends MongoRepository<ElectionInfo,String> {
}
