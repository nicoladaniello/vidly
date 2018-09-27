import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Like = props => {
  return (
    <FontAwesomeIcon
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
      icon={[props.liked ? "fas" : "far", "heart"]}
    />
  );
};

export default Like;
