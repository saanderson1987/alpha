webpackHotUpdate(0,{

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.searchMovies = searchMovies;\nexports.getMovieByImdbId = getMovieByImdbId;\nexports.getFavMovie = getFavMovie;\nexports.getFavMovies = getFavMovies;\nexports.updateRating = updateRating;\nvar OMDB_API_KEY = '569a050d';\nvar USER_ID = 3;\n\nfunction searchMovies(title) {\n  return fetch('http://www.omdbapi.com/?apikey=' + OMDB_API_KEY + '&s=' + title).then(function (res) {\n    return res.json().then(function (res) {\n      return res.Search;\n    });\n  });\n}\n\nfunction getMovieByImdbId(imdbId) {\n  return fetch('http://www.omdbapi.com/?apikey=' + OMDB_API_KEY + '&i=' + imdbId).then(function (res) {\n    return res.json();\n  });\n}\n\nfunction getFavMovie(imdbId) {\n  return fetch('favMovie?user_id=' + USER_ID + '&imdb_id=' + imdbId).then(function (res) {\n    return res.json().then(function (resJSON) {\n      return resJSON[0];\n    });\n  });\n}\n\nfunction getFavMovies() {\n  return fetch('favMovies?user_id=' + USER_ID).then(function (res) {\n    return res.json();\n  });\n}\n\nfunction updateRating(rating) {\n  console.log(rating);\n  return fetch('ratings', {\n    method: 'post',\n    // body: JSON.stringify({rating})\n    body: { rating: rating }\n  }).then(function (res) {\n    return res.json();\n  });\n}\n\n// fetch('http://www.omdbapi.com/?apikey=569a050d&t=interview with the vampire')\n//   .then(function(response) {\n//     return response.json();\n//   })\n//   .then(function(myJson) {\n//     console.log(JSON.stringify(myJson));\n//   });\n\n// fetch('/users')\n// .then(function(response) {\n//   return response.json();\n// })\n// .then(function(myJson) {\n//   console.log(JSON.stringify(myJson));\n// });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBpLWNhbGxzLmpzPzFlZWYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5zZWFyY2hNb3ZpZXMgPSBzZWFyY2hNb3ZpZXM7XG5leHBvcnRzLmdldE1vdmllQnlJbWRiSWQgPSBnZXRNb3ZpZUJ5SW1kYklkO1xuZXhwb3J0cy5nZXRGYXZNb3ZpZSA9IGdldEZhdk1vdmllO1xuZXhwb3J0cy5nZXRGYXZNb3ZpZXMgPSBnZXRGYXZNb3ZpZXM7XG5leHBvcnRzLnVwZGF0ZVJhdGluZyA9IHVwZGF0ZVJhdGluZztcbnZhciBPTURCX0FQSV9LRVkgPSAnNTY5YTA1MGQnO1xudmFyIFVTRVJfSUQgPSAzO1xuXG5mdW5jdGlvbiBzZWFyY2hNb3ZpZXModGl0bGUpIHtcbiAgcmV0dXJuIGZldGNoKCdodHRwOi8vd3d3Lm9tZGJhcGkuY29tLz9hcGlrZXk9JyArIE9NREJfQVBJX0tFWSArICcmcz0nICsgdGl0bGUpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgIHJldHVybiByZXMuanNvbigpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgcmV0dXJuIHJlcy5TZWFyY2g7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRNb3ZpZUJ5SW1kYklkKGltZGJJZCkge1xuICByZXR1cm4gZmV0Y2goJ2h0dHA6Ly93d3cub21kYmFwaS5jb20vP2FwaWtleT0nICsgT01EQl9BUElfS0VZICsgJyZpPScgKyBpbWRiSWQpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgIHJldHVybiByZXMuanNvbigpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0RmF2TW92aWUoaW1kYklkKSB7XG4gIHJldHVybiBmZXRjaCgnZmF2TW92aWU/dXNlcl9pZD0nICsgVVNFUl9JRCArICcmaW1kYl9pZD0nICsgaW1kYklkKS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICByZXR1cm4gcmVzLmpzb24oKS50aGVuKGZ1bmN0aW9uIChyZXNKU09OKSB7XG4gICAgICByZXR1cm4gcmVzSlNPTlswXTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldEZhdk1vdmllcygpIHtcbiAgcmV0dXJuIGZldGNoKCdmYXZNb3ZpZXM/dXNlcl9pZD0nICsgVVNFUl9JRCkudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVSYXRpbmcocmF0aW5nKSB7XG4gIGNvbnNvbGUubG9nKHJhdGluZyk7XG4gIHJldHVybiBmZXRjaCgncmF0aW5ncycsIHtcbiAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAvLyBib2R5OiBKU09OLnN0cmluZ2lmeSh7cmF0aW5nfSlcbiAgICBib2R5OiB7IHJhdGluZzogcmF0aW5nIH1cbiAgfSkudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gIH0pO1xufVxuXG4vLyBmZXRjaCgnaHR0cDovL3d3dy5vbWRiYXBpLmNvbS8/YXBpa2V5PTU2OWEwNTBkJnQ9aW50ZXJ2aWV3IHdpdGggdGhlIHZhbXBpcmUnKVxuLy8gICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuLy8gICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4vLyAgIH0pXG4vLyAgIC50aGVuKGZ1bmN0aW9uKG15SnNvbikge1xuLy8gICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KG15SnNvbikpO1xuLy8gICB9KTtcblxuLy8gZmV0Y2goJy91c2VycycpXG4vLyAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuLy8gICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuLy8gfSlcbi8vIC50aGVuKGZ1bmN0aW9uKG15SnNvbikge1xuLy8gICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShteUpzb24pKTtcbi8vIH0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwaS1jYWxscy5qc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///33\n");

/***/ })

})