import './Employees.css'

export const Employee = ({id, fullName, email, startDate, payRate, storeAssignment}) => {

    return (
        <div className="employee" key={id}>
                <h3 className="employee-name">Name: {fullName}</h3>
            <ul className="employee-details">
                    <li className="employee-email">E-mail: {email}</li>
                    <li className="employee-startDate">Hiring date: {startDate}</li>
                    <li className="employee-payRate">Pay Rate: ${payRate}/hr</li>
                    <li className="employee-location">Store Location: {storeAssignment}</li>
            </ul>
        </div>
    )
}