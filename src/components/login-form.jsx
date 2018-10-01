import React, { Component } from "react";

class LoginForm extends Component {
  username = React.createRef();

  // componentDidMount() {
  //   this.username.current.focus();
  // }

  handleSubmit = e => {
    e.preventDefault();
    const username = this.username.current.value;
    console.log(username);
  };
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              ref={this.username}
              autoFocus
              id="username"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" className="form-control" />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
