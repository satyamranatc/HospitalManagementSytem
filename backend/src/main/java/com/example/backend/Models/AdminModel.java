package com.example.backend.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class AdminModel {
    private String FullName;
    private String username;
    private String password;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public AdminModel(){}
    
    public AdminModel(String fullname, String username, String password) {
        this.FullName = fullname;
        this.username = username;
        this.password = password;
    }

    public String getFullName() {
        return FullName;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    
}
