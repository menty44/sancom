package com.sancom.expo.controller;


/**
 * Created by admin on 10/18/18.
 */

import com.sancom.expo.exception.ResourceNotFoundException;
import com.sancom.expo.model.Post;
import com.sancom.expo.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

/**
 * Fredrick Oluoch
 * http://www.blaqueyard.com
 * 0720106420 | 0722508906
 * email: menty44@gmail.com
 */

@RestController
@RequestMapping("/api")
public class PostController {

    @Autowired
    PostRepository postRepository;
    
    //new user reg
    @CrossOrigin
    @RequestMapping(value = "newpost", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity<Map<String,String>> newPost(
            @RequestParam(value = "jobtitle") String jobtitle,
            @RequestParam(value = "description") String description,
            @RequestParam(value = "cattype") String cattype,
            @RequestParam(value = "years_of_experience") int years_of_experience,
            @RequestParam(value = "status") String status,
            @RequestParam(value = "interview_date") String interview_date,
            @RequestParam(value = "interview_start_time") String interview_start_time,
            @RequestParam(value = "interview_end_time") String interview_end_time,
            @RequestParam(value = "posted_by") String posted_by) throws IOException, MessagingException {

        Map<String,String> response = new HashMap<String, String>();


        if(jobtitle!= null && !jobtitle.isEmpty() && description!= null && !description.isEmpty() && years_of_experience != 0 && status!= null && !status.isEmpty()
                && interview_date!= null && !interview_date.isEmpty()
                && interview_start_time!= null && !interview_start_time.isEmpty() && interview_end_time!= null && !interview_end_time.isEmpty()
                && posted_by!= null && !posted_by.isEmpty() && cattype!= null && !cattype.isEmpty()){


            Post mydate = postRepository.findByEmail(interview_date);
            //Post mymobile = userRepository.findByMobile(mobile);

            if(mydate == null){

                Post post = new Post();

                post.setJobtitle(jobtitle);
                post.setDescription(description);
                post.setCattype(cattype);
                post.setYears_of_experience(years_of_experience);
                post.setStatus(status);
                post.setInterview_date(interview_date);
                post.setPassinterview_start_time(interview_start_time);
                post.setInterview_end_time(interview_end_time);
                post.setPosted_by(posted_by);

                postRepository.save(post);

                response.put("ok", "save success");
                response.put("code", "00");
                return ResponseEntity.accepted().body(response);

            }else {

                response.put("mg", "fail");
                response.put("code", "03");
                response.put("desc", "post already exists");
                return ResponseEntity.ok().body(response);
            }

        }else {
            String ts = "one of the parameters is missing";
            response.put("error", ts);
            response.put("code", "05");
            return ResponseEntity.badRequest().body(response);
        }
    }


    @GetMapping("/posts")
    public Page<Post> getAllposts(Pageable pageable) {
        return postRepository.findAll(pageable);
    }



    @GetMapping("/singlepost/{id}")
    public Post getPostById(@PathVariable(value = "id") UUID postId) {
        Map<String,String> response = new HashMap<String, String>();

        //Employer em = employerRepository.getOne(employerId);

        return postRepository.findById(postId)
                .orElseThrow(() -> new ResourceNotFoundException("Post", "id", postId));
    }

    @PutMapping("/updatepost/{id}")
    public Post updatePost(@PathVariable(value = "id") UUID postId,
//                               @Valid @RequestBody Employer companyname
                                    @RequestParam(value = "jobtitle") String jobtitle
    ) {

        Post post = postRepository.findById(postId)
                .orElseThrow(() -> new ResourceNotFoundException("Post", "id", postId));

        post.setJobtitle(jobtitle);

        return postRepository.save(post);
    }

    @DeleteMapping("/delepost/{id}")
    public ResponseEntity<?> deletePost(@PathVariable(value = "id") UUID postId) {

        Map<String,String> response = new HashMap<String, String>();

        Post em = postRepository.getOne(postId);

//        return employerRepository.getOne(employerId)
//                .orElseThrow(() -> new ResourceNotFoundException("Employer", "id", employerId));

        if(em == null){

            String ts = "the id is missing or its invalid";
            response.put("error", ts);
            response.put("code", "05");
            return ResponseEntity.accepted().body(response);
        }else {
            postRepository.delete(em);

            response.put("ok", "delete post success");
            response.put("code", "00");
            return ResponseEntity.accepted().body(response);
        }

    }








}
