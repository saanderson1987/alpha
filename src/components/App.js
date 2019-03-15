import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';
import Search from './Search';
import FavMovieList from './FavMovieList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedView: 'search' };
    this.changeSelectedView = this.changeSelectedView.bind(this);
  }

  changeSelectedView(view) {
    if (view !== this.state.selectedView) {
      this.setState({ selectedView: view });
    }
  }

  render() {
    const { selectedView } = this.state;
    return (
      <AppContainer>
        <NavBar 
          changeSelectedView={this.changeSelectedView} 
          selectedView={selectedView} 
        />
        <AppBody>
          {selectedView === 'search' ?
            <Search /> : ''
          }
          {selectedView === 'favMovie' ?
            <FavMovieList /> : ''
          }
        </AppBody>
      </AppContainer>
    );
  }
}

export default App;

const AppBody = styled.div`
  margin: 40px;
`;

const AppContainer = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
`;
