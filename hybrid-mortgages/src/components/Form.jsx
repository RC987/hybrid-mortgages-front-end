import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
} from "@chakra-ui/react";

export default function Form() {
  return (
    <>
      <FormControl isRequired>
        <FormLabel>Full Name</FormLabel>
        <Input placeholder="Full name" />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Sort Code</FormLabel>
        <Input placeholder="Sort Code" />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Account Number</FormLabel>
        <Input placeholder="Account Number" />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Date of Birth</FormLabel>
        <Input placeholder="DoB" />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Address</FormLabel>
        <Input placeholder="Address" />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Annual Salary</FormLabel>
        <Input placeholder="Salary" />
      </FormControl>
      <Button>Save</Button>
    </>
  );
}
