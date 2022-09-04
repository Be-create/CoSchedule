import { Todoinput } from "./todoinput";
import {
  addDays,
  format,
  isToday,
  isTomorrow
} from 'date-fns'
import {
  Box,
  Flex,
} from '@chakra-ui/react'

export const  Month = ()=>{
    
      
      const date = new Date();
      console.log(date)
      
const shortWeekDaysArray = Array.from(Array(7)).map((e, i) => addDays(date, i))
 
      return (
        <div>

         {
            shortWeekDaysArray.map((day)=>(isToday(day) ? <Box key={day}><Flex  >Today <hr/></Flex></Box> : isTomorrow(day) ? <Box key={day}><Flex  >Tomorrow <hr/></Flex></Box> : <Box key={day}><Flex >{format(day,'E')} <hr/></Flex></Box>))
         }

        </div>
      )
}