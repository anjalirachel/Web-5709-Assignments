import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
     <ul>
        <li><a href="#MainPage" className='list'>Main Page</a></li>
        <li><a href="#Albums" className='list'>Albums</a></li>
        <li><a href="#Settings" className='list'>Setting</a></li>
        <hr></hr>
        <li><a href="#Favorites" className='list'>Favorites</a></li>
     </ul>
    </div>
  );
};

export default Sidebar;
