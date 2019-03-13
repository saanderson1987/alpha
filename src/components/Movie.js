import React from 'react';
import styled, { css } from 'styled-components'
import FavMovieInfo from './FavMovieInfo';

const Movie = (props) => {
  const movie = props.movie || {};
  const { Title, Year, Plot, rating, comment} = movie;
  const favMovieId = movie.id;
  const posterURL = movie.Poster || 'https://2fm.rte.ie/wp-content/uploads/2016/03/Film-Reel.jpg'
  return (
    <MovieBox>
      <MoviePoster src={posterURL}/>
      <MovieInfo>
        <MovieHeader>
          <MovieTitle>{Title}</MovieTitle>
          { favMovieId ?
              <i class="fas fa-heart"></i>
            : <AddToFavoritesIcon>
                <i className="far fa-heart"></i>
                <i className="fas fa-plus" style={{fontSize: 'xx-small'}}></i>
              </AddToFavoritesIcon>
           }
        </MovieHeader>
        <MovieInfoItem>{Year}</MovieInfoItem>
        <MovieInfoItem>{Plot}</MovieInfoItem>
        { favMovieId ?
            <FavMovieInfo rating={rating} comment={comment} favMovieId={favMovieId} handleSubmitEdit={props.handleSubmitEdit}/>
          : ''
        }
      </MovieInfo>
    </MovieBox>
  );
};

export default Movie;

const MovieBox = styled.div`
  border: 1px solid black;
  margin-bottom: 30px;
  width: 650px;
  padding: 20px;
  overflow: auto;
  display: flex;
`
const MoviePoster = styled.img`
  width: 150px;
  height: 225px;
` 

const MovieInfo = styled.div`
  margin-left: 20px;
  width: 100%;
`

const MovieInfoItem = styled.div`
  margin: 10px 0px;
`
const MovieTitle = styled.div`
  font-size: 26px;
  margin-right: 30px;
`
const MovieHeader = styled.div`
  display: flex;
  justify-content: space-between;
`
const AddToFavoritesIcon = styled.div`
  min-width: 24px;
`