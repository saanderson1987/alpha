import React from 'react';
import { getFavMovies, getMovieByImdbId } from '../api-calls';
import Movie from './Movie';

class FavMovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favMovies: []};
  }

  componentDidMount() {
    getFavMovies()
      .then(favMovies => {
        console.log(favMovies)
        const getMoviePromises = [];
        for(let i = 0; i < favMovies.length; i++) {
          function getMovieInfo(i) {
            const { imdb_id } = favMovies[i];
            getMoviePromises.push(getMovieByImdbId(imdb_id))
          }
          getMovieInfo(i)
        }
        Promise.all(getMoviePromises).then(movies => {
          movies.forEach((movie, i) => {
            favMovies[i] =Object.assign({}, favMovies[i], movie);
          });
          this.setState({favMovies})
        })
      });
  }

  render() {
    const { favMovies } = this.state;
    return (
      <div>
        <h2>Favorite Movies</h2>
        {favMovies.map(favMovie => {
          return (
            <Movie key={favMovie.id} movie={favMovie}/>
          );
        })}
      </div>
    );
  }
}



export default FavMovieList;