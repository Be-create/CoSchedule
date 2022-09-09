import React from "react";
import { Routes, Route } from "react-router-dom";
import {Homepage} from "../components/home"
import Calendar from "../components1/Calendar";

import Home from "../component/Home";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";

// import Marksuit from "../pages/marksuit";
// import Signup from "../pages/Signup";
const AllRoutes = () => {
  return (
    <div>
    
     
      <Routes>
        <Route path ="/" element ={ <Home />}/>
        <Route path ="/SignIn" element ={ <Signin />}/>
        <Route path ="/CalendarMain" element ={ <Calendar />}/>
        <Route path ="/Home" element ={ <Homepage />}/>
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Signin" element={<Signin />} />
       
            
        {/* <Route path="/MarkSuit" element={<Marksuit/>}/> */}
      </Routes>
     
    </div>
  );
};

export default AllRoutes;
