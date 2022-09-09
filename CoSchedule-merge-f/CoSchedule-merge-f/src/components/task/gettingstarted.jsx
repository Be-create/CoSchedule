import { useState, useEffect } from "react" ;
import {
    Flex,
    Box,
    CircularProgress,
    CircularProgressLabel,
  } from '@chakra-ui/react';
  import {FaCheckCircle,FaTimesCircle,FaAngleRight,FaTrophy} from "react-icons/fa"
import styled from "styled-components";
  const Headp= styled.p`
  font-size : 15px;
  color : #4D4D4D;
  
  `
  const Bodyp = styled.p`
  font-size : 10px;
  color : gray
  
  
  `
  const Move = styled(FaAngleRight)`
  color : gray;
  `
  const Cross = styled(FaTimesCircle)`
  color:gray;
  height : 20px;
  font-size:1.5em;
  margin : 5px;
  
  `
  const Right = styled(FaCheckCircle)`
  color:green;
  height : 20px;
  font-size:1.5em;
  margin : 5px;
  
  `
  const H1 = styled.h1`
  color : #4D4D4D;
  font-size : 25px;
  margin : 10px;
  font-style : Bold;
  `
  const Trophy = styled(FaTrophy)
  `
  color : yellow;
  font-size : 2.5 em
  
  `
export const Gettingstarted = ()=> {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  )

  useEffect(() => {
    window
    .matchMedia("(min-width: 768px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);
    return (
        
        <>
        <Flex style={{alignItems : "center"}}>
            <Trophy />
           <H1>Getting Started</H1> </Flex>
           <Headp>Successful marketers complete these milestones within their first week.</Headp>
        <Box
          h={matches ? "350px": "fit-content"}
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative"
          w="full"
          mb="2.5"
          display="flex"
          >
            <Box
            display="flex"
            flexWrap="wrap"
            
            >
                <Box
            h="fit-content"
            w={matches ? "300px" : "full"}
            m="10px"
            border=" 1px solid #e6e6e6"
            borderRadius = "10px"
            padding="20px"
            >
                <Flex style={{alignItems : "center"}}>
                    <Cross />
            <div>
            <Headp >View the Getting Started Guide</Headp>
            <Bodyp>Get tips  best practices to organize all of your marketing on your
              new calendar.</Bodyp>
            </div>
            <Move />

          </Flex>
      
            </Box>
            <Box
            h="fit-content"
            w={matches ? "300px" : "full"}
            m="10px"
            border="1px solid #e6e6e6"
            borderRadius = "10px"
            padding="20px"
            >
                <Flex style={{alignItems : "center"}}>
                    <Cross />
                    <div>
            <Headp class="margin-0 bold margin-bottom-5">Connect an integration</Headp>
            <Bodyp class="margin-0 small gray-4-color">Sync content from your favorite tools like WordPress, Mailchimp,
              Facebook, Twitter,  more.</Bodyp>
          </div>
            <Move />
          </Flex>
      
            </Box>
            <Box
            h="fit-content"
            w={matches ? "300px" : "full"}
            m="10px"
            border="1px solid #e6e6e6"
            borderRadius = "10px"
            padding="20px"
            >
                <Flex style={{alignItems : "center"}}>
                    <Cross />
                    <div>
            <Headp class="margin-0 bold margin-bottom-5">Connect an integration</Headp>
            <Bodyp class="margin-0 small gray-4-color">Sync content from your favorite tools like WordPress, Mailchimp,
              Facebook, Twitter, &amp; more.</Bodyp>
          </div>
            <Move />
          </Flex>
      
            </Box>
            <Box
            h="fit-content"
            w={matches ? "300px" : "full"}
            m="10px"
            border="1px solid #e6e6e6"
            borderRadius = "10px"
            padding="20px"
            >
                <Flex style={{alignItems : "center"}}>
                    <Right />
                    <div>
            <Headp class="margin-0 bold margin-bottom-5">Create a social message</Headp>
            <Bodyp class="margin-0 small gray-4-color">Schedule &amp; publish social messages on Facebook, Instagram, LinkedIn,
              Pinterest, &amp; Twitter.</Bodyp>
          </div>
            <Move />
          </Flex>
      
            </Box>
            <Box
            h="fit-content"
            w={matches ? "300px" : "full"}
            m="10px"
            border="1px solid #e6e6e6"
            borderRadius = "10px"
            padding="20px"
            >
                <Flex style={{alignItems : "center"}}>
                    <Right />
                    <div>
            <Headp class="margin-0 bold margin-bottom-5">Customize your calendar</Headp>
            <Bodyp class="margin-0 small gray-4-color">Update your settings to visually organize your calendar with color
              labels, project types, &amp; tags.</Bodyp>
          </div>
            <Move />
          </Flex>
      
            </Box>
            </Box>
           <Box h="fit-content" mt="20" justifyContent="center"display={matches ? "block " : "none"}>
           <CircularProgress isIndeterminate value={40} color='green.400' size='150px'>
  <CircularProgressLabel color="gray">40%</CircularProgressLabel>
</CircularProgress>
           </Box>
        </Box>
        </>
      
  
    )
         
            
             
          
          
         
    
}