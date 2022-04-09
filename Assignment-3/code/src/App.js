import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Customerinfo from './Components/Customerinfo'
import Orderinfo from './Components/Orderinfo';
import ProductList from './Components/ProductList';


const employee={

    Name:"Allan Ford",
    EmployeeId:"00005152",
    Appointment:"9:00(04-04-2022)",
    Email:"alan.form@email.nl",
    Phone:+31123456789,
    Statu:"In Progress",
    Time:"10:30(07-04-2022)",
    Door:" Marked",
    Image:"https://www.w3schools.com/howto/img_avatar.png",
    proName :"Boltaart Bosbessen",
    proInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam labore illum libero fugiat accusamus quibusdam."
    
}


var arrow="<"
var rightarrow=">"
function App() {
  return (
    <div className="site-container">
    <Header 
      arrow = {arrow}
      name = {employee.Name}
      employeeId = {employee.EmployeeId}
    />

    <Customerinfo 
      Appointment={employee.Appointment}
      Email={employee.Email}
      Phone={employee.Phone}
    />

    <Orderinfo
      Status={employee.Statu}
      Door={employee.Door}
      Time={employee.Time}
    />


    <ProductList 
      Image={employee.Image}
      proName={employee.proName}
      proInfo={employee.proInfo}
      rightarrow={rightarrow}
    />

    </div>
  );
}

export default App;
