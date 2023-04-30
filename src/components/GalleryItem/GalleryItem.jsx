import { useState } from 'react'; 
import axios from 'axios';


function CreateGallery(props) {
console.log(props.id);
console.log(props.likes);

    const [buttonText, setButtonText] = useState(props.path)


    const showDescription = () => {
        console.log('button works');
        setButtonText(props.description);

    }

    const likePost = () => {
        console.log('I like this');
        axios({
            method: 'PUT',
            url: `/gallery/like/${props.id}`,
        }).then((res) => {
            console.log('post liked');
            console.log(props.likes);
            
            props.fetchImages();

        }).catch((err) => {
            console.log('couldnt like', err);
        })
    }


return(
    <>
    <div>
    <button onClick = {showDescription}>
        <img src = {buttonText} width='100'
     />
     </button>
     </div>
     <div>
        <button onClick = {likePost}>Like</button>
     </div>
     <div>
        <p>{props.likes} Likes</p>
     </div>
     </>
    
    )
}


export default CreateGallery;