import React from 'react';
import styled, { css } from 'styled-components'
import EditFavMovie from './EditFavMovie';

class FavMovieInfo extends React.Component {
  constructor(props) {
    super(props);
    const rating = this.props.rating || '';
    const comment = this.props.comment || '';
    this.state = { inEditMode: false, rating, comment };
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.rating !== prevProps.rating || this.props.comment !== prevProps.comment) {
      const { rating, comment } = this.props;
      this.setState({rating, comment});
    }
  }

  toggleEditMode() {
    const inEditMode = this.state.inEditMode ? false : true;
    this.setState({inEditMode});
  }

  handleChange(type, value) {
    this.setState({[type]: value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const { favMovieId } = this.props;
    const { rating, comment } = this.state;
    this.props.handleSubmitEdit({favMovieId, rating, comment})
      .then(() => {
        this.setState({inEditMode: false});
      })
  }

  render() {
    const { rating, comment, inEditMode } = this.state;
    return (
      <FavMovieInfoContainer>
        <FavMovieInfoHeader>
          <div>My info:</div>
          {inEditMode ? 
              <i className="far fa-check-circle" onClick={this.handleSubmit}></i>
            : <i className="far fa-edit" onClick={this.toggleEditMode}></i>
          }
        </FavMovieInfoHeader>
        <FavMovieDetails>
          <div>
            <FavMovieInfoItem>Rating:</FavMovieInfoItem>
            {inEditMode ?
                <RatingSelect value={rating} onChange={e => this.handleChange('rating', e.target.value)}>
                  <option value={''}>None</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </RatingSelect>
              : <FavMovieInfoItem>{rating}</FavMovieInfoItem>            
            }
          </div>
          <FavMovieComment>
            <FavMovieInfoItem>Comment:</FavMovieInfoItem>
            {inEditMode ? 
                <CommentInput type="text" value={comment} onChange={e => this.handleChange('comment', e.target.value)} />
              : <FavMovieInfoItem>{comment}</FavMovieInfoItem>          
            }
          </FavMovieComment>
        </FavMovieDetails>
        {/* <EditFavMovie favMovieId={id} rating={rating} comment={comment} handleSubmitEdit={props.handleSubmitEdit}/> */}
      </FavMovieInfoContainer>
    );
  }
}

export default FavMovieInfo;

const FavMovieInfoContainer = styled.div`
  border: 1px dotted black;
`
const FavMovieInfoHeader = styled.div`
  margin: 5px 5px 0px;
  font-variant: all-small-caps;
  display: flex;
  justify-content: space-between;
`

const FavMovieDetails = styled.div`
  display: flex;
  justify-content: space-between;
`

const FavMovieInfoItem = styled.div`
  margin: 10px 10px;
`

const FavMovieComment = styled.div`
  width: 350px;
`

const RatingSelect = styled.select`
  margin-left: 10px;
`
const CommentInput = styled.input`
  margin: 0px 0px 10px 10px;
`
