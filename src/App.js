import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import GreetingService from './pub-sub/greeting-service';

import DisplayGreeting from './pub-sub/display-greeting';
import CreateGreeting from './pub-sub/create-greeting';

let greetingService = new GreetingService();
class App extends Component {

  constructor() {
    super();

  }

  render() {
    return (
      <div className="App">
        
        <h3>Pub Sub Demo</h3>
        <CreateGreeting greetingService={greetingService} />
        
        <DisplayGreeting greetingService={greetingService} />
      </div>
    );
  }
}

export default App;
