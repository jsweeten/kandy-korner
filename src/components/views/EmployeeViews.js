import { Outlet, Route, Routes } from "react-router-dom"
import { ProductForm } from "../products/ProductForm"
import { ProductContainer } from "../products/ProductContainer"
import { EmployeeContainer } from "../employees/EmployeeContainer"
import { Locations } from "../locations/Locations"

export const EmployeeViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <div id="header">
                        <h1>wElCoMe 2 kAnDy kOrNeR</h1>
                        <h2>We have so much candy we guarantee your children will <u>never sleep again</u> OR YOUR MONEY BACK!</h2>
                    </div>

                    <Outlet />
                </>
            }>
                <Route index path="locations" element={ < Locations /> } />
                <Route path="products" element={ < ProductContainer /> } />
                <Route path="new" element={ < ProductForm /> } />
                <Route path="employees" element={ < EmployeeContainer /> } />
            </Route>
        </Routes>
    )
}