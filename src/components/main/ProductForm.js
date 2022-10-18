import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"

export const ProductForm = () => {

    const navigate = useNavigate()
    
    const [product, update] = useState({
        name: "",
        price: null,
        productTypeId: null
    }) 

    const handleSaveButtonClick = (event) => {
        event.preventDefault()
        const ticketToSendToAPI = {
            name: product.name,
            price: product.price,
            productTypeId: product.productTypeId
        }   
        
        return fetch('http://localhost:8088/products', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(ticketToSendToAPI)})
            .then(res => res.json())
            .then(
                (navigate('/products'))
            ), []
    }

    return (
        <form className="productForm">
            <h2 className="productForm__title">Add A New Candy</h2>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="name">Name of Candy:</label>
                            <input
                                required autoFocus
                                type="text"
                                className="form-control"
                                placeholder="Add Candy Name Here..."
                                value={product.name}
                                onChange={
                                    (evt) => {
                                        const copy = {...product}
                                        copy.name = evt.target.value
                                        update(copy)
                                    }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="price">Price:</label>
                    <input type="number"
                        value={product.price}
                        onChange={
                            (evt) => {
                                const copy = {...product}
                                copy.price = Number(evt.target.value)
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="productTypeId">Type:</label>
                    <input type="number"
                        value={product.productTypeId}
                        onChange={
                            (evt) => {
                                const copy = {...product}
                                copy.productTypeId = Number(evt.target.value)
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button 
            onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
            className="btn btn-primary">
                Add Candy
        </button>
    </form>
)}