import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
} from "@chakra-ui/react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { useState } from "react";

export default function Form() {
  const format = (val) => `£` + val;
  const parse = (val) => val.replace(/^\£/, "");

  const [value, setValue] = useState("0.00");
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
      <p>Anuual Income:</p>
      <NumberInput
        onChange={(valueString) => setValue(parse(valueString))}
        value={format(value)}
        max={10000000}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Button>Save</Button>
    </>
  );
}
