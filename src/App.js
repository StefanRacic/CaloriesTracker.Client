import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../src/pages/Home';
import About from '../src/pages/About';
import Login from '../src/components/auth/Login';
import Register from '../src/components/auth/Register';
import CalorieTracker from '../src/pages/CalorieTracker';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.css';

import NavBar from '../src/components/NavBar';
import AuthState from './context/auth/AuthState';
import MealsState from './context/meals/MealsState';

function App() {
  return (
    <AuthState>
      <MealsState>
        <Router>
          <Fragment>
            <NavBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/meals" component={CalorieTracker} />
            </Switch>
          </Fragment>
        </Router>
      </MealsState>
    </AuthState>
  );
}

export default App;
