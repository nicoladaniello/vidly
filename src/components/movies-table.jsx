import React, { Component } from "react";
import Like from "./common/like";
import TableHeder from "./common/table-header";
import TableBody from "./common/table-body";

class MoviesTable extends Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    { key: "like" },
    { key: "delete" }
  ];

  render() {
    const { movies, sortColumn, onDelete, onLike, onSort } = this.props;

    return (
      <table className="table">
        <TableHeder
          columns={this.columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
        <TableBody data={movies} />
        <tbody>
          {movies.map(movie => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like liked={movie.liked} onClick={() => onLike(movie)} />
              </td>
              <td>
                <button
                  onClick={() => onDelete(movie)}
                  className="btn btn-danger btn-sm"
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default MoviesTable;
