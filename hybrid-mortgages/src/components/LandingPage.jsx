import { Button, ButtonGroup, Stack } from "@chakra-ui/react";
import {Routes, Route, useNavigate} from 'react-router-dom';

// import Home component
import ExistingCustomer from "./ExistingCustomer";
import NewCustomer from "./NewCustomer";
// import About component
// import About from "./components/About";


export default function LandingPage() {

  const navigate = useNavigate();

  const navigateToContacts = () => {
    // 👇️ navigate to /contacts
    navigate('/ExistingCustomer');
  };

  const navigateHome = () => {
    // 👇️ navigate to /
    navigate('/NewCustomer');
  };


  return (
    <>
      <Stack spacing={4} direction="row" align="center">
        <Button colorScheme="teal" size="lg" onClick={navigateHome}>
          New Customer
        </Button>
        <Button colorScheme="teal" size="lg" onClick={navigateToContacts}>
          Existing Customer
        </Button>
        <Routes>
          <Route path="/ExistingCustomer" element={<ExistingCustomer />} />
          <Route path="/NewCustomer" element={<NewCustomer />} />
        </Routes>
      </Stack>
    </>
  );
}






