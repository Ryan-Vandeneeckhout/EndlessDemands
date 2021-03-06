import { db } from "../firebase/config";
import { deleteDoc, setDoc, doc } from "firebase/firestore";
import { useAuthContext } from "../firebase/firebaseHooks/useAuthContext";
import useStateRef from "react-usestateref";
import "./LikedButton.scss";
import { useState } from "react";

const ButtonLiked = (props) => {
  //Shopping Cart Logic Handling Add to Cart//
  const [count, setCount, countRef] = useStateRef(0);
  const [total, setTotal, totalRef] = useStateRef(0);
  const { api_featured_image, brand, name, price } = props.individualProducts;
  const { user } = useAuthContext();
  const [error, setError] = useState(null);

  const writeUserData = async (event) => {
    event.preventDefault();
    if (count === 0 || totalRef.current === "0.00") {
      setError("Sorry, Cannot have Zero Quantity in Cart");
      await deleteDoc(doc(db, `${user.uid}`, `${name}`));
    } else {
      await setDoc(doc(db, `${user.uid}`, `${name}`), {
        uid: user.uid,
        name,
        brand,
        price,
        api_featured_image,
        quantity: count,
      });
      setError("");
    }
  };
  //Remove from Shopping Cart Logic firestore//
  const removeFromCart = async (event) => {
    event.preventDefault();
    await deleteDoc(doc(db, `${user.uid}`, `${name}`));
  };
  //User Quanity Function Handling //
  const countUp = () => {
    if (count === 10);
    else {
      // Tracks Price and Item Count//

      setCount(count + 1);
      setTotal(price * countRef.current);
      setTotal(totalRef.current.toFixed(2));
    }
  };

  const countDown = () => {
    //Tracks if User Removes a item from Cart ot Zero//
    if (count === 0);
    else {
      setCount(countRef.current - 1);
      setTotal(totalRef.current - price);
      setTotal(totalRef.current.toFixed(2));
    }
  };

  return (
    <>
      <div className="buttonsProductPage">
        <div className="buttonsProductPageCartContainer">
          <div className="buttonsProductPageCartAddToCart">
            {/*Add and Remove Items to Cart JSX*/}
            <button className="minus" onClick={countDown}>-</button>
            <button className="updateCart" onClick={writeUserData}>Update Cart</button>
            <button className="plus" onClick={countUp}>+</button>
          </div>
          <button className="removeFromCart" onClick={removeFromCart}>Remove From Cart</button>
        </div>
        {/*Total and Item Quantity Count on User Screen*/}
        <div className="totalQuantity">
          <p>Quantity: {count}</p>
          <p>Total: ${total}</p>
        </div>
        <p>{error}</p>
      </div>
    </>
  );
};

export default ButtonLiked;