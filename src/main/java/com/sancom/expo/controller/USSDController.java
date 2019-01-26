package com.sancom.expo.controller;

/**
 * Created by admin on 10/18/18.
 */

import com.sancom.expo.repository.JobseekerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

/**
 * Fredrick Oluoch
 * http://www.blaqueyard.com
 * 0720106420 | 0722508906
 * email: menty44@gmail.com
 */

@RestController
@RequestMapping("/api")
public class USSDController {

    @Autowired
    JobseekerRepository jobseekerRepository;

    private UUID encry = UUID.randomUUID();

    //new user reg
    @CrossOrigin
    @RequestMapping(value = "ussd", method = RequestMethod.POST, produces = "text/plain")
    public String registerNewUser(
            @RequestParam(value = "sessionId") String sessionId,
            @RequestParam(value = "serviceCode") String serviceCode,
            @RequestParam(value = "phoneNumber") String phoneNumber,
            @RequestParam(value = "text") String text
           ) {

        System.out.println("sessionId : " + sessionId);
        System.out.println("serviceCode : " + serviceCode);
        System.out.println("phoneNumber : " + phoneNumber);
        System.out.println("text: " + text);
        String[] inputText = text.split("\\*");

        String response = "END The request could not be processed.";

        if (text.isEmpty()){
            // This is the first request. Note how we start the responseponse with CON
            response = "CON What would you want to check \n";
            response = response + "1. Account Enquiry \n";
            response = response + "2. Collection \n";
            response = response + "3. Transfer Fund \n";
            response = response + "4. Exit \n";
            System.out.println("response : " + response);
            return response;

        }

        if (text.equals("1")){
            response = "CON Enter account number \n";
            return response;
        }

        if (text.equals("2")){
                response = "CON Collection success \n";
                return response;
        }

        if (text.equals("3")){
            response = "END Transfer success \n";
            return response;
        }

        if(text.startsWith("1*") && text.length() == 6){
            response = "CON Enter Your Identification Number \n";
            return response;

        }else if (text.startsWith("1*") && text.length() == 11){
            //end the ussd session
            response = "END Your Account "+ text.substring(2,6)+" is fully activated \n";
            return response;
        }

        return response;
    }

}
