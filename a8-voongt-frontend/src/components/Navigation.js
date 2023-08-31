import React from 'react';
import { Link } from 'react-router-dom';


function Menu() {
  return (
    <nav>
        <Link to="/LogPage">Log Comic</Link>
        <Link to="/create">Add Comic</Link>
    </nav>
  );
}

export default Menu;
