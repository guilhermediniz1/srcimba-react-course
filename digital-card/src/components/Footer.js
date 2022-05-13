import React from "react";
import twitter from '../images/Twitter Icon.png'
import instagram from '../images/Instagram Icon.png'
import github from '../images/GitHub Icon.png'

export default function Footer(){
    return(
        <footer>
            <img src={twitter}></img>
            <img src={instagram}></img>
            <img src={github}></img>
        </footer>
    )
}