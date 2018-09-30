import React from "react";
import TableHeder from "./table-header";
import TableBody from "./table-body";

const Table = props => {
  const { data, columns, sortColumn, onSort } = props;

  return (
    <table className="table">
      <TableHeder columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <TableBody data={data} columns={columns} />
    </table>
  );
};

export default Table;
