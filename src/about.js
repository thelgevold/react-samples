import React, { Component } from 'react';
import { Route } from 'react-router-dom';

class Description extends Component {
  render() {
    return (
      <div>
        <div>More to come later</div>
      </div>
    );
  }
}

export class About extends Component {

  render() {
    return (
      <div>
        <h4>About</h4>
        <Route exact path='/about/descr' component={Description}></Route>
      </div>
    );
  }
}
