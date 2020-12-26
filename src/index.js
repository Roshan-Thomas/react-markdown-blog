import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import './index.css';
import Home from './pages/home'
import About from './pages/about'
import Post from './pages/post'
import NotFound from './pages/notfound';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/post/:id" render={props => <Post {...props} />} />
      <Route path="/404" component={NotFound} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

