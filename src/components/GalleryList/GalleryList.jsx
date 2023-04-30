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
                key = {image.id}
                image = {image.path}
                description = {image.descrption}
                likes = {image.likes}  
                />

            )
        })
    }
            
        </div>
    )

}

export default GalleryList;