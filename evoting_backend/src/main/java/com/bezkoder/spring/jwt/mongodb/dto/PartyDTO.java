package com.bezkoder.spring.jwt.mongodb.dto;

public class PartyDTO {
    private String partyname;
    private String leadername;

    public PartyDTO() {
    }

    public PartyDTO(String partyname, String leadername) {
        this.partyname = partyname;
        this.leadername = leadername;
    }

    public String getPartyname() {
        return partyname;
    }

    public void setPartyname(String partyname) {
        this.partyname = partyname;
    }

    public String getLeadername() {
        return leadername;
    }

    public void setLeadername(String leadername) {
        this.leadername = leadername;
    }
}
