import React, { Component } from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import './App.css';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Product from './components/pages/Product';
import Accounts from './components/pages/Accounts';
import Customers from './components/pages/Customers';
import Planning from './components/pages/Planning';
import Admin from './components/pages/Admin';
import SignUp from './components/pages/SignUp';

class App extends Component {
  render() {
    return (
      <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact'component={Contact} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/product' component={Product} />
          <Route path='/accounts' component={Accounts} />
          <Route path='/customers' component={Customers} />
          <Route path='/planning' component={Planning} />
          <Route path='/admin' component={Admin} />
        </Switch>
      </Router>
      </>
    );
  }
  }

export default App;
