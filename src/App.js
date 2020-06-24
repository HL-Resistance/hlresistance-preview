import React from 'react';
import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './Home';
import { About } from './Hololive';
import { Community } from './Community';
import { NoMatch } from './NoMatch';
import { Creative } from './Creative';
import { Translation } from './Translation';
import NavigationBar from './components/NavigationBar';

export class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* //imported from components/navigationBar.js */}
        <NavigationBar></NavigationBar>
        <HashRouter>
          <Router> {/* //Handles link to all component */}
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route path="/about" component={About}></Route>
              <Route path="/community" component={Community}></Route>
              <Route path="/creative" component={Creative}></Route>
              <Route path="/translation" component={Translation}></Route>
              <Route component={NoMatch}></Route>
              {/* //if end of path does not match any of the path="/xxx" will routh to NoMatch.js */}
            </Switch>
          </Router>
        </HashRouter>
      </React.Fragment>
    );
  }
}



export default App;
