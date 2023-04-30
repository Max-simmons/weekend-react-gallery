import { useState } from 'react'; 


function CreateGallery(props) {
console.log(props.image);
    const showDescription = () => {
        console.log('button works');
    }


return(
    <div>
    <button onClick = {showDescription}>
        <img src = {props.image} width='100'
     />
     </button>
     </div>
    )
}


export default CreateGallery;