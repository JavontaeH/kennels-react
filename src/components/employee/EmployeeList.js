import React, { useState, useEffect } from "react";
//import the components we will need
import { EmployeeCard } from "./EmployeeCard";
import { getAllEmployees, getEmployeeById } from "../../modules/DataManager";

export const EmployeeList = () => {
  // The initial state is an empty array
  const [employees, setEmployees] = useState([]);

  const getEmployees = () => {
    // After the data comes back from the API, we
    // use the setEmployees function to update state
    return getAllEmployees().then((EmployeesFromAPI) => {
      setEmployees(EmployeesFromAPI);
    });
  };

  // got the Employees from the API on the component's first render
  useEffect(() => {
    getEmployees();
  }, []);

  // Finally we use .map() to "loop over" the Employees array to show a list of Employee cards
  return (
    <div className="container-cards">
      {employees.map((employee) => (
        <EmployeeCard employee={employee} key={employee.id} />
      ))}
    </div>
  );
};
