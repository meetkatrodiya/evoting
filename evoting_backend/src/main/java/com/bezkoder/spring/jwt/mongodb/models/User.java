package com.bezkoder.spring.jwt.mongodb.models;

import java.util.HashSet;
import java.util.Set;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "voters")
public class User {
  @Id
  private String id;

  @NotBlank
  @Size(max = 20)
  private String voterid;

  @NotBlank
  @Size(max= 12)
  private String adharid;

  @NotBlank
  @Size(max = 50)
  @Email
  private String email;

  @NotBlank
  @Size(max = 120)
  private String password;

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
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

  public void setAdharid(String adharid) {
    this.adharid = adharid;
  }

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

  public Set<Role> getRoles() {
    return roles;
  }

  public void setRoles(Set<Role> roles) {
    this.roles = roles;
  }

  public User(String id, String voterid, String adharid, String email, String password, Set<Role> roles) {
    this.id = id;
    this.voterid = voterid;
    this.adharid = adharid;
    this.email = email;
    this.password = password;
    this.roles = roles;
  }

  public User( String voterid, String adharid, String email, String password) {

    this.voterid = voterid;
    this.adharid = adharid;
    this.email = email;
    this.password = password;

  }


  @DBRef
  private Set<Role> roles = new HashSet<>();

  public User() {
  }


}
