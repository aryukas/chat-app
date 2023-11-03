import React, { useState } from 'react';
import {
  VStack,
  Input,
  Button,
  FormControl,
  FormLabel,
  Text,
  Checkbox,
  InputGroup,
  InputRightElement,
  IconButton,
  Image,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    photo: null,
    showPassword: false,
    showConfirmPassword: false,
  });

  const handleChange = (e) => {
    const { name, value, type, files, checked } = e.target;
    if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
    } else if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const togglePasswordVisibility = (field) => {
    setFormData({ ...formData, [field]: !formData[field] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form submission logic here, e.g., send the data to your server
    console.log('Form Data:', formData);
  };

  return (
    <VStack spacing={4}>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </FormControl>

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
                onClick={() => togglePasswordVisibility('showPassword')}
                icon={formData.showPassword ? <ViewOffIcon /> : <ViewIcon />}
              />
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <FormControl>
          <FormLabel>Confirm Password</FormLabel>
          <InputGroup>
            <Input
              type={formData.showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <InputRightElement>
              <IconButton
                aria-label={formData.showConfirmPassword ? 'Hide Password' : 'Show Password'}
                onClick={() => togglePasswordVisibility('showConfirmPassword')}
                icon={formData.showConfirmPassword ? <ViewOffIcon /> : <ViewIcon />}
              />
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <FormControl>
          <FormLabel>Upload Photo</FormLabel>
          <Input
            type="file"
            name="photo"
            accept="image/*"
            onChange={handleChange}
          />
        </FormControl>

        <FormControl>
          <Checkbox
            name="agreeTerms"
            isChecked={formData.agreeTerms}
            onChange={handleChange}
          >
            I agree to the terms and conditions
          </Checkbox>
        </FormControl>

        <Button colorScheme="teal" type="submit">
          Sign Up
        </Button>
      </form>
      {formData.photo && (
        <Image
          src={URL.createObjectURL(formData.photo)}
          alt="Uploaded Photo"
          maxH="150px"
          maxW="150px"
        />
      )}
    </VStack>
  );
};

export default SignUp;
