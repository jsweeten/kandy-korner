import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Employees.css"

export const HiringForm = () => {

    const [user, updateUser] = useState({
        fullName: "",
        email: "",
        isEmployee: true
    })
    const [employee, updateEmployee] = useState({
        startDate: "",
        payRate: "",
        userId: "",
        locationId: ""
    })


    const navigate = useNavigate()

    const handleSaveButtonClick = (event) => {
        event.preventDefault()
        const userToSendToAPI = {
            fullName: user.fullName,
            email: user.email,
            isEmployee: true
        }
        const employeeToSendToAPI = {
            startDate: employee.startDate,
            payRate: employee.payRate,
            locationId: employee.locationId,
            userId: 0
        }

        return fetch('http://localhost:8088/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userToSendToAPI)
        })
        .then(response => response.json())
        .then((userObj) => {
            employeeToSendToAPI.userId = userObj.id
        })
        .then(fetch('http://localhost:8088/employees', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employeeToSendToAPI)
        }))
        .then(res => res.json())
        .then(
            () => {
            navigate("/employees")
        })
    }

    return (
        <form className="hiringForm">
            <h2 className="hiringForm__title">New Employee Form</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="fullName">Full Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Enter Full Legal Name Here..."
                        value={user.fullName}
                        onChange={
                            (evt) => {
                                const userCopy = {...user}
                                userCopy.fullName = evt.target.value
                                updateUser(userCopy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="email">E-mail:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Enter E-mail Address Here..."
                        value={user.email}
                        onChange={
                            (evt) => {
                                const userCopy = {...user}
                                userCopy.email = evt.target.value
                                updateUser(userCopy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Store Location:</label>
                    <input type="number"
                        value={employee.locationId}
                        onChange={
                            (evt) => {
                                const employeeCopy = {...employee}
                                employeeCopy.locationId = parseInt(evt.target.value)
                                updateEmployee(employeeCopy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="startDate">Date of Hire:</label>
                    <input type="date"
                        value={employee.startDate}
                        onChange={
                            (evt) => {
                                const employeeCopy = {...employee}
                                employeeCopy.startDate = evt.target.value
                                updateEmployee(employeeCopy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="payRate">Pay Rate:</label>
                    <input type="number"
                        value={employee.payRate}
                        onChange={
                            (evt) => {
                                const employeeCopy = {...employee}
                                employeeCopy.payRate = Number(evt.target.value)
                                updateEmployee(employeeCopy)
                            }
                        } />
                </div>
            </fieldset>
            <button 
            onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
            className="btn btn-primary">
                Submit
            </button>
        </form>
    )
}

/*
Create a form for hiring employees. You must be able to choose a location when filling out the form.
An employee should have the following information provided.

Name (string)
Location (foreign key)
Start date (date)
Pay rate per hour (number)
This will require two POST requests.

Create an object in users
Creat an object in employees with a userId that you captured from the response in the previous step
When the saving process is complete, redirect the user to the /employee route to see a list of all employees.

Make sure that each employee HTML representation displays the name of the location in which she works instead
of the foreign key. Use the _expand query string parameter to include the employee's full location object.
*/