package com.example.backend.Controller;

import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.backend.Models.AdminModel;
import com.example.backend.Repository.AdminRepo;

@RestController
@CrossOrigin("*")
public class AdminController {

    @Autowired
    AdminRepo adminRepo;

    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @PostMapping("/api/admin/login")
    public AdminModel login(@RequestBody AdminModel credentials) {
        String username = credentials.getUsername();
        String password = credentials.getPassword();


        List<AdminModel> admin = adminRepo.findAll();
        for (AdminModel a : admin) {
            if (a.getUsername().equals(username) && a.getPassword().equals(password)) {
                return a;
            }
        }
    
        return null;

    }

    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @PostMapping("/api/admin/signup")
    public AdminModel addAdmin(@RequestBody AdminModel admin) {
        return adminRepo.save(admin);
    }

}
