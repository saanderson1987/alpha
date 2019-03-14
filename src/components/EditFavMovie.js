import React from 'react';

class EditFavMovie extends React.Component {
  constructor(props) {
    super(props);
    const rating = this.props.rating || '';
    const comment = this.props.comment || '';
    this.state = { toggleEdit: false, rating, comment };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.rating !== prevProps.rating || this.props.comment !== prevProps.comment) {
      const { rating, comment } = this.props;
      this.setState({rating, comment});
    }
  }

  toggleEdit() {
    const toggleEdit = this.state.toggleEdit ? false : true;
    this.setState({toggleEdit});
  }

  handleChange(type, value) {
    this.setState({[type]: value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const { favMovieId } = this.props;
    const { rating, comment } = this.state;
    this.props.handleSubmitEdit({favMovieId, rating, comment});
  }

  render() {
    const { rating, comment } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <button onClick={this.toggleEdit}>Edit Rating/Comment</button>
          <label>
            Rating:
            <select value={rating} onChange={e => this.handleChange('rating', e.target.value)}>
              <option value={''}>None</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </label>
          <label>
            Comment:
            <input type="text" value={comment} onChange={e => this.handleChange('comment', e.target.value)} />
          </label>
          <input type="submit" value="Save" />
        </form>
      </div>
    );
  }
}

export default EditFavMovie;