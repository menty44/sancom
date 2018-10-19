package com.sancom.expo.controller;


/**
 * Created by admin on 10/18/18.
 */

import com.sancom.expo.exception.ResourceNotFoundException;
import com.sancom.expo.model.Jobseeker;
import com.sancom.expo.repository.JobseekerRepository;
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
public class JobseekerController {

    @Autowired
    JobseekerRepository jobseekerRepository;

    private UUID encry = UUID.randomUUID();

    //new user reg
    @CrossOrigin
    @RequestMapping(value = "newjobseeker", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity<Map<String,String>> registerNewUser(
            @RequestParam(value = "firstname") String firstname,
            @RequestParam(value = "lastname") String lastname,
            @RequestParam(value = "gender") String gender,
            @RequestParam(value = "age") int age,
            @RequestParam(value = "email") String email,
            @RequestParam(value = "mobile") String mobile,
            @RequestParam(value = "level") String level,
            @RequestParam(value = "experience") int experience,
            @RequestParam(value = "password") String password) throws IOException, MessagingException {

        Map<String,String> response = new HashMap<String, String>();


        if(firstname!= null && !firstname.isEmpty() && lastname!= null && !lastname.isEmpty() && age != 0 && email!= null && !email.isEmpty() && password!= null && !password.isEmpty()
                && mobile!= null && !mobile.isEmpty() && gender!= null && !gender.isEmpty() && level!= null && !level.isEmpty()){


            Jobseeker myemail = jobseekerRepository.findByEmail(email);
            //Jobseeker mymobile = userRepository.findByMobile(mobile);

            if(myemail == null){

                Jobseeker jobseeker = new Jobseeker();

                jobseeker.setFirstname(firstname);
                jobseeker.setLastname(lastname);
                jobseeker.setGender(gender);
                jobseeker.setAge(age);
                jobseeker.setEmail(email);
                jobseeker.setEdu_level(level);
                jobseeker.setExperience(experience);

                jobseeker.setMobile(mobile);
                jobseeker.setPassword(password);

                jobseekerRepository.save(jobseeker);

                response.put("ok", "save success");
                response.put("code", "00");
                return ResponseEntity.accepted().body(response);



            }else {

                response.put("mg", "fail");
                response.put("code", "03");
                response.put("desc", "user already registered");
                return ResponseEntity.ok().body(response);
            }



        }else {
            String ts = "one of the parameters is missing";
            response.put("error", ts);
            response.put("code", "05");
            return ResponseEntity.badRequest().body(response);
        }
    }


    @GetMapping("/jobseekers")
    public Page<Jobseeker> getAlljobseekers(Pageable pageable) {
        return jobseekerRepository.findAll(pageable);
    }



    @GetMapping("/singlejobseeker/{id}")
    public Jobseeker getJobseekerById(@PathVariable(value = "id") UUID jobseekerId) {
        Map<String,String> response = new HashMap<String, String>();

        //Employer em = employerRepository.getOne(employerId);

        return jobseekerRepository.findById(jobseekerId)
                .orElseThrow(() -> new ResourceNotFoundException("Employer", "id", jobseekerId));
    }

    @PutMapping("/updateseeker/{id}")
    public Jobseeker updateEmployert(@PathVariable(value = "id") UUID jobseekerId,
//                               @Valid @RequestBody Employer companyname
                                    @RequestParam(value = "email") String email
    ) {

        Jobseeker jobseeker = jobseekerRepository.findById(jobseekerId)
                .orElseThrow(() -> new ResourceNotFoundException("Jobseeker", "id", jobseekerId));

        //gender.setTitle(noteDetails.getTitle());
        jobseeker.setEmail(email);

        Jobseeker updateseeker = jobseekerRepository.save(jobseeker);
        return updateseeker;
    }

    @DeleteMapping("/delejobseeker/{id}")
    public ResponseEntity<?> deleteEmployer(@PathVariable(value = "id") UUID jobseekerId) {

        Map<String,String> response = new HashMap<String, String>();

        Jobseeker em = jobseekerRepository.getOne(jobseekerId);

//        return employerRepository.getOne(employerId)
//                .orElseThrow(() -> new ResourceNotFoundException("Employer", "id", employerId));

        if(em == null){

            String ts = "the id is missing or its invalid";
            response.put("error", ts);
            response.put("code", "05");
            return ResponseEntity.accepted().body(response);
        }else {
            jobseekerRepository.delete(em);

            response.put("ok", "delete success");
            response.put("code", "00");
            return ResponseEntity.accepted().body(response);
        }

    }








}
