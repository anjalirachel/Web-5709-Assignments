// src/App.js
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ImageSlider from './components/ImageSlider';
import MusicPlayer from './components/MusicPlayer';
import PlaylistGrid from './components/PlaylistGrid';
import PlaylistPage from './components/PlaylistPage'; 
import ClassicalPage from './components/ClassicalPlaylist';
import NatureSoundsPage from './components/NatureSound'; 
import InstrumentalPage from './components/InstrumentalPlaylist';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const [selectedSongs, setSelectedSongs] = useState([]);

  const handleNavigation = (page) => {
    setCurrentPage(page);
    setSelectedPlaylist(null); // Reset selected playlist when navigating to a new page
  };

  const handlePlaylistSelection = (playlist, songs) => {
    setSelectedPlaylist(playlist);
    setSelectedSongs(songs);
  };

  return (
    <div className="app">
      <Navbar onNavigate={handleNavigation} />
      <div className="main-content">
        <Sidebar onNavigate={handleNavigation} />
        {currentPage === 'home' && (
          <>
            <ImageSlider />
            <p className='para'>Let Music Heal You!!</p>
            <PlaylistGrid onNavigate={handleNavigation} onSelectPlaylist={handlePlaylistSelection} /> {/* Pass onSelectPlaylist callback */}
          </>
        )}
        {currentPage === 'classical' && <ClassicalPage />}
        {currentPage === 'natureSounds' && <NatureSoundsPage />}
        {currentPage === 'instrumental' && <InstrumentalPage />}
        {selectedPlaylist && <PlaylistPage playlist={selectedPlaylist} songs={selectedSongs} />} {/* Render PlaylistPage with selected playlist and songs */}
        <MusicPlayer />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
