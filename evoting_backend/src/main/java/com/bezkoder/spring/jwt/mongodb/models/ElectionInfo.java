package com.bezkoder.spring.jwt.mongodb.models;

import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

public class ElectionInfo {

    public Date electionStartingDate = new Date();
    public Date electionEndingDate = new Date();
    public Date registrationStartingDate = new Date();
    public Date registrationEndingDate = new Date();
}
