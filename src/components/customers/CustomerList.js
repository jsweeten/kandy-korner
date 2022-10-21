import { useState, useEffect } from 'react'
import { Customer } from "./Customer"
import './Customers.css'

export const CustomerList = () => {

    const [customers, setCustomers] = useState([])
    
    useEffect(
        () => {
            fetch('http://localhost:8088/customers?_expand=user')
            .then(res => res.json())
            .then(
                (customerArray) => {
                    setCustomers(customerArray)
                }
            )
        }, []
    )

    return (
        <>
        <h2>Customer List</h2>
        <div id="customer-container">
                {
                customers.map(customer => < Customer key={customer.id}
                    id={customer.id}
                    fullName={customer?.user?.fullName}
                    email={customer?.user?.email} />
                    )}
        </div>
        </>
    )
}