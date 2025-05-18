package com.example.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.Models.AdminModel;


public interface AdminRepo extends JpaRepository <AdminModel, Long>  {}