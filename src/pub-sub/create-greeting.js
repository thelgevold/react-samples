import React, { Component } from 'react';

class CreateGreeting extends Component {

  constructor(props) {
    super();
    this.state = {value: ''};
    this.greetingService = props.greetingService;

    this.handleChange = this.handleChange.bind(this);
    this.sendGreeting = this.sendGreeting.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  sendGreeting() {
    this.greetingService.emit(this.state.value);
  }

  render() {
    return (
      <div>
        <h4>Create Greeting</h4>
        <input type="text" onChange={this.handleChange} />
        <button onClick={this.sendGreeting}>Submit</button>
      </div>
    );
  }
}

export default CreateGreeting;
