import React from 'react';
import styled, { css } from 'styled-components'

const NavBar = (props) => {
  const { selectedView, changeSelectedView } = props;
  return (
    <Bar>
      <NavLink isActive={selectedView === 'search'} onClick={(e) => changeSelectedView('search')}>Search for Movie</NavLink>
      <NavLink isActive={selectedView === 'favMovie'} onClick={(e) => changeSelectedView('favMovie')}>My Favorite Movies</NavLink>
      <NavLink empty></NavLink>
    </Bar>
  );
};

export default NavBar;

const Bar = styled.div`
  display: flex;
`
const NavLink = styled.div`
  font-size: 18px;
  border-right: 1px solid #e1e1e1;
  border-bottom: 1px solid #e1e1e1;
  padding: 20px;
  width: 420px;
  text-align: center;
  cursor: pointer;
  ${props => props.empty && css`
    width: 100%;
    border-right: none;
  `};
  ${props => props.isActive && css`
    font-weight: bold;
    border-bottom: none;
  `};
`