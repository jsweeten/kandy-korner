import { CustomerViews } from "./CustomerViews"
import { EmployeeViews } from "./EmployeeViews"

export const ApplicationViews = () => {

    // const localKandyUser = 
    const kandyUserObject = JSON.parse(localStorage.getItem("kandy_user"))

    if (kandyUserObject.isEmployee) {
        // return employee views
        return < EmployeeViews />
    } else {
        //return customer views
        return < CustomerViews />
    }
}