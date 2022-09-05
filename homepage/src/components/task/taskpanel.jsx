

import {
    Flex,
    Box,
  } from '@chakra-ui/react';
import { Month } from './day';
  
export const Taskpanel = ()=> {
    
    return (
        <Flex p="20px" w="70%"  alignItems="center" justifyContent="center" >
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