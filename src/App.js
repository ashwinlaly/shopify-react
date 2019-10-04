import React from 'react';
import Nav  from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import logo from './asserts/logo.png';

import Products from './components/Products';
import PageNotFound from './components/PageNotFound';

const App = () => {
  return (
    <div>
      <Navbar bg="light" class='navbar'>
        <Navbar.Brand>
          <img src={logo} />
        </Navbar.Brand>
        <Nav>
          <Nav.Link as={Link} to="/products">Products</Nav.Link>
        </Nav>
      </Navbar>
      <Switch>
        <Route path='/' exact component={ Products }/>
        <Route path='/products' component={ Products }/>
        <Route component={ PageNotFound }/>
      </Switch>
    </div>
  )
}

export default App;