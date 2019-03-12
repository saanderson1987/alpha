import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/App.scss';
import Search from './Search';
import FavMovieList from './FavMovieList';

const App = () => {
  return (
    <div>
      <h1>Hello</h1>
      <Search />
      <FavMovieList />
    </div>
  );
};

App.propTypes = {
  name: PropTypes.string,
};

export default App;
