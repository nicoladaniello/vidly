import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import jwtDecode from "jwt-decode";
import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Customers from "./components/customers";
import LoginForm from "./components/login-form";
import MovieForm from "./components/movie-form";
import Movies from "./components/movies";
import NavBar from "./components/navbar";
import NotFound from "./components/not-found";
import RegistrationForm from "./components/registration-form";
import Rentals from "./components/rentals";
import { init as initLogService } from "./services/logService";

initLogService();

class App extends Component {
  state = {};

  componentDidMount() {
    try {
      const jwt = localStorage.getItem("token");
      const user = jwtDecode(jwt);
      this.setState({ user });
    } catch (ex) {}
  }

  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar user={this.state.user} />
        <main role="main" className="container">
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/registration" component={RegistrationForm} />
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
