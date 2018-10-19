package com.sancom.expo.controller;


/**
 * Created by admin on 10/18/18.
 */

import com.sancom.expo.exception.ResourceNotFoundException;
import com.sancom.expo.model.Application;
import com.sancom.expo.repository.ApplicationRepository;
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
public class ApplicationController {

    @Autowired
    ApplicationRepository applicationRepository;

    private UUID encry = UUID.randomUUID();

    //new user reg
    @CrossOrigin
    @RequestMapping(value = "newapplication", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity<Map<String,String>> registerNewapplication(
            @RequestParam(value = "job_code") String job_code,
            @RequestParam(value = "applicant_fname") String applicant_fname,
            @RequestParam(value = "applicant_lname") String applicant_lname,
            @RequestParam(value = "job_title") String job_title,
            @RequestParam(value = "applicant_uid") String applicant_uid,
            @RequestParam(value = "edulevel") String edulevel,
            @RequestParam(value = "experience") int experience,
            @RequestParam(value = "coverletter") String coverletter,
            @RequestParam(value = "cv") String cv
            ) throws IOException, MessagingException {

        Map<String,String> response = new HashMap<String, String>();


        if(applicant_fname!= null && !applicant_fname.isEmpty() && applicant_lname!= null && !applicant_lname.isEmpty() && experience != 0 && job_title!= null && !job_title.isEmpty()
                && applicant_uid!= null
                && edulevel!= null && !edulevel.isEmpty() && coverletter!= null && !coverletter.isEmpty() &&
                cv!= null && !cv.isEmpty()){


//            Application application = applicationRepository.findByJob_code(job_code);
//            String application = applicationRepository.findByJob_code(job_code);
            //Jobseeker mymobile = userRepository.findByMobile(mobile);

//            if(application == null){

                Application application1 = new Application();

                application1.setJob_code(job_code);
                application1.setApplicant_fname(applicant_fname);
                application1.setApplicant_lname(applicant_lname);
                application1.setJob_title(job_title);
                application1.setApplicant_uid(applicant_uid);
                application1.setEdulevel(edulevel);
                application1.setExperience(experience);
                application1.setCoverletter(coverletter);
                application1.setCv(cv);

                applicationRepository.save(application1);

                response.put("ok", "save success");
                response.put("code", "00");
                return ResponseEntity.accepted().body(response);



//            }else {
//
//                response.put("mg", "fail");
//                response.put("code", "03");
//                response.put("desc", "you have already applied to this job");
//                return ResponseEntity.ok().body(response);
//            }



        }else {
            String ts = "one of the parameters is missing";
            response.put("error", ts);
            response.put("code", "05");
            return ResponseEntity.badRequest().body(response);
        }
    }


    @GetMapping("/applications")
    public Page<Application> getAlljobseekers(Pageable pageable) {
        return applicationRepository.findAll(pageable);
    }



    @GetMapping("/singleapplication/{id}")
    public Application getJobseekerById(@PathVariable(value = "id") UUID jobseekerId) {
        Map<String,String> response = new HashMap<String, String>();

        //Employer em = employerRepository.getOne(employerId);

        return applicationRepository.findById(jobseekerId)
                .orElseThrow(() -> new ResourceNotFoundException("Employer", "id", jobseekerId));
    }

    @PutMapping("/updateapplication/{id}")
    public Application updateEmployert(@PathVariable(value = "id") UUID jobseekerId,
//                               @Valid @RequestBody Employer companyname
                                    //@RequestParam(value = "cv") String cv,
                                    @RequestParam(value = "coverletter") String coverletter
    ) {

        Application application = applicationRepository.findById(jobseekerId)
                .orElseThrow(() -> new ResourceNotFoundException("Jobseeker", "id", jobseekerId));

//        application.setCv(cv);
        application.setCoverletter(coverletter);

        Application updateapplicant = applicationRepository.save(application);
        return updateapplicant;
    }

    @DeleteMapping("/deleapplication/{id}")
    public ResponseEntity<?> deleteEmployer(@PathVariable(value = "id") UUID jobseekerId) {

        Map<String,String> response = new HashMap<String, String>();

        Application em = applicationRepository.getOne(jobseekerId);

//        return employerRepository.getOne(employerId)
//                .orElseThrow(() -> new ResourceNotFoundException("Employer", "id", employerId));

        if(em == null){

            String ts = "the id is missing or its invalid";
            response.put("error", ts);
            response.put("code", "05");
            return ResponseEntity.accepted().body(response);
        }else {
            applicationRepository.delete(em);

            response.put("ok", "delete success");
            response.put("code", "00");
            return ResponseEntity.accepted().body(response);
        }

    }








}
