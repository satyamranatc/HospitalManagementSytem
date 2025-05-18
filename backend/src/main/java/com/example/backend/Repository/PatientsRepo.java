package com.example.backend.Repository;

import com.example.backend.Models.PatientsModel;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PatientsRepo extends JpaRepository<PatientsModel, Long> {}
