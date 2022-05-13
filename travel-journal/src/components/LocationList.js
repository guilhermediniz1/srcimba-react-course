import React from "react";
import Location from './Location'
import data from '../data'

export default function LocationList(){
    const locations = data.map(data => {
        console.log(data)
        return (
            <>
            <Location
                {...data}
            />
            <hr/>
            </>
        )
    })
    return(
        <div className="location-list">
            {locations}
        </div>
    )
}