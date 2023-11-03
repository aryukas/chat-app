import React from 'react';
import { Container, Box, Text, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import Login from '../components/Aunthentication/Login';
import SignUp from '../components/Aunthentication/SignUp';






const Homepage = () => {
  return (
    <Container maxW='xl' centerContent>
      <Box
        display='flex'
        justifyContent='center'
        p={2}
        bg='rgba(255, 255, 255, 0.5)' // Transparent white background
        w='100%'
        m={10}
        borderRadius='lg'
        borderWidth='5px'
        borderColor='none'
      >
        <Text fontSize='4xl' fontFamily='Work Sans' color='black'>
          Talk-A-Tive
        </Text>
      </Box>
      <Box
        bg='rgba(255, 255, 255, 0.5)' // Transparent white background
        w='100%'
        p={4}
        borderRadius='lg'
        borderWidth='5px'
 
      >
        <Tabs variant='soft-rounded' colorScheme='blue'>
          <TabList mb='1em'>
            <Tab width="50%">Login</Tab>
            <Tab width="50%">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />

            </TabPanel>
            <TabPanel>
              <SignUp />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;
