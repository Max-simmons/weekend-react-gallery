import { useState, useEffect } from 'react';
import axios from 'axios'; 
import GalleryItem from '../GalleryItem/GalleryItem';

// function to render the list component on the app 

function GalleryList(props) {
    console.log('in galleryList');
    console.log(JSON.stringify(props, null, 4))
    return (
        <div className='container'>
        {props.galleryImages.map(image => {
            // adding an item conponent to further edit items
            return (
                <GalleryItem
            
                id = {image.id}
                path = {image.path}
                description = {image.description}
                likes = {image.likes} 
                fetchImages = {props.fetchImages} 
                />

            )
        })
    }
            
        </div>
    )

}

export default GalleryList;