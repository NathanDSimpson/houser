import React from 'react';
import './App.css';
import { HashRouter, Switch, Route } from 'react-router-dom'
import Wizard from './components/Wizard'
import Dashboard from './components/Dashboard'
import Header from './components/Header'
import House from './components/House'


function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header/>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/wizard" component={Wizard} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
