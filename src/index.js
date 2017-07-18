import React from 'react';
import { render } from 'react-dom';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import GreetingDemo from './pub-sub/greeting-demo';
import { About } from './about';
import { SortingComponent } from './merge-sort/sorting.component';

render(
    <div>
      <h1>React Demos</h1> 
      <Router>
        <div>
          <Route path="/about" component={About}></Route>
          <Route path="/sort" component={SortingComponent}></Route>
          <Route exact path="/greeting" component={GreetingDemo}></Route>
        </div>
      </Router>
    </div>,
    document.getElementById('root')
);