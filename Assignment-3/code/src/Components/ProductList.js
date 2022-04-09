import React from "react";

function Product(props){
    return(
        <div className="Product-info">
            <div className="prod-checkbox">
            <input type="checkbox" className="checkmark"></input>
            </div>

            <div className="prod-img">
            <img src={props.Image} alt="alt-logo"></img> </div>
            <div className="prod-proName" > <p><strong>{props.proName}</strong></p> 
            <p><strong>{props.proInfo}</strong></p></div>
            <div className="prod-rightarrow">{props.rightarrow}</div>
             
        </div>
    );
}

export default Product;