import React from 'react';
import styled, { css } from 'styled-components'
import FavMovieInfo from './FavMovieInfo';

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hasClickedRemove: false};
    this.toggleHasClickedRemove = this.toggleHasClickedRemove.bind(this);
  }

  toggleHasClickedRemove() {
    const hasClickedRemove = this.state.hasClickedRemove ? false : true;
    this.setState({hasClickedRemove})
  }

  render() {
    const { hasClickedRemove } = this.state;
    const { handleSubmitEdit, addToFavMovies, removeFavMovie } = this.props;
    const movie = this.props.movie || {};
    const { imdbID, Title, Year, Plot, rating, comment} = movie;
    const favMovieId = movie.id;
    const posterURL = movie.Poster === 'N/A' ? 
        'https://2fm.rte.ie/wp-content/uploads/2016/03/Film-Reel.jpg'
      : movie.Poster;
    return (
      <MovieBox>
        <MoviePosterContainer><MoviePoster src={posterURL}/></MoviePosterContainer>
        
        <MovieInfo>
          <div>
            <MovieHeader>
              <MovieTitle>{Title}</MovieTitle>
              { favMovieId ?
                  hasClickedRemove ?
                      <RemoveFavoriteLine>
                        <div>Remove Favorite?</div>
                        <CheckMark onClick={(e) => removeFavMovie(favMovieId)} className="far fa-check-circle"></CheckMark>
                        <RemoveFavoriteIcon onClick={this.toggleHasClickedRemove} className="fas fa-undo-alt"></RemoveFavoriteIcon>
                      </RemoveFavoriteLine>
                    : <div><Heart onClick={this.toggleHasClickedRemove} className="fas fa-heart"></Heart></div>
                : <AddToFavoritesIcon onClick={(e) => addToFavMovies(imdbID)}>
                    <i className="far fa-heart"></i>
                    <i className="fas fa-plus" style={{fontSize: 'xx-small'}}></i>
                  </AddToFavoritesIcon>
              }
            </MovieHeader>
            <MovieInfoItem>{Year}</MovieInfoItem>
            <MovieInfoItem>{Plot}</MovieInfoItem>
          </div>
          <div>
            { favMovieId ?
                <FavMovieInfo rating={rating} comment={comment} favMovieId={favMovieId} handleSubmitEdit={handleSubmitEdit}/>
              : ''
            }
          </div>
        </MovieInfo>
      </MovieBox>
    );
  }
}

export default Movie;

const MovieBox = styled.div`
  border: 1px solid #e1e1e1;
  margin-bottom: 30px;
  width: 650px;
  padding: 20px;
  overflow: auto;
  display: flex;
`

const MoviePosterContainer = styled.div`
`

const MoviePoster = styled.img`
  width: 150px;
  height: 225px;
  align-self: flex-start;
` 

const MovieInfo = styled.div`
  margin-left: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: 'Lora', serif;
`

const MovieInfoItem = styled.div`
  margin: 10px 30px 0px 0px;
`
const MovieTitle = styled.div`
  font-family: 'Montserrat', sans-serif;
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

const RemoveFavoriteLine = styled.div`
  display: flex;
  min-width: 178px;
`

const RemoveFavoriteIcon = styled.i`
  margin-left: 14px;
`
const CheckMark = styled(RemoveFavoriteIcon)`
  color: green;
`

const Heart = styled.i`
  color: #b50000;
`;