import React, { Component } from 'react';
import Form from "./Form";
import Show from "./Show";
import './App.css';

class App extends Component {
  state = {
    value: "",
    date: '',
    city: '',
    sunrise: '',
    sunset: '',
    temp: '',
    pressure: '',
    wind: '',
    err: '',
  }
  changeValue = (e) => {
    this.setState({
      value: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('dziala')
  }
  render() {
    return (
      <div>
        <Form
          value={this.state.value}
          onChange={this.changeValue}
          submit={this.handleSubmit}
        />
        <Show />
      </div>
    );
  }
}

export default App;
