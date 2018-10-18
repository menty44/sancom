package com.sancom.expo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

//@ComponentScan(basePackages = "com.sancom.expo")
@ComponentScan
@SpringBootApplication
public class ExpoApplication {

	public static void main(String[] args) {
		SpringApplication.run(ExpoApplication.class, args);
	}
}
