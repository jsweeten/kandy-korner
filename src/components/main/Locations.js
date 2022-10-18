import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import './Locations.css'

export const Locations = () => {

    const [locations, setLocations] = useState([])

    useEffect(
        () => {
            fetch('http://localhost:8088/locations')
            .then(res => res.json())
            .then(
                (locationArray) => {
                    setLocations(locationArray)
                }
            )
        }, []
    )

    return <>
            <div id="locations-container"><h2>Come visit one of our many locations!</h2>
            <div>{ locations.map((location) => {
                    return <>
                            <h3 className="locations" key={location.id}>{location.name}</h3>
                        <ul>
                            <li>{location.address}</li>
                            <li>{location.size} sq ft</li>
                        </ul>
                    </>
                })}</div>
            </div>
        </>
}