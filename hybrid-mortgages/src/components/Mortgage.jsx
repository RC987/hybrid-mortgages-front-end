import { Container, Box, VStack } from "@chakra-ui/react";
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

export default function Mortgage() {
  return (
    <Container>
      <Box maxW="lg" borderWidth="10px" borderRadius="lg" overflow="hidden">
        <p>Monthly Payment</p>
        <Editable defaultValue="£500">
          <EditablePreview />
          <EditableTextarea />
        </Editable>
      </Box>
      <Box maxW="lg" borderWidth="10px" borderRadius="lg" overflow="hidden">
        <Stat>
          <StatLabel>Current Interest Rate</StatLabel>
          <StatNumber>3%</StatNumber>
          <StatArrow type="increase" />
          <StatHelpText>01 Dec</StatHelpText>
        </Stat>
      </Box>
      {/* <VStack>
        <Button {...saveButtonProps}>Save</Button>
      </VStack> */}
    </Container>
  );
}
