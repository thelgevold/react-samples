import React, { Component } from 'react';

class DisplayGreeting extends Component {

  constructor(props) {
    super();

    this.state = {greeting: ''};

    this.stopGreetings = this.stopGreetings.bind(this);

    this.greetingService = props.greetingService;
    this.subscription = this.greetingService
        .greetings()
        .subscribe(res => {
          this.setState({greeting: res});
        });
  }

  render() {
    let greeting = this.state.greeting;
    return (
      <div>
        <h4>Display Greeting</h4>
        <div>{greeting}</div>
        <button onClick={this.stopGreetings}>Stop</button>
      </div>
    );
  }

  stopGreetings() {
    this.subscription.unsubscribe();
  }
}

export default DisplayGreeting;
