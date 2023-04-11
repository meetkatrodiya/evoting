package com.bezkoder.spring.jwt.mongodb.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class State {

    @Id
    private int id;

    private String statename;

    public State(int id, String statename) {
        this.id = id;
        this.statename = statename;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getStatename() {
        return statename;
    }

    public void setStatename(String statename) {
        this.statename = statename;
    }

    @Override
    public String toString() {
        return "State{" +
                "id=" + id +
                ", statename='" + statename + '\'' +
                '}';
    }
}
