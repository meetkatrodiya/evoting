package com.bezkoder.spring.jwt.mongodb.dto;

public class ConstituencyDTO {
    private String constituencyname;
    private String statename;

    public String getConstituencyname() {
        return constituencyname;
    }

    public void setConstituencyname(String constituencyname) {
        this.constituencyname = constituencyname;
    }

    public String getStatename() {
        return statename;
    }

    public void setStatename(String statename) {
        this.statename = statename;
    }
}
