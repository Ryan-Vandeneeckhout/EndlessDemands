import { useState, useRef } from 'react';
import { db } from "../firebase/config"; 
import { deleteDoc, setDoc, doc } from "firebase/firestore";
import { useAuthContext } from "../firebase/firebaseHooks/useAuthContext";
import useStateRef from 'react-usestateref'; 

const ButtonLiked = (props) => {

    const [buttonLiked, setButtonLiked] = useState(false); 
    const [cartStateItems, setCartStateItems] = useState("Add to Cart"); 
    const [count, setCount, countRef] = useStateRef(0); 
    const [total, setTotal, totalRef] = useStateRef(0); 

    let item = props.individualProducts; 
    const addtoCartButtonRef = useRef(null); 

    const { api_featured_image, brand, name, price } = props.individualProducts;

    const { user } = useAuthContext(); 

    const writeUserData = async (event) => {
        
        event.preventDefault();
        console.log(item); 
        if (buttonLiked === false) {
            

            await setDoc(doc(db, `${user.uid}`, `${name}`), {
                uid: user.uid,
                name, brand, price, api_featured_image, quantity: count
            });

            addtoCartButtonRef.current.classList.add("green"); 
            addtoCartButtonRef.current.classList.remove("blue"); 
            setCartStateItems("Add to Cart"); 
        }
        
        else {
            await deleteDoc(doc(db, `${user.uid}`, `${name}`));
            addtoCartButtonRef.current.classList.remove("green"); 
            addtoCartButtonRef.current.classList.add("blue"); 
            setCartStateItems("Remove from Cart"); 
        }
        setButtonLiked((buttonLiked) => !buttonLiked);
      
    }

    const countUp = () => {

        if (count === 10); 

        else {
            setCount(count + 1); 
            setTotal(price * countRef.current);  
            setTotal(totalRef.current.toFixed(2));
            console.log(totalRef.current);
            console.log(price);
        }

    }

    const countDown = () => {
        
        if (count === 0); 

        else {
            setCount(countRef.current - 1);
            setTotal(totalRef.current - price);
            setTotal(totalRef.current.toFixed(2));
            console.log(totalRef.current);
        }

    }

    return (

        <>
        <button ref={addtoCartButtonRef} onClick={writeUserData}>{cartStateItems}</button>
        <button onClick={countUp}>+</button>
            <p>{count}</p>
            <p>{total}</p>
        <button onClick={countDown}>-</button>
        </>
    )
}

export default ButtonLiked;