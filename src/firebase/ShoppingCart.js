import { useCollection } from "./firebaseHooks/useMakeupPosts";
import { useAuthContext } from "./firebaseHooks/useAuthContext";
import TotalCart from "./TotalCart";
import { doc, deleteDoc } from "firebase/firestore";
import "./ShoppingCart.css"; 
import useStateRef from "react-usestateref";
import { db } from "./config";

export default function ShoppingCart() {
    
  const { user } = useAuthContext(); 
  const { posts } = useCollection(`${user.uid}`, ['uid', '==', user.uid]);  
  const [removeItem, setRemoveItem, removeItemRef] = useStateRef(null); 

  const handleClick = async (e) => {
    
    setRemoveItem(e.target.value);

    await deleteDoc(doc(db, `${user.uid}`, `${removeItemRef.current}`));

    setRemoveItem(""); 
  };

  const arrayOfPictures = () => {
  

    if (posts === undefined || posts === null || posts.length === 0 ) { 

      return <h3>Shopping Cart Empty - Add Items to the Cart!</h3>

    }
    else {
      
      return (

        <section className="shoppingCartSection">
  
        <ul className="shoppingCartList">
          {posts.map(post => (
            
            <li className="shoppingCartItem" key={post.id}>
              <img src={post.api_featured_image} alt={post.name}/>
              
              <div className="cartItems">
                <h3>Product Name: {post.name}</h3>
                <p>Brand: {post.brand}</p>
                <p>Price: ${parseFloat(`${post.price}`).toFixed(2)}</p>
                <p>Quantity: {post.quantity}</p>
              </div>
              <button onClick={handleClick} value={post.name}>X</button>
            </li>

          ))}

        </ul>
        <TotalCart posts={posts}/>
        </section>
      )
    }
  
  }

    return (
      <div className="front-Page-FirebaseItems">
        {arrayOfPictures()}
      </div>
    )
  }