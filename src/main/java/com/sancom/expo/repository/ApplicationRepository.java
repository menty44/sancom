package com.sancom.expo.repository;


/**
 * Created by admin on 10/18/18.
 */

import com.sancom.expo.model.Application;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

/**
 * Fredrick Oluoch
 * http://www.blaqueyard.com
 * 0720106420 | 0722508906
 * email: menty44@gmail.com
 */

@Repository
public interface ApplicationRepository extends JpaRepository<Application, UUID> {

//    Application findByJob_code(String job_code);

//    String findByJob_code(String job_code);

    //Application findByApplicant_uid(String applicant_uid);

//    Employer findByUuid(UUID id);

    // Enables the distinct flag for the query
//    List<Jobseeker> findDistinctUserByEmailOrPassword(String email, String password);
//    List<Jobseeker> findUserDistinctByEmailOrPassword(String email, String password);

    // Enabling ignoring case for an individual property
//    List<Jobseeker> findByEmailIgnoreCase(String email);

    // Enabling ignoring case for all suitable properties
//    List<Jobseeker> findByEmailAndPasswordAllIgnoreCase(String email, String password);

    // Enabling static ORDER BY for a query
//    List<Jobseeker> findByEmailOrderByFirstnameAsc(String email);
//    List<Jobseeker> findByEmailOrderByFirstnameDesc(String email);

//    @Async
//    Future<Application> findByCompanyname(String companyname);


}
