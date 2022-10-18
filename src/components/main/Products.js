import { useState, useEffect } from 'react'
import './Products.css'

export const Products = () => {

    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [productLocations, setProductLocations] = useState([])
    const [topPriced, setTopPriced] = useState(false)
    
    useEffect(
        () => {
            fetch('http://localhost:8088/products?_sort=name&_expand=productType')
            .then(res => res.json())
            .then(
                (productArray) => {
                    setProducts(productArray)
                }
            )
        }, []
    )

    useEffect(
        () => {
            fetch('http://localhost:8088/productLocations')
            .then(res => res.json())
            .then(
                (productLocationsArray) => {
                    setProductLocations(productLocationsArray)
                }
            )
        }, []
    )

    useEffect(
        () => {
            if (topPriced) {
                const topPricedProducts = products.filter(product => product.price > 2)
                setFilteredProducts(topPricedProducts)
            } else {
                setFilteredProducts(products)
            }
        }, [topPriced, products]
    )

    return (
        <>
            <h2>cHeCk oUt oUr kOlLeCtIoN oF kAnDy!</h2>
            <button id="top-priced-on" onClick={() => {setTopPriced(true)}}>Top Priced Candy</button>
            <button id="top-priced-off" onClick={() => {setTopPriced(false)}}>All Candy</button>
            <div id="product-list-container">
                    { filteredProducts.map((product) => {
                    return (
                        <div key={product.id}>
                            <ul className="product-item">
                                    <li className="product-name">{product.name}</li>
                                    <li className="product-price">${product.price}</li>
                                    <li className="product-type">{product.productType.name}</li>
                            </ul>
                        </div>)})}
            </div>
        </>
    )
}

// http://localhost:8088/products/3?_expand=productType