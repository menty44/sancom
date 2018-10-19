package com.sancom.expo.model;


/**
 * Created by admin on 10/19/18.
 */

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.GenericGenerator;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.util.UUID;

/**
 * Fredrick Oluoch
 * http://www.blaqueyard.com
 * 0720106420 | 0722508906
 * email: menty44@gmail.com
 */

@Entity
@Table(name = "applications")
@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties(value = {"createdAt", "updatedAt"},
        allowGetters = true)
public class Application {

    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(
            name = "UUID",
            strategy = "org.hibernate.id.UUIDGenerator"
    )
    private UUID id;

    private String job_code;

    private String applicant_fname;

    private String applicant_lname;

    private int experience;

    private String edulevel;

    private String job_title;

    private String applicant_uid;

    private String coverletter;

    private String cv;

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getJob_code() {
        return job_code;
    }

    public void setJob_code(String job_code) {
        this.job_code = job_code;
    }

    public String getApplicant_fname() {
        return applicant_fname;
    }

    public void setApplicant_fname(String applicant_fname) {
        this.applicant_fname = applicant_fname;
    }

    public String getApplicant_lname() {
        return applicant_lname;
    }

    public void setApplicant_lname(String applicant_lname) {
        this.applicant_lname = applicant_lname;
    }

    public int getExperience() {
        return experience;
    }

    public void setExperience(int experience) {
        this.experience = experience;
    }

    public String getEdulevel() {
        return edulevel;
    }

    public void setEdulevel(String edulevel) {
        this.edulevel = edulevel;
    }

    public String getJob_title() {
        return job_title;
    }

    public void setJob_title(String job_title) {
        this.job_title = job_title;
    }

    public String getApplicant_uid() {
        return applicant_uid;
    }

    public void setApplicant_uid(String applicant_uid) {
        this.applicant_uid = applicant_uid;
    }

    public String getCoverletter() {
        return coverletter;
    }

    public void setCoverletter(String coverletter) {
        this.coverletter = coverletter;
    }

    public String getCv() {
        return cv;
    }

    public void setCv(String cv) {
        this.cv = cv;
    }
}
