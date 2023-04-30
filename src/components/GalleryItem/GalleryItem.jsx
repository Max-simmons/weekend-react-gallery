import { useState } from 'react'; 
import axios from 'axios';


function CreateGallery(props) {
console.log(props.id);
console.log(props.description);

    const [buttonText, setButtonText] = useState(<img src = {props.path} width='120'
/>);


    const toggleDescription = () => {
        console.log('button works');
        if (buttonText) {
            setButtonText(props.description);
        } else {
            setButtonText()
           
    
        }
    console.log(buttonText);
    }

    const applyDescription = () => {
        if (buttonText === false) {
            setButtonText(props.path);
        } else {
            setButtonText(props.description);
        }
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
    <button onClick = {toggleDescription}>
        {/* <img src = {props.path} width='120'
     /> */}{buttonText}
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