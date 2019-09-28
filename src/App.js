import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  user = {
    name: "Ashwin"
  };

  render() {
    return (
     <h1>{user.name}</h1>
    );
  }
}

export default App;
