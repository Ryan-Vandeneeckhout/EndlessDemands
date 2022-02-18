import { useCollection } from "./firebaseHooks/useMakeupPosts";
import { useAuthContext } from "./firebaseHooks/useAuthContext";
import TotalCart from "./TotalCart";

export default function ShoppingCart() {
    
    const { user } = useAuthContext(); 
  const { posts } = useCollection(`${user.uid}`, ['uid', '==', user.uid]);  
 
  
  const arrayOfPictures = () => {
  

    if (posts === undefined || posts === null || posts.length === 0 ) { 

      return <h3>Shopping Cart Empty - Add Items to the Cart!</h3>


    }
    else {
      
      return (
  
        <ul className="shoppingCartList">
          {posts.map(post => (
            
            <li className="shoppingCartItem" key={post.id}>
              <h3>Product Name: {post.name} says:</h3>
              <p>Brand: {post.brand}</p>
              <p>Price: {post.price}</p>
              <img src={post.api_featured_image} alt={post.name}></img>
              <p>Quantity: {post.quantity}</p>
            </li>

          ))}
        <TotalCart posts={posts}/>
        </ul>
      
      )
    }
  
  }

    return (
      <div className="front-Page-FirebaseItems">
        {arrayOfPictures()}
      </div>
    )
  }