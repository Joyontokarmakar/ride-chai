import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import Login from './components/Login/Login';
import Destination from './components/Destination/Destination';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Footer from './components/Footer/Footer';

export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header/>
        <Switch>

          <Route path="/home">
            <Home/>
          </Route>

          <Route exact path="/">
            <Home/>
          </Route>

          <PrivateRoute exact path="/destination/:id">
            <Destination/>
          </PrivateRoute>

          <Route exact path="/login">
            <Login/>
          </Route>

          <Route path="*">
            <NoMatch/>
          </Route>
          
        </Switch>
        <Footer/>
      </Router>
    </userContext.Provider>
  );
}

export default App;
