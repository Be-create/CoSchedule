import { Routes,Route } from "react-router-dom";
import { Month } from "./components/day";
import Sidebar from "./components/Navbar/sidebar";


function App() {
  return (
    <div className="App" style={{backgroundColor : "#f7f7f7"}}>
    
    <Routes >
      <Route path = "/" element={<div style={{display : "flex"}}> <Sidebar /> </div>} />
    </Routes>
    </div>
  );
}

export default App;
