package com.bezkoder.spring.jwt.mongodb.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

public class Candidate {
    @Id
    private long adharid;
    private String name;
    private String city;
    private long mobileno;
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    private Date dob =new Date();

    @DBRef
    private Constituency constituency;

    @DBRef
    private Party party;

    public Candidate() {
    }

    public Candidate(long adharid, String name, String city, long mobileno, Date dob, Constituency constituency, Party party) {
        this.adharid = adharid;
        this.name = name;
        this.city = city;
        this.mobileno = mobileno;
        this.dob = dob;
        this.constituency = constituency;
        this.party = party;
    }

    public long getAdharid() {
        return adharid;
    }

    public void setAdharid(long adharid) {
        this.adharid = adharid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public long getMobileno() {
        return mobileno;
    }

    public void setMobileno(long mobileno) {
        this.mobileno = mobileno;
    }

    public Date getDob() {
        return dob;
    }

    public void setDob(Date dob) {
        this.dob = dob;
    }

    public Constituency getConstituency() {
        return constituency;
    }

    public void setConstituency(Constituency constituency) {
        this.constituency = constituency;
    }

    public Party getParty() {
        return party;
    }

    public void setParty(Party party) {
        this.party = party;
    }
}
