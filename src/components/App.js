import React, { Component } from 'react';
import { Switch, Route, BrowserRouter} from 'react-router-dom';
import Quiz from './Quiz/Quiz';
import Report from './Report/Report';
import '../sharedStyles/global.css';

class App extends Component {
  render() {
    
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/quiz' component={Quiz}/>
                <Route path='/report' render={({ location }) => <Report location={location}/>}/>
            </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
