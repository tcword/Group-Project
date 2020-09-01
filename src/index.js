import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import "./index.css";
import Home from "./Home";
import Order from "./Order";
import Team from './Team';
import Story from './Story';
import Location from './Location'
import GoogleMap from './Location';
import State from "./State";
import navScroll from "./navScroll";
import * as serviceWorker from "./serviceWorker";
import ScrollToTop from "./ScrollToTop";

ReactDOM.render(
  <Router>
    <ScrollToTop/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/order" component={Order} />
      <Route exact path="/team" component={Team} />
      <Route exact path="/story" component={Story} />
      <Route exact path="/location" component={GoogleMap} />
      {/* <State/> */}
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
