import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";


const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Signin" element={<Signin />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;

// git add . 
// git commit -m "msg"
// git push origin Ashutosh