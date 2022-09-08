import { useState, useEffect } from "react" ;
import {
    Flex,
    Box,
  } from '@chakra-ui/react';

  
export const Notificationpanel= ()=> {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  )

  useEffect(() => {
    window
    .matchMedia("(min-width: 768px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);
    return (
        <Flex m="10" w={matches ? "25%" : 0}  alignItems="center" justifyContent="center" bg="red" >
        <Box
    
          
          >
            
        </Box>
      </Flex>
  
    )
         
            
             
          
          
         
    
}