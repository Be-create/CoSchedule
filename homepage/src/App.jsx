import { Routes,Route } from "react-router-dom";
import { Homepage } from "./components/home";
import Sidebar from "./components/Navbar/sidebar";
import { Taskpanel } from "./components/task/taskpanel";


function App() {
  return (
    <div className="App">
    
    <Routes >
      <Route path = "/" element={<Homepage /> } />
    </Routes>
    </div>
  );
}

export default App;