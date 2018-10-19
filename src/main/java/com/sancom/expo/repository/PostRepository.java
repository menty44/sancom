package com.sancom.expo.repository;


/**
 * Created by admin on 10/18/18.
 */

import com.sancom.expo.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

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

//    Post findByInterview_date(String interview_date);
    Post findByCattype(String cattype);


}
