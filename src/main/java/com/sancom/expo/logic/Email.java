package com.sancom.expo.logic;


/**
 * Created by admin on 10/18/18.
 */

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;

import java.util.UUID;

/**
 * Fredrick Oluoch
 * http://www.blaqueyard.com
 * 0720106420 | 0722508906
 * email: menty44@gmail.com
 */

public class Email {

    public void sendMail( String to) {

        if (to != null && !to.isEmpty()) {
            SimpleMailMessage mail = new SimpleMailMessage();

            try {
                String subject = "Sancom Registration";
                String body = "Welcome to Sancom Job Placement. You are allowed to apply only three jobs per day. ";
                String from = "info@blaqueyard.com";

                mail.setFrom(from);
                mail.setTo(to);
                mail.setSubject(subject);
                mail.setText(body);

                System.out.println("Sending Email For Activation...");

                javaMailSender.send(mail);
                System.out.println("Done! Sending Emails");
            }catch (Exception ex){
                ex.printStackTrace();
            }
        }else {
            System.out.println("Missing Parameters");
        }

    }
}
