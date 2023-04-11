package com.bezkoder.spring.jwt.mongodb.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Constituency {
    @Id
    private int id;

    private String constituencyname;

    @DBRef
    private State state;

    public Constituency() {
    }

    public Constituency(int id, String constituencyname, State state) {
        this.id = id;
        this.constituencyname = constituencyname;
        this.state = state;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getConstituencyname() {
        return constituencyname;
    }

    public void setConstituencyname(String constituencyname) {
        this.constituencyname = constituencyname;
    }

    public State getState() {
        return state;
    }

    public void setState(State state) {
        this.state = state;
    }

    @Override
    public String toString() {
        return "Constituency{" +
                "id=" + id +
                ", constituencyname='" + constituencyname + '\'' +
                ", state=" + state +
                '}';
    }
}
