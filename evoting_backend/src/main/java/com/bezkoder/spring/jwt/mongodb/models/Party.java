package com.bezkoder.spring.jwt.mongodb.models;

import org.springframework.data.annotation.Id;

public class Party {

    @Id
    private int id;

    private String partyname;

    private String partylogo;
    private String leadername;

    @Override
    public String toString() {
        return "Party{" +
                "id=" + id +
                ", partyname='" + partyname + '\'' +
                ", leadername='" + leadername + '\'' +
                '}';
    }

    public Party() {
    }

    public Party(int id, String partyname, String partylogo, String leadername) {
        this.id = id;
        this.partyname = partyname;
        this.partylogo = partylogo;
        this.leadername = leadername;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getPartyname() {
        return partyname;
    }

    public void setPartyname(String partyname) {
        this.partyname = partyname;
    }

    public String getPartylogo() {
        return partylogo;
    }

    public void setPartylogo(String partylogo) {
        this.partylogo = partylogo;
    }

    public String getLeadername() {
        return leadername;
    }

    public void setLeadername(String leadername) {
        this.leadername = leadername;
    }
}
