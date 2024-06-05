// src/components/Sidebar.js
import React from 'react';
import './Sidebar.css';

const Sidebar = ({ onNavigate }) => {
  return (
    <div className="sidebar">
      <ul>
        <li><a href="#MainPage" className='list' onClick={() => onNavigate('home')}>Main Page</a></li>
        <li><a href="#Albums" className='list'>Albums</a></li>
        <li><a href="#Settings" className='list'>Settings</a></li>
        <hr />
        <br />
        <li><a href="#Favorites" className='list'>Favorites</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
