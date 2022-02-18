import { useState } from 'react';
import { db } from "../firebase/config"; 
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { useAuthContext } from "../firebase/firebaseHooks/useAuthContext";

const AddToCart = (props) => {

    const [buttonLiked, setButtonLiked] = useState(false); 
    let item = props.individualProducts; 
    const { user } = useAuthContext(); 

    const writeUserData = async (event) => {
       
        event.preventDefault();
        console.log(item); 
        if (buttonLiked === false) {
            
            await addDoc(collection(db, "cities"), {
              item, 
              uid: user.uid
            });

        }
        
        else {

        }
        setButtonLiked((buttonLiked) => !buttonLiked);
      
    }
    return (

        <div  onClick={writeUserData} className={`ButtonLiked${buttonLiked ? " no" : " yes"
        }`}>
            <i className="far fa-plus-square"></i>
        </div>
    )
}

export default AddToCart;