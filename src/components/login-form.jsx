import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { login } from "../services/authService";

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
      const { data: jwt } = await login(email, password);
      localStorage.setItem("token", jwt);
      this.props.history.push("/");
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = ex.response.data;
        this.setState({ errors });
      }
    }
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit} noValidate>
          {this.renderInput("email", "Email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
