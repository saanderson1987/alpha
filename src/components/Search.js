import React from 'react';
import styled, { css } from 'styled-components'
import { searchMovies, getFavMovie, updateFavMovie, createFavMovie, deleteFavMovie } from '../api-calls';
import merge from 'lodash/merge';
import Movie from './Movie';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', moviesByImdbId: {}, isLoading: false, error: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitEdit = this.handleSubmitEdit.bind(this);
    this.addToFavMovies = this.addToFavMovies.bind(this);
    this.removeFavMovie = this.removeFavMovie.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({isLoading: true, error: ''})
    searchMovies(this.state.value)
      .then(res => {
        if (res.Response === "True") {
          const movies = res.Search;
          const moviesByImdbId = {};
          const getFavMoviePromises = [];
          for(let i = 0; i < movies.length; i++) {
            function getFavMovieInfo(i) {
              const { imdbID } = movies[i];
              getFavMoviePromises.push(getFavMovie(imdbID));
              moviesByImdbId[imdbID] = movies[i];
            }
            getFavMovieInfo(i);
          }
          this.setState({moviesByImdbId});
          Promise.all(getFavMoviePromises).then(favMovies => {
            favMovies.forEach((favMovie, i) => {
              movies[i] = Object.assign({}, movies[i], favMovie);
              const { imdbID } = movies[i];
              moviesByImdbId[imdbID] = movies[i];
            });
            this.setState({moviesByImdbId, isLoading: false})
          })
        }
        else {
          this.setState({error: res.Error, isLoading: false})
        }
      });
  }

  handleSubmitEdit({favMovieId, rating, comment}) {
    return updateFavMovie({favMovieId, rating, comment})
      .then(updatedMovie => {
        const moviesByImdbId = merge(this.state.moviesByImdbId, {[updatedMovie.imdb_id]: updatedMovie});
        this.setState({moviesByImdbId});
      })
  }

  addToFavMovies(imdbID) {
    return createFavMovie({imdb_id: imdbID})
      .then(newFavMovie => {
        const moviesByImdbId = merge(this.state.moviesByImdbId, {[newFavMovie.imdb_id]: newFavMovie});
        this.setState({moviesByImdbId});
      })
  }

  removeFavMovie(favMovieId) {
    return deleteFavMovie(favMovieId)
      .then(deletedFavMovie => {
        const moviesByImdbId = Object.assign({}, this.state.moviesByImdbId);
        const favMovieFields = ['comment', 'created_at', 'id', 'imdb_id', 'rating', 'updated_at', 'user_id']
        favMovieFields.forEach(field => delete moviesByImdbId[deletedFavMovie.imdb_id][field]);
        this.setState({moviesByImdbId});
      })
  }

  render() {
    const { value, moviesByImdbId, isLoading, error } = this.state;
    const movies = Object.values(moviesByImdbId);
    return (
      <div>
        <SearchForm onSubmit={this.handleSubmit}>
            <SearchLabel>Search by movie title:</SearchLabel>
            <SearchInput type="text" value={value} onChange={this.handleChange} />
            <SearchSubmit type="submit" value="Submit" />
        </SearchForm>
        {isLoading?
          <div>Loading...</div>
          : error ? 
            <div>{error}</div>
            : movies.map(movie => {
            return (
              <Movie key={movie.imdbID} movie={movie} addToFavMovies={this.addToFavMovies} handleSubmitEdit={this.handleSubmitEdit} removeFavMovie={this.removeFavMovie}/>
            );
          })
        }
      </div>
    );
  }
}

export default Search;

const SearchLabel = styled.div`
  margin-bottom: 10px;
  font-size: 18px;
`

const SearchInput = styled.input`
  width: 350px;
  padding: 10px;
  border: 1px solid #d2d2d2;
  font-family: 'Lora', serif;
  font-size: 16px;
`

const SearchSubmit = styled.input`
  margin-left: 20px;
  border: 1px solid #d2d2d2;
  border-radius: 3px;
  padding: 4px 16px;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
`
const SearchForm = styled.form`
  margin-bottom: 30px;
`