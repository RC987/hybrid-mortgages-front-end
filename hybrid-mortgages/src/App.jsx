import "./App.css";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <>
      <LandingPage />
      <Router>
        <Switch>
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
