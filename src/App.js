import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>

        {/* <Route path="/club-detail/:idTeam">
        </Route> */}

        <Route exact path="/">
          <Home/>
        </Route>

        <Route path="*">
          <NoMatch/>
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
