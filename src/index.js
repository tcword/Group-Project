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
import Home from "./routes/Home";
import Order from "./routes/Order";
import Team from './routes/Team';
import Story from './routes/Story';
import Location from './routes/Location'
import GoogleMap from './routes/Location';
import State from "./components/State";
import navScroll from "./components/navScroll";
import * as serviceWorker from "./other/serviceWorker";
import ScrollToTop from "./components/ScrollToTop";

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
