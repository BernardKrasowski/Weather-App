import React, { Component } from 'react';
import Form from "./Form";
import Show from "./Show";
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <Form />
        <Show />
      </div>
    );
  }
}

export default App;
