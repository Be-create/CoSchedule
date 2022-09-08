
import { useState, useEffect } from "react" ;
import {
    Flex,
    Box,
  } from '@chakra-ui/react';
import { Month } from './day';
  
export const Taskpanel = ()=> {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  )

  useEffect(() => {
    window
    .matchMedia("(min-width: 768px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);
    return (
        <Flex p="20px" w={matches ? "65%" : "100%"}  alignItems="center" justifyContent="center" >
        <Box
          
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative"
          w="full">
            <Month />
        </Box>
      </Flex>
  
    )
         
            
             
          
          
         
    
}