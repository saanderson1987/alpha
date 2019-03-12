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
    .then(res => res.json()
    .then(resJSON => resJSON[0]))
}

export function getFavMovies () {
  return fetch(`favMovies?user_id=${USER_ID}`)
    .then(res => res.json())
}

export function updateRating(favMovieId, rating) {
  return fetch(`ratings`, {
    method: 'post',
    body: JSON.stringify({favMovieId, rating})
  })
    .then(res => res.json())
}

export function updateComment(favMovieId, comment) {
  return fetch(`comments`, {
    method: 'post',
    body: JSON.stringify({favMovieId, comment})
  })
    .then(res => res.json())
}

// fetch('http://www.omdbapi.com/?apikey=569a050d&t=interview with the vampire')
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(myJson) {
//     console.log(JSON.stringify(myJson));
//   });

// fetch('/users')
// .then(function(response) {
//   return response.json();
// })
// .then(function(myJson) {
//   console.log(JSON.stringify(myJson));
// });