package com.cognizant.dao;

import java.util.List;

import com.cognizant.model.Employee;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Repository;

@Repository
public class EmployeeDao {

    public static List<Employee> emp_list;

    public EmployeeDao() {
        ApplicationContext context = new ClassPathXmlApplicationContext("employee.xml");
        emp_list = (List<Employee>) context.getBean("employeeList");
    }

    public List<Employee> getAllEmployees() {
        return emp_list;
    }
}
