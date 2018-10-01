import React, { Component } from "react";

class LoginForm extends Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form>
          <div class="form-group">
            <label htmlFor="username">Username</label>
            <input id="username" type="text" class="form-control" />
          </div>
          <div class="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" class="form-control" />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
