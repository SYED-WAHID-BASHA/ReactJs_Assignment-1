import React, { useEffect, useState } from 'react';
import './Postview.css';
import Post from './component/Post';
import Header from './component/Haeder';


const Postview=()=> {

  const[data,usedata]=useState([])

  const getData=async()=>{
    let response=await fetch("http://localhost:3004/user");
    let stres=await response.json();
    usedata(stres);

  }

    useEffect(() =>{getData()},[]);
    console.log(data);

  
  return (
    <div className="site-container">
    <Header />
      {data.map((ele, idx)=>{
        return(

          <Post
          key={idx}
          name={ele.name}
          location={ele.location} 
          likes={ele.likes}
          desc={ele.description}
          image={ele.PostImage}
          date={ele.date}/>

        )
      } )}
      
    </div>
  );
}

export default Postview;



// const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:3001/links/")
//       .then(response => response.json())
//       .then(data => setData(data));
//   }, []); // << super important array

//   return props.render(data)