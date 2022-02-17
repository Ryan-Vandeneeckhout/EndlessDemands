import { useCollection } from "./firebaseHooks/useMakeupPosts";
import { useAuthContext } from "./firebaseHooks/useAuthContext";

export default function ShoppingCart() {
    
    const { user } = useAuthContext(); 
  const { posts } = useCollection(``)
  
  const arrayOfPictures = () => {
  

    if (posts === undefined || posts === null || posts.length === 0) { 

      return <h3>No User Reviews Found, Be the First To Rate!</h3>


    }
    else {
    
      return (
  
        <ul className="postReviewsList">
          {posts.map(post => (
            
            <li className="postReviewsOne" key={post.id}>
              <h3>{post.name} says:</h3>
              <p>Rating: {post.rating} / 5</p>
              <p>{post.post}</p>
            </li>

          ))}
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