import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'; 
import GalleryList from '../GalleryList/GalleryList';







function App() {

  const [galleryImages, setGalleryImages] = useState([]);

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

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <GalleryList 
        galleryImages = {galleryImages}
        />
        
      </div>
    );
}

export default App;
