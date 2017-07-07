import GreetingService from './greeting-service';

import DisplayGreeting from './display-greeting';
import CreateGreeting from './create-greeting';

import React, { Component } from 'react';

let greetingService = new GreetingService();

class GreetingDemo extends Component {

  render() {
    return (
      <div>
        
        <h3>Pub Sub Demo</h3>
        <CreateGreeting greetingService={greetingService} />
        
        <DisplayGreeting greetingService={greetingService} />
      </div>
    );
  }
}

export default GreetingDemo;
