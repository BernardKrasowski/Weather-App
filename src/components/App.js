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
    err: false,
  }
  changeValue = (e) => {
    this.setState({
      value: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=e3c257645ec2ec9e4f37885bac21a550`;

    fetch(API)
      .then(response => {
        if (response.ok) {
          return response
        }
        throw Error('Wrong City Name')
      })
      .then(response => response.json())
      .then(data => {
        const time = new Date().toLocaleString();

        this.setState(prevState => ({
          err: false,
          date: time,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          temp: data.main.temp,
          pressure: data.main.pressure,
          wind: data.wind.speed,
          city: prevState.value,
          value: '',
        }))
      })
      .catch(err => {
        console.log(err)
        this.setState(prevState => ({
          err: true,
          city: prevState.value,

        }))
      })
  }
  render() {
    return (
      <div className="App">
        <Form
          value={this.state.value}
          onChange={this.changeValue}
          submit={this.handleSubmit}
        />
        <Show state={this.state} />
      </div>
    );
  }
}

export default App;
