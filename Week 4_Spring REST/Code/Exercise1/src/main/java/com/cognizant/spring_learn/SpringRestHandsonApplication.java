package com.cognizant.spring_learn;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.text.SimpleDateFormat;
import java.util.Date;

@SpringBootApplication
public class SpringRestHandsonApplication {

	public static void main(String[] args) throws Exception {
		SpringApplication.run(SpringRestHandsonApplication.class, args);
		System.out.println("Spring Boot Application Started");

		displayDate();
	}

	public static void displayDate() throws Exception {
		ApplicationContext context = new ClassPathXmlApplicationContext("date-format.xml");
		SimpleDateFormat format = context.getBean("dateFormat", SimpleDateFormat.class);
		Date date = format.parse("31/12/2018");
		System.out.println("Parsed Date: " + date);
	}
}
