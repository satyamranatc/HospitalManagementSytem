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


    @GetMapping("/api/admin/login")
    public AdminModel login(@RequestParam String username, @RequestParam String password) {
        List<AdminModel> admin = adminRepo.findAll();
        for (int i = 0; i < admin.size(); i++) {
            if (admin.get(i).getUsername().equals(username)) {
                if (admin.get(i).getPassword().equals(password)) {
                    return admin.get(i);
                }
            }
        }
        return null;
       
    }


    @PostMapping("/api/admin/signup")
    public AdminModel addAdmin(@RequestBody AdminModel admin) {
        return adminRepo.save(admin);
    }
    
 
    
    
}
