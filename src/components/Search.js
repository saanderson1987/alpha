import React from 'react';
import styled, { css } from 'styled-components'
import { searchMovies, getFavMovie, updateFavMovie } from '../api-calls';
import merge from 'lodash/merge';
import Movie from './Movie';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', moviesByImdbId: {}, loading: false};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitEdit = this.handleSubmitEdit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({loading: true})
    searchMovies(this.state.value)
      .then(movies => {
        const moviesByImdbId = {}
        const getFavMoviePromises = [];
        for(let i = 0; i < movies.length; i++) {
          function getFavMovieInfo(i) {
            const { imdbID } = movies[i];
            getFavMoviePromises.push(getFavMovie(imdbID));
            moviesByImdbId[imdbID] = movies[i];
          }
          getFavMovieInfo(i);
        }
        console.log(movies)
        this.setState({moviesByImdbId});
        Promise.all(getFavMoviePromises).then(favMovies => {
          favMovies.forEach((favMovie, i) => {
            movies[i] = Object.assign({}, movies[i], favMovie);
            const { imdbID } = movies[i];
            moviesByImdbId[imdbID] = movies[i];
          });
          this.setState({moviesByImdbId, loading: false})
        })
      });
  }

  handleSubmitEdit({favMovieId, rating, comment}) {
    updateFavMovie({favMovieId, rating, comment})
      .then(updatedMovie => {
        const moviesByImdbId = merge(this.state.moviesByImdbId, {[updatedMovie.imdb_id]: updatedMovie});
        this.setState({moviesByImdbId});
      })
  }

  render() {
    const { value, moviesByImdbId, loading } = this.state;
    const movies = Object.values(moviesByImdbId);
    return (
      <div>
        <SearchForm onSubmit={this.handleSubmit}>
            <SearchLabel>Search by movie title:</SearchLabel>
            <SearchInput type="text" value={value} onChange={this.handleChange} />
            <SearchSubmit type="submit" value="Submit" />
        </SearchForm>
        {loading?
          <div>Loading...</div>
          : movies.map(movie => {
            return (
              <Movie key={movie.imdbID} movie={movie} handleSubmitEdit={this.handleSubmitEdit}/>
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
`

const SearchInput = styled.input`
  width: 350px;
  padding: 6px;
  border: 1px solid black;
`

const SearchSubmit = styled.input`
  margin-left: 20px;
  border: 1px solid black;
  border-radius: 3px;
  padding: 4px 16px;
`
const SearchForm = styled.form`
  margin-bottom: 30px;
`