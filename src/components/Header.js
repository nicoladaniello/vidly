import React from "react";

const Header = () => {
  return (
    <div className="jumbotron bg-info text-white shadow-lg">
      <h1 className="h2 mb-4">Welcome to Vidly</h1>
      <p className="font-weight-light">
        Vidly is a prototype for a DVD rentals web app. The app is built in
        ReactJS, NodeJS, Bootstrap and MongoDB,
        <br />
        and it is open source on{" "}
        <a
          className="text-warning"
          href="https://github.com/nicoladaniello/vidly"
        >
          GitHub
        </a>
      </p>
    </div>
  );
};

export default Header;
