import React from "react";

function Customer(props){

    return(
        <div className="customer">
        <p className="customer-data">
            <p><strong>Appointment :</strong>{props.Appointment}</p>
            <p><strong>Email :</strong>{props.Email}</p>
            <p><strong>Phone No :</strong>{props.Phone}</p>
        </p>
        </div>
    );
}

export default Customer