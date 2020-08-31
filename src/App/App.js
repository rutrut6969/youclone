import React from 'react';
import TopMenu from './Components/topmenu/TopMenu';
import SideBar from './Components/sidebar/SideBar';
import VideoSection from './Components/videosection/VideoSection';

import './App.css';

function App() {
  return (
    <div className='App'>
      {/* SearchBar and avatar menus. */}
      <TopMenu />
      {/* SideBar Navigation Menu Collapsable */}
      <SideBar /> {/* Overlay Menu */}
      {/* Middle section to display video content */}
      <VideoSection />
    </div>
  );
}

export default App;
