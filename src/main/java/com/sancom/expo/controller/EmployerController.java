package com.sancom.expo.controller;


/**
 * Created by admin on 10/18/18.
 */

import com.sancom.expo.model.Employer;
import com.sancom.expo.repository.EmployerRepository;
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
public class EmployerController {

    @Autowired
    EmployerRepository employerRepository;

    private UUID encry = UUID.randomUUID();

    //new user reg
    @CrossOrigin
    @RequestMapping(value = "newemployer", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity<Map<String,String>> registerNewEmplyer(
            @RequestParam(value = "companyname") String companyname,
            @RequestParam(value = "website") String website,
            @RequestParam(value = "mobile") String mobile,
            @RequestParam(value = "location") String location,
            @RequestParam(value = "email") String email,
            @RequestParam(value = "password") String password) throws IOException, MessagingException {

        Map<String,String> response = new HashMap<String, String>();


        if(companyname!= null && !companyname.isEmpty() && website!= null && !website.isEmpty() && email!= null && !email.isEmpty() && password!= null && !password.isEmpty()
                && mobile!= null && !mobile.isEmpty() && location!= null && !location.isEmpty()){


            Employer inemail = employerRepository.findByEmail(email);
            //Jobseeker mymobile = userRepository.findByMobile(mobile);

            if(inemail == null){

                Employer employer = new Employer();

                employer.setCompanyname(companyname);
                employer.setWebsite(website);
                employer.setLocation(location);
                employer.setEmail(email);
                employer.setMobile(mobile);
                employer.setPassword(password);

                employerRepository.save(employer);

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


    @GetMapping("/employers")
    public Page<Employer> getAllEmployerss(Pageable pageable) {
        return employerRepository.findAll(pageable);
    }



}
