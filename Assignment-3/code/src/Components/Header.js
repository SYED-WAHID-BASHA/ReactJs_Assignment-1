import React from "react";

 function Header(props){

        return(
            <div className="header">
        <div className="left-arrow">{props.arrow}</div>
        <div className="para-content">{props.name}<br/>
            {props.employeeId}
        </div>
        <button>Print</button>
    </div>
        );
}

export default Header;