import React, { useState } from 'react';
import {
  VStack,
  Input,
  Button,
  FormControl,
  FormLabel,
  Checkbox,
  InputGroup,
  InputRightElement,
  IconButton,
  Image,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import axios from 'axios'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    showPassword: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // axios.post()
  };

  const togglePasswordVisibility = () => {
    setFormData({ ...formData, showPassword: !formData.showPassword });
  };

  const handleLogin = () => {
    // hers cones the logic
    console.log('Logging in with data:', formData);
  };

  return (
    <VStack spacing={4}>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={formData.showPassword ? 'text' : 'password'}
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <InputRightElement>
            <IconButton
              aria-label={formData.showPassword ? 'Hide Password' : 'Show Password'}
              onClick={togglePasswordVisibility}
              icon={formData.showPassword ? <ViewOffIcon /> : <ViewIcon />}
            />
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <Button
        colorScheme="red"
        onClick={handleLogin}
      >
        Get User Credentials
      </Button>

      <Button colorScheme="teal" onClick={handleLogin}>
        Login
      </Button>
    </VStack>
  );
};

export default Login;
