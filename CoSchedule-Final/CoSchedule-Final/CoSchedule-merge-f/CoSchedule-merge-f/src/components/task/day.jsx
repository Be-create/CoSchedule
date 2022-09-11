import { Todoinput } from "./todoinput";
import {
  addDays,
  format,
  isToday,
  isTomorrow
} from 'date-fns'

import { HiCheck } from "react-icons/hi"
import { MdAdd } from "react-icons/md"

import styled from "styled-components"
import { IconButton, Flex, color,Box } from "@chakra-ui/react";
import { useRef, useState } from "react";

const Card = styled.div`
display : flex;
align-items :center;
width : 100%;
margin : auto ;
height : fit-content;
padding : 10px;
`
const Hr = styled.hr`
background : #666;
width : 80%;
`
const H1 = styled.h1`
font-size : 20px;
color : grey;
margin : 20px
`
const Add = styled.button`
margin : 20px;
visibility :hidden;
${Card}:hover & {
  visibility : visible;
}
`
const Topbutton = styled.button`
background-color: #d17760;
position: absolute;
top : 0;
right: 0;
display: flex;
align-items: center, justify-content: center;
padding: 10px;
border-radius: 10px;
margin : 30px
`
const Toptaskdiv = styled.div`
position : relative ;
`

export const Month = () => {

  const date = new Date();
  //console.log(date)
 
  const shortWeekDaysArray = Array.from(Array(7)).map((e, i) => addDays(date, i))
  
  return (
    <div style={{height : "700px"}}>
      <Toptaskdiv>
        <Card>

          <h1>

            {<HiCheck style={{ height: "30px", width: " 50px", color: "gray" }} />}

          </h1>
          <H1>My Upcoming</H1>
        </Card>
        <Topbutton>
           <h2 style={{color:"white"}}>Add Task</h2>
        </Topbutton>
        <hr style={{ backgroundColor: "white" }} />
      </Toptaskdiv>



      {

        shortWeekDaysArray.map((day) =>
        (isToday(day) ?
          <div key={day} >
            <Card  ><H1>Today</H1> <Hr />
              <Add >{<MdAdd style={{ width: "fit-content", fill: "grey" }} />}</Add></Card>
            
            

          </div>

          : isTomorrow(day) ?
            <div key={day}><Card ><H1>Tomorrow</H1>
              <Hr />
              <Add >{<MdAdd style={{ width: "fit-content", fill: "grey" }} />}
              </Add>
            </Card>
            
            </div>


            : <div key={day}>
              <Card ><H1>{format(day, 'EEEE')}</H1>
                <Hr />
                <Add >{<MdAdd style={{ width: "fit-content", fill: "grey"}} />}
                </Add>
                
              </Card>
             
            </div>))
      }

    </div>
  )
}