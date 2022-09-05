import { Routes,Route } from "react-router-dom";
import Sidebar from "./components/Navbar/sidebar";
import { Taskpanel } from "./components/task/taskpanel";


function App() {
  return (
    <div className="App" style={{backgroundColor : "#f7f7f7"}}>
    
    <Routes >
      <Route path = "/" element={<div style={{display : "flex"}}> <Sidebar /> <Taskpanel /> </div>} />
    </Routes>
    </div>
  );
}

export default App;
