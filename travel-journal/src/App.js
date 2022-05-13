import React from "react";
import Nav from './components/Navbar'
import LocationList from "./components/LocationList";

export default function App(){
    return (
        <div className="container">
            <Nav/>
            <LocationList/>
        </div>
    )
}