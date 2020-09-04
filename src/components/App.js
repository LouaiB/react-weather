import React from 'react';
import '../styles/App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './Header';
import About from './About';
import Weather from './Weather';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/weather">
          <Weather />
        </Route>
        <Route path="/">
          <Weather />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
