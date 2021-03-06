import React from 'react';
import { getFavMovies, getMovieByImdbId, updateFavMovie, deleteFavMovie } from '../api-calls';
import merge from 'lodash/merge';
import Movie from './Movie';

class FavMovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmitEdit = this.handleSubmitEdit.bind(this);
    this.removeFavMovie = this.removeFavMovie.bind(this);
  }

  componentDidMount() {
    getFavMovies()
      .then(favMovies => {
        const favMoviesByImdbId = {};
        const getMoviePromises = [];
        for(let i = 0; i < favMovies.length; i++) {
          function getMovieInfo(i) {
            const { imdb_id } = favMovies[i];
            getMoviePromises.push(getMovieByImdbId(imdb_id));
          }
          getMovieInfo(i);
        }
        Promise.all(getMoviePromises).then(movies => {
          movies.forEach((movie, i) => {
            favMovies[i] =Object.assign({}, favMovies[i], movie);
            favMoviesByImdbId[favMovies[i].imdb_id] = favMovies[i];
          });
          this.setState({favMoviesByImdbId})
        })
      });
  }

  handleSubmitEdit({favMovieId, rating, comment}) {
    return updateFavMovie({favMovieId, rating, comment})
      .then(updatedMovie => {
        const favMoviesByImdbId = merge(this.state.favMoviesByImdbId, {[updatedMovie.imdb_id]: updatedMovie});
        this.setState({favMoviesByImdbId});
      })
  }

  removeFavMovie(favMovieId) {
    return deleteFavMovie(favMovieId)
      .then(deletedFavMovie => {
        const favMoviesByImdbId = Object.assign({}, this.state.favMoviesByImdbId);
        delete favMoviesByImdbId[deletedFavMovie.imdb_id];
        this.setState({favMoviesByImdbId});
      })
  }

  render() {
    if (!this.state.favMoviesByImdbId) return (<div>Loading</div>)
    const favMovies = Object.values(this.state.favMoviesByImdbId);
    return (
      <div>
        {favMovies.map(favMovie => {
          return (
            <Movie key={favMovie.id} movie={favMovie} handleSubmitEdit={this.handleSubmitEdit} removeFavMovie={this.removeFavMovie}/>
          );
        })}
      </div>
    );
  }
}



export default FavMovieList;