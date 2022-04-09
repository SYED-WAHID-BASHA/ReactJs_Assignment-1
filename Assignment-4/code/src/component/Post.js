import React from "react";

export default function Post(props){
    return(
        <div className="content-wrapper">
            <div className="main-content-box">
            <div className="top-content">
                <div className="top-content-left">
                    <div className="top-content-name"><strong>{props.name}</strong></div>
                    <div className="top-content-location">{props.location}</div>
                
                </div>

                <div className="top-content-right">
                    <img src="https://img.icons8.com/small/2x/more.png" alt="" />
                </div>
            </div>

            <div className="middle-content">
                <img src={props.image} alt="ima" />
            </div>

            <div className="content-img-date"> 
                <div className="cont-img">
                    <img src="https://cdn.worldvectorlogo.com/logos/like-2.svg" alt="" />
                    <img src="http://cdn.onlinewebfonts.com/svg/img_516624.png" alt="" />
                </div><br/>

                <div className="cont-date">09 April 2022</div>

            </div>

            <div className="cont-likes">{props.likes}</div>
            <div className="bottom-content-desc">
            <strong>{props.desc}</strong> </div>
            
        
            </div>
        </div>
    )
}