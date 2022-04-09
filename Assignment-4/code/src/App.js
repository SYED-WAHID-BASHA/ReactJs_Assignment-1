import React from "react";
import LandingPage from "./component/LandingPage/LandingPage";
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Postview from "./component/PostView/Postview";
import './App.css';

export default function App(){

    return(
        <div className="wrapper">
        
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LandingPage />}/>
                <Route path='/PostView' element={<Postview />}/>
            </Routes>
        </BrowserRouter>
        </div>
    );
}