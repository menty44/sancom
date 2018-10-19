package com.sancom.expo.repository;


/**
 * Created by admin on 10/18/18.
 */

import com.sancom.expo.model.Jobseeker;
import com.sancom.expo.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Repository;

import java.util.UUID;
import java.util.concurrent.Future;

/**
 * Fredrick Oluoch
 * http://www.blaqueyard.com
 * 0720106420 | 0722508906
 * email: menty44@gmail.com
 */

//@Repository
//public class JobseekerRepository extends JpaRepository<Jobseeker, UUID>{
//}

@Repository
public interface PostRepository extends JpaRepository<Post, UUID> {

    Post findByEmail(String email);

    String findUserByEmail(String email);

    Post findByMobile(String mobile);

//    Jobseeker findByEncry(UUID encry);

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

    @Async
    Future<Jobseeker> findByFirstname(String firstname);


}
