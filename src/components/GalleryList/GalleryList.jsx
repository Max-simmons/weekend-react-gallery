import { useState, useEffect } from 'react';
import axios from 'axios'; 
import GalleryItem from '../GalleryItem/GalleryItem';



function GalleryList(props) {
    console.log('in galleryList');
    console.log(JSON.stringify(props, null, 4))
    return (
        <div>
        {props.galleryImages.map(image => {
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