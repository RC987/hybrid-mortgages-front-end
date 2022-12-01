import { Button, Stack } from "@chakra-ui/react";
import Mortgage from "./Mortgage";

export default function LandingPage() {
  return (
    <>
      <Stack spacing={4} direction="row" align="center">
        <Button colorScheme="teal" size="lg">
          New Customer
        </Button>
        <Button colorScheme="teal" size="lg">
          Existing Customer
        </Button>
      </Stack>
    </>
  );
}
