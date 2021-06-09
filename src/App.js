import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/landing_page/Home';
import './App.css';
import About from './components/pages/landing_page/About';
import Contact from './components/pages/landing_page/Contact';
import Product from './components/pages/products/Product';
import Accounts from './components/pages/accounts_dashboard/Accounts';
import Customers from './components/pages/customers/Customers';
import Planning from './components/pages/planning/Planning';
import Admin from './components/pages/admin_dashboard/Admin';
import Dashboard from './components/pages/general_dashboard/Dashboard';
import Staff from './components/pages/admin_dashboard/Staff';
import Marketing from './components/pages/admin_dashboard/Marketing';
import Suppliers from './components/pages/admin_dashboard/Suppliers';

class App extends Component {
  render() {
    return (
      <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact'component={Contact} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/product' component={Product} />
          <Route path='/accounts' component={Accounts} />
          <Route path='/customers' component={Customers} />
          <Route path='/planning' component={Planning} />
          <Route path='/admin' component={Admin} />
          <Route path='/staff' component={Staff} />
          <Route path='/marketing' component={Marketing} />
          <Route path='/suppliers' components={Suppliers} />
        </Switch>
      </Router>
      </>
    );
  }
  }

export default App;
