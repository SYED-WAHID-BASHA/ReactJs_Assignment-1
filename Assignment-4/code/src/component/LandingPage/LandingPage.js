import React from "react";

import './LandingPage.css'
import {Link} from 'react-router-dom';

export default function LandingPage(){

    return (
       <div className="landing-container">
            
            <div className="image-container" >
                <img src="https://pbblogassets.s3.amazonaws.com/uploads/2021/05/07144047/Lens-Cover2.jpg" alt=" "/>
            </div>
            
            <div className="text">
                <h1>10x Team 04</h1>
                <Link to='/PostView'><button ><span >Enter</span></button></Link>
            </div>
        </div>
    )
}