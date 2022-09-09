import Sidebar from "./Navbar/sidebar"
import { Notificationpanel } from "./notificationpanel"
import { Gettingstarted } from "./task/gettingstarted"
import { Taskpanel } from "./task/taskpanel"

export const Homepage =()=>{
return (
    <div style={{display : "flex",backgroundColor: "white"}}>
    <Sidebar />
    
    
    <Taskpanel />
    
   
    <Notificationpanel/>
    
    </div>
)
}