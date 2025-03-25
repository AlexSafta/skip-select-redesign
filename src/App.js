import React, { useEffect } from 'react';
import './App.css';
import SkipSelectPage from './components/SkipSelectPage';

// Imaginea statică pentru preîncărcare
const BACKGROUND_IMAGE_URL = 'https://images.unsplash.com/photo-1590496793929-36417d3117de?q=80&w=800';

function App() {
  // Preîncărcare imagine
  useEffect(() => {
    const img = new Image();
    img.src = BACKGROUND_IMAGE_URL;
  }, []);
  
  return (
    <div className="App">
      {/* Preîncărcare imagine invizibilă */}
      <div className="preload-images">
        <img src={BACKGROUND_IMAGE_URL} alt="" />
      </div>
      
      <main>
        <SkipSelectPage />
      </main>
    </div>
  );
}

export default App;
