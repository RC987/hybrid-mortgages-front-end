import { Button, ButtonGroup, Stack } from "@chakra-ui/react";

export default function LandingPage() {
  return (
    <>
      <Stack spacing={4} direction="row" align="center">
        <Button colorScheme="teal" size="lg">
          New Customer
        </Button>
        <Button colorScheme="teal" size="lg">
          Exsisitng Customer
        </Button>
      </Stack>
    </>
  );
}
