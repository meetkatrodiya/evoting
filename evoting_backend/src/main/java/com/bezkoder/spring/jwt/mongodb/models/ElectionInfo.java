package com.bezkoder.spring.jwt.mongodb.models;

import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.Date;

public class ElectionInfo {

    public LocalDateTime electionStartingDate;
    public LocalDateTime electionEndingDate;
    public LocalDateTime registrationStartingDate;
    public LocalDateTime registrationEndingDate;

    public LocalDateTime resultDate;
}
