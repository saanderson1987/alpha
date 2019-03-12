import React from 'react';
import { searchMovies, getFavMovie } from '../api-calls';
import Movie from './Movie';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', movies: []};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    searchMovies(this.state.value)
      .then(movies => {
        const getFavMoviePromises = [];
        for(let i = 0; i < movies.length; i++) {
          function getFavMovieInfo(i) {
            const { imdbID } = movies[i];
            getFavMoviePromises.push(getFavMovie(imdbID))
          }
          getFavMovieInfo(i)
        }
        Promise.all(getFavMoviePromises).then(favMovies => {
          favMovies.forEach((favMovie, i) => {
            movies[i] =Object.assign({}, movies[i], favMovie);
          });
          this.setState({movies})
        })
      });
  }

  render() {
    const { value, movies } = this.state;
    return (
      <div>
        Search
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {movies.map(movie => {
          return (
            <Movie key={movie.imdbID} movie={movie}/>
          );
        })}
      </div>
    );
  }
}



export default Search;