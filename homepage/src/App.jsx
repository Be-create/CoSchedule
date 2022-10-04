import { Routes,Route } from "react-router-dom";
import { Homepage } from "./components/home";
import Sidebar from "./components/Navbar/sidebar";
import { Taskpanel } from "./components/task/taskpanel";
import { Provider} from 'react-redux'
import { store} from "./Redux/store.js"

function App() {
  return (
    <Provider store={store}>
      <div className="App">
    
    <Routes >
      <Route path = "/" element={<Homepage /> } />
    </Routes>
    </div>
    </Provider>
  );
}

export default App;
