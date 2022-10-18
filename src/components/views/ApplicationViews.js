import { Outlet, Route, Routes } from "react-router-dom"
import { Locations } from "../main/Locations"
import { Products } from "../main/Products"
import { ProductForm } from '../main/ProductForm'

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
                <Route path="products" element={ < Products /> } />
                <Route path="new" element={ < ProductForm /> } />
            </Route>
        </Routes>
    )
}