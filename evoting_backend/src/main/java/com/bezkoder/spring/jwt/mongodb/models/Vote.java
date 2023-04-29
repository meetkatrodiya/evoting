package com.bezkoder.spring.jwt.mongodb.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Vote {
    @Id
    private int id;

    @DBRef
    private Candidate candidate;

    private long votecount;

    public Vote() {
    }

    public Vote(int id, Candidate candidate, long votecount) {
        this.id = id;
        this.candidate = candidate;
        this.votecount = votecount;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Candidate getCandidate() {
        return candidate;
    }

    public void setCandidate(Candidate candidate) {
        this.candidate = candidate;
    }

    public long getVotecount() {
        return votecount;
    }

    public void setVotecount(long votecount) {
        this.votecount = votecount;
    }

}
