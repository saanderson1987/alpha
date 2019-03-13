webpackHotUpdate(0,{

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _templateObject = _taggedTemplateLiteral(['\\n  border: 1px solid black;\\n  margin-bottom: 30px;\\n  width: 650px;\\n  padding: 20px;\\n  overflow: auto;\\n  display: flex;\\n'], ['\\n  border: 1px solid black;\\n  margin-bottom: 30px;\\n  width: 650px;\\n  padding: 20px;\\n  overflow: auto;\\n  display: flex;\\n']),\n    _templateObject2 = _taggedTemplateLiteral(['\\n  width: 150px;\\n  height: 225px;\\n  // float: left;\\n'], ['\\n  width: 150px;\\n  height: 225px;\\n  // float: left;\\n']),\n    _templateObject3 = _taggedTemplateLiteral(['\\n  margin-left: 20px;\\n'], ['\\n  margin-left: 20px;\\n']),\n    _templateObject4 = _taggedTemplateLiteral(['\\n  margin: 10px 0px;\\n'], ['\\n  margin: 10px 0px;\\n']),\n    _templateObject5 = _taggedTemplateLiteral(['\\n  font-size: 26px;\\n'], ['\\n  font-size: 26px;\\n']);\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _styledComponents = __webpack_require__(12);\n\nvar _styledComponents2 = _interopRequireDefault(_styledComponents);\n\nvar _EditFavMovie = __webpack_require__(48);\n\nvar _EditFavMovie2 = _interopRequireDefault(_EditFavMovie);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\nvar Movie = function Movie(props) {\n  var movie = props.movie || {};\n  var Title = movie.Title,\n      Year = movie.Year,\n      Plot = movie.Plot,\n      rating = movie.rating,\n      comment = movie.comment,\n      id = movie.id;\n\n  var posterURL = movie.Poster || 'https://2fm.rte.ie/wp-content/uploads/2016/03/Film-Reel.jpg';\n  return _react2.default.createElement(\n    MovieBox,\n    null,\n    _react2.default.createElement(MoviePoster, { src: posterURL }),\n    _react2.default.createElement(\n      MovieInfo,\n      null,\n      _react2.default.createElement(\n        MovieTitle,\n        null,\n        Title\n      ),\n      _react2.default.createElement(\n        MovieInfoItem,\n        null,\n        Year\n      ),\n      _react2.default.createElement(\n        MovieInfoItem,\n        null,\n        Plot\n      ),\n      _react2.default.createElement(\n        FavMovieInfo,\n        null,\n        _react2.default.createElement(\n          MovieInfoItem,\n          null,\n          'My Rating: ',\n          rating\n        ),\n        _react2.default.createElement(\n          MovieInfoItem,\n          null,\n          'My Comment: ',\n          comment\n        )\n      )\n    )\n  );\n};\n\nexports.default = Movie;\n\n\nvar MovieBox = _styledComponents2.default.div(_templateObject);\nvar MoviePoster = _styledComponents2.default.img(_templateObject2);\n\nvar MovieInfo = _styledComponents2.default.div(_templateObject3);\n\nvar MovieInfoItem = _styledComponents2.default.div(_templateObject4);\nvar MovieTitle = _styledComponents2.default.div(_templateObject5);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Nb3ZpZS5qcz83ZjQ3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF90ZW1wbGF0ZU9iamVjdCA9IF90YWdnZWRUZW1wbGF0ZUxpdGVyYWwoWydcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gIHdpZHRoOiA2NTBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuJ10sIFsnXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICB3aWR0aDogNjUwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiddKSxcbiAgICBfdGVtcGxhdGVPYmplY3QyID0gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbChbJ1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgaGVpZ2h0OiAyMjVweDtcXG4gIC8vIGZsb2F0OiBsZWZ0O1xcbiddLCBbJ1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgaGVpZ2h0OiAyMjVweDtcXG4gIC8vIGZsb2F0OiBsZWZ0O1xcbiddKSxcbiAgICBfdGVtcGxhdGVPYmplY3QzID0gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbChbJ1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuJ10sIFsnXFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG4nXSksXG4gICAgX3RlbXBsYXRlT2JqZWN0NCA9IF90YWdnZWRUZW1wbGF0ZUxpdGVyYWwoWydcXG4gIG1hcmdpbjogMTBweCAwcHg7XFxuJ10sIFsnXFxuICBtYXJnaW46IDEwcHggMHB4O1xcbiddKSxcbiAgICBfdGVtcGxhdGVPYmplY3Q1ID0gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbChbJ1xcbiAgZm9udC1zaXplOiAyNnB4O1xcbiddLCBbJ1xcbiAgZm9udC1zaXplOiAyNnB4O1xcbiddKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3N0eWxlZENvbXBvbmVudHMgPSByZXF1aXJlKCdzdHlsZWQtY29tcG9uZW50cycpO1xuXG52YXIgX3N0eWxlZENvbXBvbmVudHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3R5bGVkQ29tcG9uZW50cyk7XG5cbnZhciBfRWRpdEZhdk1vdmllID0gcmVxdWlyZSgnLi9FZGl0RmF2TW92aWUnKTtcblxudmFyIF9FZGl0RmF2TW92aWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRWRpdEZhdk1vdmllKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbChzdHJpbmdzLCByYXcpIHsgcmV0dXJuIE9iamVjdC5mcmVlemUoT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoc3RyaW5ncywgeyByYXc6IHsgdmFsdWU6IE9iamVjdC5mcmVlemUocmF3KSB9IH0pKTsgfVxuXG52YXIgTW92aWUgPSBmdW5jdGlvbiBNb3ZpZShwcm9wcykge1xuICB2YXIgbW92aWUgPSBwcm9wcy5tb3ZpZSB8fCB7fTtcbiAgdmFyIFRpdGxlID0gbW92aWUuVGl0bGUsXG4gICAgICBZZWFyID0gbW92aWUuWWVhcixcbiAgICAgIFBsb3QgPSBtb3ZpZS5QbG90LFxuICAgICAgcmF0aW5nID0gbW92aWUucmF0aW5nLFxuICAgICAgY29tbWVudCA9IG1vdmllLmNvbW1lbnQsXG4gICAgICBpZCA9IG1vdmllLmlkO1xuXG4gIHZhciBwb3N0ZXJVUkwgPSBtb3ZpZS5Qb3N0ZXIgfHwgJ2h0dHBzOi8vMmZtLnJ0ZS5pZS93cC1jb250ZW50L3VwbG9hZHMvMjAxNi8wMy9GaWxtLVJlZWwuanBnJztcbiAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgIE1vdmllQm94LFxuICAgIG51bGwsXG4gICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTW92aWVQb3N0ZXIsIHsgc3JjOiBwb3N0ZXJVUkwgfSksXG4gICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBNb3ZpZUluZm8sXG4gICAgICBudWxsLFxuICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIE1vdmllVGl0bGUsXG4gICAgICAgIG51bGwsXG4gICAgICAgIFRpdGxlXG4gICAgICApLFxuICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIE1vdmllSW5mb0l0ZW0sXG4gICAgICAgIG51bGwsXG4gICAgICAgIFllYXJcbiAgICAgICksXG4gICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgTW92aWVJbmZvSXRlbSxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgUGxvdFxuICAgICAgKSxcbiAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBGYXZNb3ZpZUluZm8sXG4gICAgICAgIG51bGwsXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIE1vdmllSW5mb0l0ZW0sXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgICAnTXkgUmF0aW5nOiAnLFxuICAgICAgICAgIHJhdGluZ1xuICAgICAgICApLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBNb3ZpZUluZm9JdGVtLFxuICAgICAgICAgIG51bGwsXG4gICAgICAgICAgJ015IENvbW1lbnQ6ICcsXG4gICAgICAgICAgY29tbWVudFxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gTW92aWU7XG5cblxudmFyIE1vdmllQm94ID0gX3N0eWxlZENvbXBvbmVudHMyLmRlZmF1bHQuZGl2KF90ZW1wbGF0ZU9iamVjdCk7XG52YXIgTW92aWVQb3N0ZXIgPSBfc3R5bGVkQ29tcG9uZW50czIuZGVmYXVsdC5pbWcoX3RlbXBsYXRlT2JqZWN0Mik7XG5cbnZhciBNb3ZpZUluZm8gPSBfc3R5bGVkQ29tcG9uZW50czIuZGVmYXVsdC5kaXYoX3RlbXBsYXRlT2JqZWN0Myk7XG5cbnZhciBNb3ZpZUluZm9JdGVtID0gX3N0eWxlZENvbXBvbmVudHMyLmRlZmF1bHQuZGl2KF90ZW1wbGF0ZU9iamVjdDQpO1xudmFyIE1vdmllVGl0bGUgPSBfc3R5bGVkQ29tcG9uZW50czIuZGVmYXVsdC5kaXYoX3RlbXBsYXRlT2JqZWN0NSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9Nb3ZpZS5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///23\n");

/***/ })

})