import "./App.css";
import LandingPage from "./components/LandingPage";
import Mortgage from "./components/Mortgage";
import Form from "./components/Form";
import NewMortgage from "./components/NewMortgage";
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <>
      {/* <LandingPage /> */}
      <Router>
        <Mortgage />
      </Router>
      {/* <Form /> */}
      <NewMortgage />
    </>


export default App;
