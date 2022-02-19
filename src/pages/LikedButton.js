import { db } from "../firebase/config"; 
import { deleteDoc, setDoc, doc } from "firebase/firestore";
import { useAuthContext } from "../firebase/firebaseHooks/useAuthContext";
import useStateRef from 'react-usestateref'; 
import './LikedButton.css';

const ButtonLiked = (props) => {

    const [count, setCount, countRef] = useStateRef(0); 
    const [total, setTotal, totalRef] = useStateRef(0); 
    const { api_featured_image, brand, name, price } = props.individualProducts;
    const { user } = useAuthContext(); 

    const writeUserData = async (event) => {
        
        event.preventDefault();
        await setDoc(doc(db, `${user.uid}`, `${name}`), {
            uid: user.uid,
            name, brand, price, api_featured_image, quantity: count
        });
      
    }

    const removeFromCart = async (event) => {
        
        event.preventDefault();
        await deleteDoc(doc(db, `${user.uid}`, `${name}`));
  
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
            <div className='buttonsProductPage'>
                <div className='buttonsProductPageCartContainer'>
                    <div className='buttonsProductPageCartAddToCart'>
                        <button onClick={countDown}>-</button>
                        <button onClick={writeUserData}>Add to Cart</button>
                        <button onClick={countUp}>+</button>
                    </div>
                    <button onClick={removeFromCart}>Remove From Cart</button>
                </div>
                <div className='totalQuantity'>
                    <p>Quantity: {count}</p>
                    <p>Total: ${total}</p>   
                </div>
            </div>
        </>
    )
}

export default ButtonLiked;