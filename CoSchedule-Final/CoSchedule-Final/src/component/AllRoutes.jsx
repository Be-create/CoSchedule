import React from "react";
import { Routes, Route } from "react-router-dom";
import {Homepage} from "../components/home"
import Calendar from "../components1/Calendar";

import Home from "../component/Home";


// import Marksuit from "../pages/marksuit";
// import Signup from "../pages/Signup";
const AllRoutes = () => {
  return (
    <div>
    
     
      <Routes>
        <Route path ="/" element ={ <Home />}/>
        <Route path ="/Calender" element ={ <Homepage />}/>
        <Route path ="/CalenderMain" element ={ <Calendar />}/>
        
        {/* <Route path="/MarkSuit" element={<Marksuit/>}/> */}
      </Routes>
     
    </div>
  );
};

export default AllRoutes;
