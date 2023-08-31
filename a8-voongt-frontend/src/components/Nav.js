//Navigate from page to page

import React from 'react';
import { Link } from 'react-router-dom';


function Nav() {
  return (
    <nav className="App-nav">
        <Link to="/">Home</Link>
        <Link to="../Gallery">Gallery</Link>
        <Link to="../Staff">Staff</Link>
        <Link to="../Order">Order</Link>
        <Link to="../TopicsPage">Topics</Link>
    </nav>
  );
}

export default Nav;
