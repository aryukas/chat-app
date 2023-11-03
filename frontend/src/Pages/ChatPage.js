// // test 1 chatgpt code 

// import React, { useState, useEffect } from 'react';
// import {
//   Box,
//   VStack,
//   Input,
//   Button,
//   IconButton,
//   InputGroup,
//   InputRightElement,
//   Text,
//   Avatar,
//   Spacer,
//   ChakraProvider,
//   extendTheme,
//   CSSReset,
//   List,
//   ListItem,
//   ListIcon,
// } from '@chakra-ui/react';
// import { ChatIcon, EmailIcon } from '@chakra-ui/icons';

// const customTheme = extendTheme({
//   fonts: {
//     body: 'Poppins, sans-serif',
//   },
//   colors: {
//     primary: {
//       100: '#0070f3',
//     },
//   },
// });

// const ChatApp = () => {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState('');
//   const [selectedUser, setSelectedUser] = useState('User 2'); // Selected user
//   const [sidebarOpen, setSidebarOpen] = useState(true); // Sidebar open/close state

//   useEffect(() => {
//     // Simulate initial chat messages
//     setMessages([
//       { text: 'Hello!', user: 'User 1' },
//       { text: 'Hi there!', user: 'User 2' },
//     ]);
//   }, []);

//   const handleSendMessage = () => {
//     if (newMessage.trim() === '') return;

//     const message = { text: newMessage, user: 'User 1' };

//     setMessages([...messages, message]);
//     setNewMessage('');
//   };

//   // User list for the sidebar
//   const userList = ['User 1', 'User 2', 'User 3'];

//   return (
//     <ChakraProvider theme={customTheme}>
//       <Box w="100%" h="100vh" display="flex">
//         {/* Sidebar */}
//         <Box
//           w={sidebarOpen ? '25%' : '60px'} // Adjust width based on sidebar open/close state
//           p={4}
//           bg="gray.100"
//           borderRight="1px"
//           borderColor="gray.300"
//           overflowX="hidden" // Hide overflowing content when the sidebar is closed
//           transition="0.3s width" // Add a smooth transition effect
//         >
//           <IconButton
//             icon={sidebarOpen ? <EmailIcon /> : <ChatIcon />} // Change the icon based on sidebar open/close state
//             aria-label={sidebarOpen ? 'Close Sidebar' : 'Open Sidebar'} // Update the label accordingly
//             onClick={() => setSidebarOpen(!sidebarOpen)} // Toggle sidebar open/close
//           />
//           {sidebarOpen && ( // Render sidebar content only when it's open
//             <List spacing={2}>
//               {userList.map((user, index) => (
//                 <ListItem
//                   key={index}
//                   cursor="pointer"
//                   p={2}
//                   bgColor={user === selectedUser ? 'primary.100' : 'inherit'}
//                   _hover={{ bgColor: 'primary.100' }}
//                   onClick={() => setSelectedUser(user)}
//                 >
//                   <ListIcon as={ChatIcon} />
//                   {user}
//                 </ListItem>
//               ))}
//             </List>
//           )}
//         </Box>

//         {/* Chat area */}
//         <Box w={sidebarOpen ? '75%' : '100%'} p={4}>
//           <Box
//             w="100%"
//             p={4}
//             borderWidth="1px"
//             borderRadius="lg"
//             boxShadow="md"
//             bg="white"
//             h="100%"
//           >
//             <Box h="70vh" overflowY="auto">
//               {messages.map((message, index) => (
//                 <Box
//                   key={index}
//                   mb={2}
//                   display="flex"
//                   alignItems="center"
//                   justifyContent={
//                     message.user === 'User 1' ? 'flex-end' : 'flex-start'
//                   }
//                 >
//                   {message.user !== 'User 1' && (
//                     <Avatar size="sm" name={message.user} mr={2} />
//                   )}
//                   <Box
//                     bgColor={
//                       message.user === 'User 1' ? 'primary.100' : 'gray.200'
//                     }
//                     p={3}
//                     borderRadius="lg"
//                     maxW="70%"
//                   >
//                     <Text>{message.text}</Text>
//                   </Box>
//                   {message.user === 'User 1' && (
//                     <Avatar size="sm" name={message.user} ml={2} />
//                   )}
//                 </Box>
//               ))}
//             </Box>
//             <InputGroup>
//               <Input
//                 placeholder="Type a message..."
//                 value={newMessage}
//                 onChange={(e) => setNewMessage(e.target.value)}
//               />
//               <InputRightElement>
//                 <IconButton
//                   icon={<EmailIcon />}
//                   onClick={handleSendMessage}
//                   colorScheme="primary"
//                 />
//               </InputRightElement>
//             </InputGroup>
//           </Box>
//         </Box>
//       </Box>
//     </ChakraProvider>
//   );
// };

// export default ChatApp;
