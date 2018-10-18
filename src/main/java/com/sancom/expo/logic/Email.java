package com.sancom.expo.logic;


/**
 * Created by admin on 10/18/18.
 */

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;

import javax.mail.MessagingException;
import java.io.IOException;

/**
 * Fredrick Oluoch
 * http://www.blaqueyard.com
 * 0720106420 | 0722508906
 * email: menty44@gmail.com
 */

public class Email {


    @Autowired
    private JavaMailSender sender;

    @Autowired
    JavaMailSender javaMailSender;

    public void sendMail(String to) throws MessagingException, IOException {

        SimpleMailMessage mail = new SimpleMailMessage();

        try {
            String subject = "AfroBoot Account Activation";
            String body = "Welcome to Sancom.";
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

    }
}
