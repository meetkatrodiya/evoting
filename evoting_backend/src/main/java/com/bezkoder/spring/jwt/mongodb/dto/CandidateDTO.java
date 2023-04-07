package com.bezkoder.spring.jwt.mongodb.dto;

import com.bezkoder.spring.jwt.mongodb.models.Constituency;
import com.bezkoder.spring.jwt.mongodb.models.Party;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

public class CandidateDTO {
    private long adharid;
    private String name;
    private String city;
    private long mobileno;
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    private Date dob =new Date();
    private String constituency;
    private String party;

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

    public String getConstituency() {
        return constituency;
    }

    public void setConstituency(String constituency) {
        this.constituency = constituency;
    }

    public String getParty() {
        return party;
    }

    public void setParty(String party) {
        this.party = party;
    }
}
