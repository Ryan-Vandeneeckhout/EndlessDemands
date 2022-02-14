import { useCollection } from "./firebaseHooks/useMakeupPosts";

export default function PostList(props) {
    

  let Check = props.Check; 

  const { posts } = useCollection(`${Check}`)
  
  const arrayOfPictures = () => {
  

    if (posts === undefined || posts === null || posts.length === 0) { 

      return <p>Fuck</p>


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