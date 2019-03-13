import React from 'react';
import styled, { css } from 'styled-components'
import NavBar from './NavBar';
import Search from './Search';
import FavMovieList from './FavMovieList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedView: 'search'};
    this.changeSelectedView = this.changeSelectedView.bind(this);
  }

  changeSelectedView(view) {
    if (view !== this.state.selectedView) {
      this.setState({selectedView: view});
    }
  }

  render() {
    const { selectedView } = this.state;
    return (
      <div>
        <NavBar selectedView={selectedView} changeSelectedView={this.changeSelectedView} />
        <AppBody>
          {selectedView === 'search' ?
            <Search /> : ''
          }
          {selectedView === 'favMovie' ?
            <FavMovieList /> : ''
          }
        </AppBody>
      </div>
    );
  }
}

export default App;

const AppBody = styled.div`
  margin: 40px;
`
