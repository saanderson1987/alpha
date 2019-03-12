const OMDB_API_KEY = '569a050d';
const USER_ID = 3;

export function searchMovies (title) {
  return fetch(`http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}`)
    .then(res => res.json()
    .then(res => res.Search))
}

export function getMovieByImdbId (imdbId) {
  return fetch(`http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${imdbId}`)
    .then(res => res.json())
}

export function getFavMovie (imdbId) {
  return fetch(`favMovie?user_id=${USER_ID}&imdb_id=${imdbId}`)
    .then(res => res.json())
    // .then(resJSON => resJSON[0]))
}

export function getFavMovies () {
  return fetch(`favMovies?user_id=${USER_ID}`)
    .then(res => res.json())
}

export function updateFavMovie({favMovieId, rating, comment}) {
  return fetch(`favMovies`, {
    method: 'post',
    body: JSON.stringify({favMovieId, rating, comment})
  })
    .then(res => res.json())
}