import Sidebar from "./Navbar/sidebar"
import { Notificationpanel } from "./notificationpanel"
import { Taskpanel } from "./task/taskpanel"

export const Homepage =()=>{
return (
    <div style={{display: "flex"}}>
    <Sidebar />
    <Taskpanel />
    <Notificationpanel/>
    
    </div>
)
}