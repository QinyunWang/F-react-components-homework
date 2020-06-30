import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Main } from '../styles';
import Chat from '../Chat/Chat';
import Welcome from '../Welcome/Welcome';
import NotFound from '../NotFound/NotFound';

class App extends Component {
  render() {
    return (
      <Main>
        <Router>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/chat" component={Chat} />
            <Route path="/notfound" component={NotFound} />
          </Switch>
        </Router>
      </Main>
    );
  }
}

export default App;
