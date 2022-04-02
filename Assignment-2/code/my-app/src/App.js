import logo from './logo.svg';
import './App.css';



function App(props) {
 const {employee}=props;
    
return(
  <div className="container">

  <div class="sub-container">
    <img src={employee.profileImg} alt="avatar-logo" />
    <h1>{employee.name}</h1>
  </div>

  <div class="sub-container">
    <p>location</p>
    <h2>{employee.location}</h2>
  </div>

  <div class="sub-container">
    <p>Blood Group</p>
    <h2>{employee.bloodGroup}</h2>
  </div>

  <div class="sub-container">
    <p>age</p>
    <h2>{employee.age}</h2>
  </div>
</div>
)
}



export default App;
