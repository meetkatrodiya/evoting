package com.bezkoder.spring.jwt.mongodb.payload.request;

import com.bezkoder.spring.jwt.mongodb.models.Constituency;
import org.springframework.data.mongodb.core.mapping.DBRef;

import java.util.Set;

import javax.validation.constraints.*;
 
public class SignupRequest {
    @NotBlank
    @Size(min = 3, max = 20)
    private String voterid;

    private long adharid;
 
    @NotBlank
    @Size(max = 50)
    @Email
    private String email;
    
    private Set<String> roles;


    @NotBlank
    @Size(min = 6, max = 40)
    private String password;
  
    //added
    @NotBlank
    private String name;

//    @NotBlank
//    @DBRef
//    private Constituency constituency;
    @NotBlank
    private String constituency;
    public String getEmail() {
        return email;
    }
 
    public void setEmail(String email) {
        this.email = email;
    }
 
    public String getPassword() {
        return password;
    }
 
    public void setPassword(String password) {
        this.password = password;
    }
    

    public String getVoterid() {
        return voterid;
    }

    public void setVoterid(String voterid) {
        this.voterid = voterid;
    }

    public long getAdharid() {
        return adharid;
    }

    public Set<String> getRoles() {
        return roles;
    }

    public void setAdharid(long adharid) {
        this.adharid = adharid;
    }

    public void setRoles(Set<String> roles) {
        this.roles = roles;
    }

    public String getName() {return name;}

    public void setName(String name) {this.name = name;}

//    public Constituency getConstituency(){return  constituency;}
//    public void setConstituency(Constituency constituency) {this.constituency = constituency;}
    public String getConstituency() {return constituency;}
    public void setConstituency(String constituency) {this.constituency = constituency;}

}
