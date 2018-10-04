import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getGenres } from "../services/fakeGenreService";
import { saveMovie } from "../services/fakeMovieService";

class MovieForm extends Form {
  state = {
    data: {
      title: "",
      genre: "",
      numberInStock: "",
      dailyRentalRate: ""
    },
    errors: {},
    genreList: [{ name: "a", value: "a" }, { name: "b", value: "b" }]
  };

  schema = {
    title: Joi.string().required(),
    genre: Joi.string().required(),
    numberInStock: Joi.number()
      .min(0)
      .max(100)
      .required(),
    dailyRentalRate: Joi.number()
      .min(0)
      .max(10)
      .required()
  };

  componentDidMount() {
    const genreList = getGenres();
    this.setState({ genreList });
  }

  doSubmit() {
    const movie = this.state.data;
    saveMovie(movie);
    this.props.history.push("/movies");
  }

  render() {
    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title", "string")}
          {this.renderSelect("genre", "Genre", this.state.genreList, "_id")}
          {this.renderInput("numberInStock", "Number in stock", "number")}
          {this.renderInput("dailyRentalRate", "Rate", "number")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default MovieForm;
