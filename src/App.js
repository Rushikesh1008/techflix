import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Events from './components/pages/Events';
import Header from './components/Header';
import Home from './components/pages/Home';
import Footer from './components/Footer';
import LandingPage from './components/pages/LandingPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={LandingPage} exact={true} />
        <Route path="/events" component={Events} exact={true} />
        <Route path="/aboutus" component={Home} exact={true} />
        <Route render={() => <h2>404</h2>} />
      </Switch>
    </Router>
  );
}

export default App;
