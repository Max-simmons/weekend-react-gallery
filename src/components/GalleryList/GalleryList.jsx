import { useState, useEffect } from 'react';
import axios from 'axios'; 
import GalleryItem from '../GalleryItem/GalleryItem';



function GalleryList(props) {
    
    return (
        <ul>
        {props.galleryImages.map(image => {
            return (
                <GalleryItem
                key = {image.id}
                image = {image.path}
                description = {image.descrption}
                likes = {image.likes}  
                fetchImage  = {fetchImage}
                />

            )
        })
    }
            
        </ul>
    )

}

export default GalleryList;