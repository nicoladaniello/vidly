import _ from "lodash";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { getGenres } from "../services/genreService";
import { deleteMovie, getMovies } from "../services/movieService";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/list-group";
import Pagination from "./common/pagination";
import SearchBox from "./common/search-box";
import MoviesTable from "./movies-table";
import Header from "./Header";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    selectedGenre: null,
    pageSize: 4,
    currentPage: 1,
    sortColumn: { path: "title", order: "asc" },
    searchQuery: ""
  };

  async componentDidMount() {
    let { data: genres } = await getGenres();
    genres = [{ name: "All Genres", _id: "" }, ...genres];

    const { data: movies } = await getMovies();

    this.setState({ movies, genres });
  }

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      selectedGenre,
      sortColumn,
      searchQuery
    } = this.state;

    let filtered = allMovies;

    if (searchQuery)
      filtered = allMovies.filter(m =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (selectedGenre && selectedGenre._id)
      filtered = allMovies.filter(m => m.genre._id === selectedGenre._id);

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: movies };
  };

  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handleDelete = async movie => {
    const originalMovies = this.state.movies;

    const movies = originalMovies.filter(m => m._id !== movie._id);
    this.setState({ movies });

    try {
      await deleteMovie(movie._id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        toast.error("This movie has already been deleted");

      this.setState({ movies: originalMovies });
    }
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1, searchQuery: "" });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  handleSearch = query => {
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
  };

  render() {
    const {
      pageSize,
      currentPage,
      genres,
      selectedGenre,
      searchQuery,
      sortColumn
    } = this.state;
    const { user } = this.props;
    const { totalCount, data: movies } = this.getPagedData();

    return (
      <React.Fragment>
        <Header />
        <div className="row justify-content-center">
          {user && (
            <div className="col-12">
              <p className="text-muted">
                Welcome back{" "}
                <span className="font-weight-bold">{user.name}</span>!
              </p>
            </div>
          )}
          <div className="col-3">
            {user && user.isAdmin && (
              <Link
                to="/movies/new"
                className="btn btn-primary btn-block mb-4 shadow"
                style={{ marginBottom: "20px" }}
              >
                Add a movie
              </Link>
            )}
            <div className="card shadow mb-4">
              <div className="card-header bg-white">
                <h2 className="h5 mt-2 mb-4">Genres</h2>
              </div>
              <ListGroup
                items={genres}
                selectedItem={selectedGenre}
                onItemSelect={this.handleGenreSelect}
              />
            </div>
          </div>
          <div className="col">
            <div className="card shadow">
              <div className="card-body">
                <h2 className="h5 mb-4">Movies directory</h2>
                <div className="alert alert-info alert-sm">
                  Showing {totalCount} movies in the database
                </div>
                <SearchBox value={searchQuery} onChange={this.handleSearch} />
                <MoviesTable
                  movies={movies}
                  sortColumn={sortColumn}
                  onLike={this.handleLike}
                  onDelete={this.handleDelete}
                  onSort={this.handleSort}
                />
                <Pagination
                  itemsCount={totalCount}
                  pageSize={pageSize}
                  currentPage={currentPage}
                  onPageChange={this.handlePageChange}
                />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;
