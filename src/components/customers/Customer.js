import { Link } from 'react-router-dom'
import './Customers.css'

export const Customer = ({id, fullName, email}) => {
    return <section className="customer" key={id}>
        <div>
            <Link to={`/customers/${id}`}>Name: {fullName}</Link>
        </div>
        <div className="customer-email">E-mail: {email}</div>
    </section>
}