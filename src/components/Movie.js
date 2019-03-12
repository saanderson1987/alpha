import React from 'react';
import EditFavMovie from './EditFavMovie';

const Movie = (props) => {
  const movie = props.movie || {};
  const { Title, Year, Plot, rating, comment, id} = movie;
  const posterURL = movie.Poster || 'https://2fm.rte.ie/wp-content/uploads/2016/03/Film-Reel.jpg'
  return (
    <div>
      <div>{Title}</div>
      <div>{Year}</div>
      <div>{Plot}</div>
      <div>{rating}</div>
      <div>{comment}</div>
      <img src={posterURL}/>
      <EditFavMovie favMovieId={id} rating={rating} comment={comment} handleSubmitEdit={props.handleSubmitEdit}/>
      <div>----</div>
    </div>
  );
};

export default Movie;