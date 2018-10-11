import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./components/navbar";
import LoginForm from "./components/login-form";
import RegistrationForm from "./components/registration-form";
import MovieForm from "./components/movie-form";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/not-found";
import { ToastContainer } from "react-toastify";
import { init } from "@sentry/browser";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

init({
  dsn: "https://232e8233afc2478a966f70834da9ebd6@sentry.io/1299229"
});

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar />
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
