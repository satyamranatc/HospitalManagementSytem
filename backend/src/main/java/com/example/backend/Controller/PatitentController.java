package com.example.backend.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.Models.PatientsModel;
import com.example.backend.Repository.PatientsRepo;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@CrossOrigin("*")
public class PatitentController {

    @Autowired
    PatientsRepo patientsRepo;


    @GetMapping("/api/patients/list")
    public List<PatientsModel> getPatients() {
        return patientsRepo.findAll();
    }

    @PostMapping("/api/patients/add")
    public PatientsModel addPatient(@RequestBody PatientsModel patient) {
        return patientsRepo.save(patient);
    }

    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @PutMapping("/api/patients/update/{id}")
    public PatientsModel updatePatient( @PathVariable Long id, @RequestBody PatientsModel patient) {
        PatientsModel patientToUpdate = patientsRepo.findById(id).get();
        patientToUpdate.setName(patient.getName());
        patientToUpdate.setAge(patient.getAge());
        patientToUpdate.setDiagnosis(patient.getDiagnosis());
        patientToUpdate.setDoctor(patient.getDoctor());
        patientToUpdate.setAdmitDate(patient.getAdmitDate());
        patientToUpdate.setContact(patient.getContact());
        patientToUpdate.setStatus(patient.getStatus());
        patientToUpdate.setImage(patient.getImage());
        return patientsRepo.save(patientToUpdate);
    }
    
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @DeleteMapping("/api/patients/delete/{id}")
    public void deletePatient(@PathVariable Long id) {
        System.out.println(id);
        patientsRepo.deleteById(id);
    }


}
