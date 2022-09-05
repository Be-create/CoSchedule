import React from "react";
import { Routes, Route } from "react-router-dom";


import Home from "../component/Home";


// import Marksuit from "../pages/marksuit";
// import Signup from "../pages/Signup";
const AllRoutes = () => {
  return (
    <div>
    
     
      <Routes>
        <Route path ="/" element ={ <Home />}/>
        
        {/* <Route path="/MarkSuit" element={<Marksuit/>}/> */}
      </Routes>
     
    </div>
  );
};

export default AllRoutes;
