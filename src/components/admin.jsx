import React from "react";
import Movies from "./movies";

const Admin = ({ user = {} }) => {
  return <Movies user={user} />;
};

export default Admin;
