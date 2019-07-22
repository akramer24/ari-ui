import React from 'react';
import { NavLink } from 'react-router-dom';
import * as components from '../components';

const Sidebar = props => {
  const renderLinks = () => {
    const links = [];
    for (let c in components) {
      links.push(<NavLink key={c} to={`/${c}`}>{c}</NavLink>)
    }
    return links;
  }

  return (
    <div id="sidebar">
      {renderLinks()}
    </div>
  )
}

export default Sidebar;