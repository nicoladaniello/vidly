import React from "react";

const ListGroup = props => {
  const { items, onItemSelect, textProperty, valueProperty } = props;

  return (
    <ul className="list-group">
      {items.map(item => (
        <li
          key={item[valueProperty]}
          onClick={() => onItemSelect()}
          className="list-group-item list-group-item-action"
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
