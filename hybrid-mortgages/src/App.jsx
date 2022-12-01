import "./App.css";
import LandingPage from "./components/LandingPage";
import Mortgage from "./components/Mortgage";
import Form from "./components/Form";
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <>
      {/* <LandingPage /> */}
          <Router>
            <Mortgage />
          </Router>
      {/* <Form /> */}
    </>


export default App;
