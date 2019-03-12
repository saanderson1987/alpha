webpackHotUpdate(0,{

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.searchMovies = searchMovies;\nexports.getMovieByImdbId = getMovieByImdbId;\nexports.getFavMovie = getFavMovie;\nexports.getFavMovies = getFavMovies;\nexports.createMoviesObject = createMoviesObject;\nexports.updateRating = updateRating;\nexports.updateComment = updateComment;\nvar OMDB_API_KEY = '569a050d';\nvar USER_ID = 3;\n\nfunction searchMovies(title) {\n  return fetch('http://www.omdbapi.com/?apikey=' + OMDB_API_KEY + '&s=' + title).then(function (res) {\n    return res.json().then(function (res) {\n      return res.Search;\n    });\n  });\n}\n\nfunction getMovieByImdbId(imdbId) {\n  return fetch('http://www.omdbapi.com/?apikey=' + OMDB_API_KEY + '&i=' + imdbId).then(function (res) {\n    return res.json();\n  });\n}\n\nfunction getFavMovie(imdbId) {\n  return fetch('favMovie?user_id=' + USER_ID + '&imdb_id=' + imdbId).then(function (res) {\n    return res.json().then(function (resJSON) {\n      return resJSON[0];\n    });\n  });\n}\n\nfunction getFavMovies() {\n  return fetch('favMovies?user_id=' + USER_ID).then(function (res) {\n    return res.json().then(function (data) {\n      return createMovi;\n    });\n  });\n}\n\nfunction createMoviesObject(moviesArr) {\n  var movies = {};\n  moviesArr.forEach(function (movie) {\n    movies[movie.imdb_id] = movie;\n  });\n  return movies;\n}\n\nfunction updateRating(favMovieId, rating) {\n  return fetch('ratings', {\n    method: 'post',\n    body: JSON.stringify({ favMovieId: favMovieId, rating: rating })\n  }).then(function (res) {\n    return res.json();\n  });\n}\n\nfunction updateComment(favMovieId, comment) {\n  return fetch('comments', {\n    method: 'post',\n    body: JSON.stringify({ favMovieId: favMovieId, comment: comment })\n  }).then(function (res) {\n    return res.json();\n  });\n}\n\n// fetch('http://www.omdbapi.com/?apikey=569a050d&t=interview with the vampire')\n//   .then(function(response) {\n//     return response.json();\n//   })\n//   .then(function(myJson) {\n//     console.log(JSON.stringify(myJson));\n//   });\n\n// fetch('/users')\n// .then(function(response) {\n//   return response.json();\n// })\n// .then(function(myJson) {\n//   console.log(JSON.stringify(myJson));\n// });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBpLWNhbGxzLmpzPzFlZWYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5zZWFyY2hNb3ZpZXMgPSBzZWFyY2hNb3ZpZXM7XG5leHBvcnRzLmdldE1vdmllQnlJbWRiSWQgPSBnZXRNb3ZpZUJ5SW1kYklkO1xuZXhwb3J0cy5nZXRGYXZNb3ZpZSA9IGdldEZhdk1vdmllO1xuZXhwb3J0cy5nZXRGYXZNb3ZpZXMgPSBnZXRGYXZNb3ZpZXM7XG5leHBvcnRzLmNyZWF0ZU1vdmllc09iamVjdCA9IGNyZWF0ZU1vdmllc09iamVjdDtcbmV4cG9ydHMudXBkYXRlUmF0aW5nID0gdXBkYXRlUmF0aW5nO1xuZXhwb3J0cy51cGRhdGVDb21tZW50ID0gdXBkYXRlQ29tbWVudDtcbnZhciBPTURCX0FQSV9LRVkgPSAnNTY5YTA1MGQnO1xudmFyIFVTRVJfSUQgPSAzO1xuXG5mdW5jdGlvbiBzZWFyY2hNb3ZpZXModGl0bGUpIHtcbiAgcmV0dXJuIGZldGNoKCdodHRwOi8vd3d3Lm9tZGJhcGkuY29tLz9hcGlrZXk9JyArIE9NREJfQVBJX0tFWSArICcmcz0nICsgdGl0bGUpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgIHJldHVybiByZXMuanNvbigpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgcmV0dXJuIHJlcy5TZWFyY2g7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRNb3ZpZUJ5SW1kYklkKGltZGJJZCkge1xuICByZXR1cm4gZmV0Y2goJ2h0dHA6Ly93d3cub21kYmFwaS5jb20vP2FwaWtleT0nICsgT01EQl9BUElfS0VZICsgJyZpPScgKyBpbWRiSWQpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgIHJldHVybiByZXMuanNvbigpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0RmF2TW92aWUoaW1kYklkKSB7XG4gIHJldHVybiBmZXRjaCgnZmF2TW92aWU/dXNlcl9pZD0nICsgVVNFUl9JRCArICcmaW1kYl9pZD0nICsgaW1kYklkKS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICByZXR1cm4gcmVzLmpzb24oKS50aGVuKGZ1bmN0aW9uIChyZXNKU09OKSB7XG4gICAgICByZXR1cm4gcmVzSlNPTlswXTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldEZhdk1vdmllcygpIHtcbiAgcmV0dXJuIGZldGNoKCdmYXZNb3ZpZXM/dXNlcl9pZD0nICsgVVNFUl9JRCkudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgcmV0dXJuIHJlcy5qc29uKCkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgcmV0dXJuIGNyZWF0ZU1vdmk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNb3ZpZXNPYmplY3QobW92aWVzQXJyKSB7XG4gIHZhciBtb3ZpZXMgPSB7fTtcbiAgbW92aWVzQXJyLmZvckVhY2goZnVuY3Rpb24gKG1vdmllKSB7XG4gICAgbW92aWVzW21vdmllLmltZGJfaWRdID0gbW92aWU7XG4gIH0pO1xuICByZXR1cm4gbW92aWVzO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVSYXRpbmcoZmF2TW92aWVJZCwgcmF0aW5nKSB7XG4gIHJldHVybiBmZXRjaCgncmF0aW5ncycsIHtcbiAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGZhdk1vdmllSWQ6IGZhdk1vdmllSWQsIHJhdGluZzogcmF0aW5nIH0pXG4gIH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgIHJldHVybiByZXMuanNvbigpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQ29tbWVudChmYXZNb3ZpZUlkLCBjb21tZW50KSB7XG4gIHJldHVybiBmZXRjaCgnY29tbWVudHMnLCB7XG4gICAgbWV0aG9kOiAncG9zdCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBmYXZNb3ZpZUlkOiBmYXZNb3ZpZUlkLCBjb21tZW50OiBjb21tZW50IH0pXG4gIH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgIHJldHVybiByZXMuanNvbigpO1xuICB9KTtcbn1cblxuLy8gZmV0Y2goJ2h0dHA6Ly93d3cub21kYmFwaS5jb20vP2FwaWtleT01NjlhMDUwZCZ0PWludGVydmlldyB3aXRoIHRoZSB2YW1waXJlJylcbi8vICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbi8vICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuLy8gICB9KVxuLy8gICAudGhlbihmdW5jdGlvbihteUpzb24pIHtcbi8vICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShteUpzb24pKTtcbi8vICAgfSk7XG5cbi8vIGZldGNoKCcvdXNlcnMnKVxuLy8gLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbi8vICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbi8vIH0pXG4vLyAudGhlbihmdW5jdGlvbihteUpzb24pIHtcbi8vICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkobXlKc29uKSk7XG4vLyB9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcGktY2FsbHMuanNcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///33\n");

/***/ })

})