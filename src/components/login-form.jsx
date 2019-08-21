import Joi from "joi-browser";
import React from "react";
import { Redirect, Link } from "react-router-dom";

import auth from "../services/authService";
import Form from "./common/form";

class LoginForm extends Form {
  state = {
    data: {
      email: "",
      password: ""
    },
    errors: {}
  };

  schema = {
    email: Joi.string()
      .email()
      .required()
      .label("Email"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  async doSubmit() {
    try {
      const { email, password } = this.state.data;
      await auth.login(email, password);

      const { state } = this.props.location;
      window.location = state ? state.from.pathname : "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = ex.response.data;
        this.setState({ errors });
      }
    }
  }

  render() {
    if (auth.getCurrentUser()) return <Redirect to="/" />;

    return (
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="alert small alert-warning text-center">
            To sign in as an admin you can use email{" "}
            <strong>admin@domain.com</strong> and password{" "}
            <strong>123456</strong>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-8">
          <div className="card shadow mb-4">
            <div className="card-header bg-white">
              <h1 className="h4 mb-4 text-center text-info">Sign in</h1>
            </div>
            <div className="card-body">
              <form onSubmit={this.handleSubmit} noValidate>
                {this.renderInput("email", "Email")}
                {this.renderInput("password", "Password", "password")}
                <div className="text-center">{this.renderButton("Login")}</div>
              </form>
            </div>
            <div className="card-footer bg-white border-0">
              <p className="text-center">
                <small>
                  Don't have an account?{" "}
                  <Link to="/registration">Register here</Link>.
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
