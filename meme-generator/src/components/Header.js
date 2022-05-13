import React from "react";
import trollFace from '../images/trollFace.png'

export default function Header(){
    return (
        <div className="header">
            <div className="header--logo">
                <img src={trollFace}/>
                <h3>Meme Generator</h3>
            </div>
            <p>React Course - Project 3</p>
        </div>
    )
}