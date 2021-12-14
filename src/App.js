import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages";
import SignInPage from "./pages/signin";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signin">
          <SignInPage />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
