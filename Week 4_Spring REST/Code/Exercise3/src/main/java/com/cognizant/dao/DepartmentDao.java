package com.cognizant.dao;

import java.util.List;

import com.cognizant.model.Department;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Repository;

@Repository
public class DepartmentDao {

    public static List<Department> dept_list;

    public DepartmentDao() {
        ApplicationContext context = new ClassPathXmlApplicationContext("employee.xml");
        dept_list = (List<Department>) context.getBean("departmentList");
    }

    public List<Department> getAllDepartments() {
        return dept_list;
    }
}
