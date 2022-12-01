import { Container, Box, VStack, Button } from "@chakra-ui/react";
import {
  Editable,
  EditableInput,
  EditableTextarea,
  EditablePreview,
} from "@chakra-ui/react";
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from "@chakra-ui/react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { useState } from "react";

export default function Mortgage() {
  const format = (val) => `£` + val;
  const parse = (val) => val.replace(/^\£/, "");

  const [value, setValue] = useState("500");
  return (
    <Container>
      <NumberInput
        onChange={(valueString) => setValue(parse(valueString))}
        value={format(value)}
        max={5000}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Box maxW="lg" borderWidth="10px" borderRadius="lg" overflow="hidden">
        <Stat>
          <StatLabel>Mortgage Term</StatLabel>
          <StatNumber>25 years</StatNumber>
          <StatArrow type="increase" />
        </Stat>
      </Box>
      <Box maxW="lg" borderWidth="10px" borderRadius="lg" overflow="hidden">
        <Stat>
          <StatLabel>Current Interest Rate</StatLabel>
          <StatNumber>3%</StatNumber>
          <StatArrow type="increase" />
          <StatHelpText>01 Dec</StatHelpText>
        </Stat>
      </Box>
      <Box>
        <Stat>
          <StatLabel>Remaining Balance</StatLabel>
          <StatNumber>£93,000.00</StatNumber>
        </Stat>
      </Box>
      <Box>
        <Stat>
          <StatLabel>Total Balance</StatLabel>
          <StatNumber>£275,000.00</StatNumber>
        </Stat>
      </Box>
      <Button>Update</Button>
    </Container>
  );
}
