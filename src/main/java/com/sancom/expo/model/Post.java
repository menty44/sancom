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
@Table(name = "jobs_post")
@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties(value = {"createdAt", "updatedAt"},
        allowGetters = true)
public class Post {

    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(
            name = "UUID",
            strategy = "org.hibernate.id.UUIDGenerator"
    )
    private UUID id;

    private String jobtitle;

    private String description;

    private String cattype;

    private int years_of_experience;

    private String status;

    private String interview_date;

    private String passinterview_start_time;

    private String interview_end_time;

    private String posted_by;

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getJobtitle() {
        return jobtitle;
    }

    public void setJobtitle(String jobtitle) {
        this.jobtitle = jobtitle;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCattype() {
        return cattype;
    }

    public void setCattype(String cattype) {
        this.cattype = cattype;
    }

    public int getYears_of_experience() {
        return years_of_experience;
    }

    public void setYears_of_experience(int years_of_experience) {
        this.years_of_experience = years_of_experience;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getInterview_date() {
        return interview_date;
    }

    public void setInterview_date(String interview_date) {
        this.interview_date = interview_date;
    }

    public String getPassinterview_start_time() {
        return passinterview_start_time;
    }

    public void setPassinterview_start_time(String passinterview_start_time) {
        this.passinterview_start_time = passinterview_start_time;
    }

    public String getInterview_end_time() {
        return interview_end_time;
    }

    public void setInterview_end_time(String interview_end_time) {
        this.interview_end_time = interview_end_time;
    }

    public String getPosted_by() {
        return posted_by;
    }

    public void setPosted_by(String posted_by) {
        this.posted_by = posted_by;
    }
}
