import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './Landing/Landing';
import Quiz from './Quiz/Quiz';
import Report from './Report/Report';

class App extends Component {
  render() {
    return (
        <Switch>
            <Route exact path='/' component={Landing}/>
            <Route path='/quiz' component={Quiz}/>
            <Route path='/report' component={Report}/>
        </Switch>
    );
  }
}

export default App;
