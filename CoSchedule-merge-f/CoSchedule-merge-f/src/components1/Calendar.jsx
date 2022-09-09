import {React, useEffect, useState} from "react";
import "./Calendar.css"
import { VscAdd } from "react-icons/vsc";
import { IoIosCloseCircleOutline} from "react-icons/io";
import {useDispatch, useSelector} from "react-redux"
 import { loadUsers, updateUser,  } from "../reduxSunday1/action";
import {useNavigate} from "react-router-dom"
import Sidebar from "../components/Navbar/sidebar"


const Calendar = ()=>{

  const navigate = useNavigate()


let dispatch = useDispatch();
const {users} = useSelector(state => state.data)

console.log("user", users);
useEffect(()=>{

dispatch(loadUsers());



},[]);


const [state, setState] = useState({
    name: "",

});

const [state1, setState1] = useState({
    name: "",

});


  //let{id} = useParams()

  const {name} = state;
 
  
const handleUpdate = (id)=>{
   // e.preventDefault();

    dispatch(updateUser(state, id));
     window.location.reload();
   
  
}
const [number, setNumber] = useState(0)
const [form, setForm] = useState(false);

const handleInput = (id)=>{

   console.log("input");
   setForm(true)
  setNumber(id)

 
}
console.log("number",number);

// for inputs
// 


const handleSubmit = (id)=>{
    dispatch(updateUser(state1,id))
    setForm(false)
  //  window.location.reload()
window.location.reload();
}

const handleInputChange = (e)=>{
   let{name, value} = e.target;
 setState1({...state1, [name]: value})
};

return(
<>
<div className="baap"> 
<div className="sideBar"><Sidebar/></div>




{form ? 

<div className="divForm">

<form onSubmit={()=>handleSubmit(number)}>

        <input id="text"
          type="text" 
        placeholder="Enter Your Agenda"
        name="name" onChange={handleInputChange}
        />
        <br/>
        
        <input id="submit" type="submit"/>
        
    </form>

    </div>
  : 


<div className="parent"> 
{/* <div className="btnDiv" >
    <button className="btn">+ create</button>
<button className="btn1" >ideas</button>
</div> */}

<div className="dayName">
<p>SUNDAY</p>
<p>MONDAY</p>
<p>TUESDAY</p>
<p>WEDNESDAY</p>
<p>THURSDAY</p>
<p>FRIDAY</p>
<p>SATURDAY</p>
</div>
 

<div className="mapParent">




 {users && users.map((elem) => { return(
    
 
 <div className="mapContainer">   <div className="mapDayName"><b> 
   {elem.dayName} <p>Day {elem.id}</p>  <h3 onClick={()=>handleInput(elem.id)}> < VscAdd/>  </h3> </b> 
    {elem.name ===""? false:<div
     className="mapBox"> <b>{elem.name} </b> <i onClick={()=>handleUpdate(elem.id)}><IoIosCloseCircleOutline/></i>  </div>}</div>
 
 
 </div>
 

)})} 
</div>

</div>
}

</div>
</>



)


}
export default Calendar;