  componentDidMount() {
    const { userId } = this.props;
    getFavMovies(userId)
      .then(favMovies => {
        const getMoviePromises = [];
        for(let i = 0; i < favMovies.length; i++) {
          function getMovieInfo(i) {
            const { imdb_id } = favMovies[i];
            getMoviePromises.push(getMovieByImdbId(imdb_id))
            // getMovieByImdbId(imdb_id)
            //   .then(movie => {
            //     favMovies[i] =Object.assign({}, favMovies[i], movie);
            //   })
          }
          getMovieInfo(i)
        }
        Promise.all(getMoviePromises).then(movies => {
          movies.forEach((movie, i) => {
            favMovies[i] =Object.assign({}, favMovies[i], movie);
          });
        })
        this.setState({favMovies})
        console.log(this.state)
      });
  }


  componentDidMount() {
    const { userId } = this.props;
    getFavMovies(userId)
      .then(favMovies => {
        const getMoviePromises = [];
        for(let i = 0; i < favMovies.length; i++) {
          function getMovieInfo(i) {
            const { imdb_id } = favMovies[i];
            getMoviePromises.push(getMovieByImdbId(imdb_id))
            // getMovieByImdbId(imdb_id)
            //   .then(movie => {
            //     favMovies[i] =Object.assign({}, favMovies[i], movie);
            //   })
          }
          getMovieInfo(i)
        }
        Promise.all(getMoviePromises).then(movies => {
          movies.forEach((movie, i) => {
            favMovies[i] =Object.assign({}, favMovies[i], movie);
          });
        })
        this.setState({favMovies})
        console.log(this.state)
      });
  }

  handleSubmit(event) {
    const { userId } = this.props;
    event.preventDefault();
    searchMovies(this.state.value)
      .then(movie => {
        console.log(movie);
        this.setState({movie});
        return movie;
      })
      .then(movie => {
        console.log('next', movie)
        getFavMovie(userId, movie.imdbID)
          .then(favMovie => {
            console.log(favMovie);
            this.setState({favMovie});
          })
      })
  }

  const Movie = (props) => {
    const movie = props.movie || {};
    console.log(movie)
    const { Title, Year, Plot, rating, comment} = movie;
    const posterURL = movie.Poster || 'https://2fm.rte.ie/wp-content/uploads/2016/03/Film-Reel.jpg'
    return (
      <div>
        <div>{Title}</div>
        <div>{Year}</div>
        <div>{Plot}</div>
        <div>{rating}</div>
        <div>{comment}</div>
        <img src={posterURL}/>
        <div>----</div>
      </div>
    );
  };