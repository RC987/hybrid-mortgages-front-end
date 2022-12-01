import { Button, ButtonGroup, Stack } from "@chakra-ui/react";
import {Routes, Route, useNavigate} from 'react-router-dom';

// import Home component
import ExistingCustomer from "./ExistingCustomer";
// import About component
// import About from "./components/About";


export default function LandingPage() {

  // const navigate = useNavigate();

  // const navigateToContacts = () => {
  //   // 👇️ navigate to /contacts
  //   navigate('/ExistingCustomer');
  // };

  // const navigateHome = () => {
  //   // 👇️ navigate to /
  //   navigate('/NewCustomer');
  // };


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






