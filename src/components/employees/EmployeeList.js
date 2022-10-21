import { useState, useEffect } from 'react'
import { Employee } from "./Employee"
import './Employees.css'

export const EmployeeList = () => {

    const [employees, setEmployees] = useState([])
    
    useEffect(
        () => {
            fetch('http://localhost:8088/employees?_expand=user&_expand=location')
            .then(res => res.json())
            .then(
                (employeeArray) => {
                    setEmployees(employeeArray)
                }
            )
        }, []
    )

    return (
        <>
        <h2>Current Employee List</h2>
        <div id="employee-container">
                {
                employees.map(employee => < Employee key={employee.id}
                    id={employee.id}
                    fullName={employee?.user?.fullName}
                    email={employee?.user?.email}
                    startDate={employee.startDate}
                    payRate={employee.payRate}
                    storeAssignment={employee?.location?.name} />
                    )}
        </div>
        </>
    )
}