package com.example.backend.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class PatientsModel {

    private String name;
    private int age;
    private String diagnosis;
    private String doctor;
    private String admitDate;
    private String contact;
    private String status;
    private String image;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public PatientsModel() {
    }

    public PatientsModel(String name, int age, String diagnosis, String doctor, String admitDate, String contact,
            String status, String image) {
        this.name = name;
        this.age = age;
        this.diagnosis = diagnosis;
        this.doctor = doctor;
        this.admitDate = admitDate;
        this.contact = contact;
        this.status = status;
        this.image = image;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getDiagnosis() {
        return diagnosis;
    }

    public void setDiagnosis(String diagnosis) {
        this.diagnosis = diagnosis;
    }

    public String getDoctor() {
        return doctor;
    }

    public void setDoctor(String doctor) {
        this.doctor = doctor;
    }

    public String getAdmitDate() {
        return admitDate;
    }

    public void setAdmitDate(String admitDate) {
        this.admitDate = admitDate;
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

}
