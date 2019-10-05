import React, { Suspense } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import Nav  from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from './asserts/logo.png';

import RotateLoader from 'react-spinners/RotateLoader';
import { css } from '@emotion/core';

const Products = React.lazy( () => import('./components/Products'));
const ProductDetails = React.lazy( () => import('./components/ProductDetails'));
const PageNotFound = React.lazy( () => import('./components/PageNotFound'));
const Login = React.lazy( () => import('./components/Auth/Login'));
const Signin = React.lazy( () => import('./components/Auth/Signin'));

const RotateLoad = () => {

  const overrider = css`
      display:block;
      margin: 0 auto;
    `;

  return (
    <>
      <RotateLoader
        css={overrider}
        sizeUnit={"px"}
        size={20}
        color={'#123abc'} loading="true"
      />
    </>
  )
}


const App = () => {

  const navLink = {
    color : 'white'
  }

  return (
    <Suspense fallback={<RotateLoad/>}>
      <div>
        <Navbar bg="dark" variant="light">
          <Navbar.Brand >
            <img src={logo} height="30" width="30" alt="San"/>
          </Navbar.Brand>
          <Nav >
            <Nav.Link as={Link} to="/products" style={navLink}>products</Nav.Link>
            <Nav.Link as={Link} to="/login" style={{ color : 'white' }}>Login</Nav.Link>
            <Nav.Link as={Link} to="/signin" style={{ color : 'white' }}>Sign in</Nav.Link>
          </Nav>
        </Navbar>
          <Switch>
            <Route path='/' exact component={ Products }/>
            <Route path='/products' component={ Products }/>
            <Route path="/product/details/:id" component= { ProductDetails } />
            <Route path="/login" component={ Login } />
            <Route path="/signin" component={ Signin } />
            <Route component={ PageNotFound }/>
          </Switch>
      </div>
    </Suspense>
  )
}

export default App;