import { Todoinput } from "./todoinput";
import {
  addDays,
  format,
  isToday,
  isTomorrow
} from 'date-fns'

import { HiCheck } from "react-icons/hi"
import styled from "styled-components" 
import { IconButton } from "@chakra-ui/react";

const Card = styled.div`


display : flex;
align-items :center;
width : 100%;
margin : auto ;
height : 100px;
padding : 10px;
`
const Hr = styled.hr`
background : #666;
width : 80%;

`
const H1= styled.h1`
font-size : 20px;
color : grey;
margin : 20px
`
const Add = styled.button`


`


export const Month = () => {
  
  const date = new Date();
  console.log(date)

  const shortWeekDaysArray = Array.from(Array(7)).map((e, i) => addDays(date, i))
 
  return (
    <div>
      <Card><h1>{<HiCheck style={{height : "30px",width : " 50px", color : "gray"}} />}</h1> <H1>My Upcoming</H1></Card>
      <hr style={{ backgroundColor : "gray"}} />
      {
        shortWeekDaysArray.map((day) => (isToday(day) ? <Card key={day}><H1>Today</H1> <Hr/> <Add /></Card> : isTomorrow(day) ? <Card key={day}><H1>Tomorrow</H1> <Hr/> <Add /></Card> : <Card key={day}><H1>{format(day,'EEEE')}</H1> <Hr/> <Add /></Card> ))
      }

    </div>
  )
}