import React, { Component } from "react";

class TableBody extends Component {
  render() {
    const { data, columns } = this.props;

    return (
      <tbody>
        {data.map(items => (
          <tr>
            {columns.map(c => (
              <td />
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
