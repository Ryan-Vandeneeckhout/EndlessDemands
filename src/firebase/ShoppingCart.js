import { useCollection } from "./firebaseHooks/useMakeupPosts";
import { useAuthContext } from "./firebaseHooks/useAuthContext";
import TotalCart from "./TotalCart";
import { doc, deleteDoc } from "firebase/firestore";
import "./ShoppingCart.css";
import useStateRef from "react-usestateref";
import { db } from "./config";

export default function ShoppingCart() {
  //Shopping Cart Component
  const { user } = useAuthContext();
  const { posts } = useCollection(`${user.uid}`, ["uid", "==", user.uid]);
  const [removeItem, setRemoveItem, removeItemRef] = useStateRef(null);

  const handleClick = async (e) => {
    //Remove Item from Cart
    setRemoveItem(e.target.value);
    console.log(removeItem);

    await deleteDoc(doc(db, `${user.uid}`, `${removeItemRef.current}`));

    setRemoveItem("");
  };

  const arrayOfPictures = () => {
    //If Shopping Cart is Empty or Firestore return Nothing for the User
    if (posts === undefined || posts === null || posts.length === 0) {
      return (
        <div className="emptyShoppingCart">
          <h3>Shopping Cart Empty - Add Items to the Cart!</h3>
        </div>  
      )
    }
    //If shopping Cart is not Empty and user is on the Shopping Cart Page//
    else {
      return (
        <>
          <ul className="shoppingCartList">
            {posts.map((post) => (
              <li className="shoppingCartItem" key={post.id}>
                <img src={post.api_featured_image} alt={post.name} />
                <div className="cartItems">
                  <h3>Product Name: {post.name}</h3>
                  <p>Brand: {post.brand}</p>
                  <p>Price: ${parseFloat(`${post.price}`).toFixed(2)}</p>
                  <p>Quantity: {post.quantity}</p>
                </div>
                <button onClick={handleClick} value={post.name}>
                  X
                </button>
              </li>
            ))}
          </ul>
          <div className="totalCheckOut">
            <TotalCart posts={posts} />
            <button >Check Out</button>
          </div>
        </>
      );
    }
  };

  return <section className="shoppingCartSection">{arrayOfPictures()}</section>;
}