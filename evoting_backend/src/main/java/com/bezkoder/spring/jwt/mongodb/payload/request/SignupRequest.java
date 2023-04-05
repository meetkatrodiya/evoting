package com.bezkoder.spring.jwt.mongodb.payload.request;

import java.util.Set;

import javax.validation.constraints.*;
 
public class SignupRequest {
    @NotBlank
    @Size(min = 3, max = 20)
    private String voterid;

    @NotBlank
    @Size(min= 12,max=12)
    private String adharid;
 
    @NotBlank
    @Size(max = 50)
    @Email
    private String email;
    
    private Set<String> roles;


    @NotBlank
    @Size(min = 6, max = 40)
    private String password;
  

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

    public String getAdharid() {
        return adharid;
    }

    public Set<String> getRoles() {
        return roles;
    }

    public void setAdharid(String adharid) {
        this.adharid = adharid;
    }

    public void setRoles(Set<String> roles) {
        this.roles = roles;
    }

}
