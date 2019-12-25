import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../src/pages/Home';
import About from '../src/pages/About';
import Login from '../src/components/auth/Login';
import Register from '../src/components/auth/Register';

import 'bulma/css/bulma.css';

import NavBar from '../src/components/NavBar';

function App() {
  return (
    <Router>
      <Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
