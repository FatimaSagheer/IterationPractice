/**Exercise 4: Employee Management

Create an array of employee objects, where each object includes a name, salary, and department. 
Write a program that finds the average salary for each department and produces a summary report 
showing the department with the highest average salary.
 */
// Create an array of employee objects
const employees = [
    { name: 'John', salary: 50000, department: 'HR' },
    { name: 'Alice', salary: 60000, department: 'Marketing' },
    { name: 'Bob', salary: 55000, department: 'Sales' },
    { name: 'Sarah', salary: 70000, department: 'Engineering' },
    { name: 'Michael', salary: 62000, department: 'Finance' },
    { name: 'Emma', salary: 53000, department: 'Marketing' },
    { name: 'David', salary: 58000, department: 'HR' },
    { name: 'Olivia', salary: 72000, department: 'Engineering' },
    { name: 'Daniel', salary: 59000, department: 'Sales' },
    { name: 'Sophia', salary: 71000, department: 'Finance' }
  ];
  
  // Calculate the average salary for each department
  const departmentSalaries = {};
  const departmentCounts = {};
  
  employees.forEach(employee => {
    const { salary, department } = employee;
    if (!departmentSalaries[department]) {
        console.log(departmentSalaries)
      departmentSalaries[department] = 0;
      departmentCounts[department] = 0;
    }

    departmentSalaries[department] += salary;
    departmentCounts[department]++;

  });
  const averageSalaries = {};
  for (const department in departmentSalaries) {
    averageSalaries[department] = departmentSalaries[department] / departmentCounts[department];
  }
  
  // Find the department with the highest average salary
  let highestAverageSalary = 0;
  let departmentWithHighestSalary = '';
  
  for (const department in averageSalaries) {
    if (averageSalaries[department] > highestAverageSalary) {
      highestAverageSalary = averageSalaries[department];
      departmentWithHighestSalary = department;
    }
  }
  
  // Create a summary report
  console.log('Average Salaries by Department:');
  for (const department in averageSalaries) {
    console.log(`${department}: $${averageSalaries[department]}`);
  }
  
  console.log(`Department with the Highest Average Salary: ${departmentWithHighestSalary} ($${highestAverageSalary})`);
  
  