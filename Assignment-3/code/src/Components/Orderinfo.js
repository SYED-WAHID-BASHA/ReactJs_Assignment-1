import React from "react";


// const Order=()=>{

// }
function Order(props){

    return(
        <div className="Order">
            <div className="Order-data">
            <div className="order-content"><strong>Status</strong><br/>⚫{props.Status}</div>
            <div className="order-content"><strong>Door</strong><br/> {props.Door}</div>
            <div className="order-content"><strong>Time</strong><br/>{props.Time}</div>
            </div>
        </div>
    );
}

export default Order