package com.northern.services;

import com.northern.models.Employee;
import com.northern.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class EmployeeService implements EmployeeServiceInterface {

    @Autowired
    private EmployeeRepository employeeRepository;


    @Override
    public Employee saveEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    @Override
    public Optional<Employee> getEmployeeById(Long id) {
        return employeeRepository.findById(id);
    }

    @Override
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    @Override
    public Employee updateEmployee(Long id, Employee employee) {
        //1. get employee by id
        Employee employeeToUpdate = employeeRepository.findById(id).orElse(null);
        //2. set the new employee data/values
        employeeToUpdate.setFirstName(employee.getFirstName());
        employeeToUpdate.setLastName(employee.getFirstName());
        employeeToUpdate.setEmail(employee.getEmail());
        return employeeRepository.save(employeeToUpdate);
    }

    @Override
    public void deleteEmployeeById(Long id) {
        employeeRepository.deleteById(id);

    }
}
