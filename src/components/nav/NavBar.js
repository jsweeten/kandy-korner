import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"
import { EmployeeNav } from "./EmployeeNav"
import { CustomerNav } from "./CustomerNav"

export const NavBar = () => {
	
    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)

    if (kandyUserObject.isEmployee) {
        // return employee views
        return < EmployeeNav />
    } else {
        //return customer views
        return < CustomerNav />
    }
}