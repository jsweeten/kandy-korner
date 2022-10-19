import { Outlet, Route, Routes } from "react-router-dom"
import { Locations } from "../locations/Locations"
import { ProductContainer } from "../products/ProductContainer"
import { ProductForm } from '../products/ProductForm'

export const ApplicationViews = () => {
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
            </Route>
        </Routes>
    )
}