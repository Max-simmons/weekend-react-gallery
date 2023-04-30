import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'; 
import GalleryList from '../GalleryList/GalleryList';

// function to produce the app
function App() {

  const [galleryImages, setGalleryImages] = useState([]);
// function to 'GET' the data from the server
  const fetchImages = () => {
    axios({
      method: 'GET',
      url: '/gallery',
    }).then((res) => {
      setGalleryImages(res.data);
      console.log('Got our images', res.data);
    }).catch((err) => {
      console.log('Couldnt get images', err);
    })
  }

  useEffect(() => {
    fetchImages();
  }, [])
// How the data will appear on to the DOM 
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Max's Life in Pictures</h1>
        </header>
        
        <GalleryList 
        galleryImages = {galleryImages}
        fetchImages = {fetchImages}
        />
        
      </div>
    );
}

export default App;
