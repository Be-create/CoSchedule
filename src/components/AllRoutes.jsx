import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "../pages/Signup";


const AllRoutes = () => {
  return (
    <div>
    
     
      <Routes>
        {/* <Route path ="/" element ={ <Home />}/> */}
        <Route path="/Signup" element={<Signup />} />
      </Routes>
     
    </div>
  );
};

export default AllRoutes;