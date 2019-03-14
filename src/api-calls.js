const OMDB_API_KEY = '569a050d';
const USER_ID = 3;

export function searchMovies (title) {
  return fetch(`http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}`)
    .then(res => res.json())
}

export function getMovieByImdbId (imdbId) {
  return fetch(`http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${imdbId}`)
    .then(res => res.json())
}

export function getFavMovie (imdbId) {
  return fetch(`favMovie?user_id=${USER_ID}&imdb_id=${imdbId}`)
    .then(res => res.json())
}

export function getFavMovies () {
  return fetch(`favMovies?user_id=${USER_ID}`)
    .then(res => res.json())
}

export function updateFavMovie({favMovieId, rating, comment}) {
  return fetch(`favMovies/${favMovieId}`, {
    method: 'put',
    body: JSON.stringify({rating, comment})
  })
    .then(res => res.json())
}

export function createFavMovie(favMovie) {
  favMovie.user_id = USER_ID;
  return fetch('favMovies', {
    method: 'post',
    body: JSON.stringify({favMovie})
  })
    .then(res => res.json())
}

export function deleteFavMovie(favMovieId) {
  return fetch(`favMovies/${favMovieId}`, {
    method: 'delete',
  })
    .then(res => res.json())
}