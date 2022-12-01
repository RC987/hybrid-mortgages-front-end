import "./App.css";
import LandingPage from "./components/LandingPage";
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <LandingPage />
    </Router>
  );
}

export default App;
