import { useCollection } from "./firebaseHooks/useMakeupPosts";
import { Link } from "react-router-dom";

const ShoppingCartCounter = (props) => { 

    //Child Componet Drop Down to Fix if User Signs out While Shopping Cart has Items Fix // 

    const { posts } = useCollection(`${props.user.uid}`, ['uid', '==', props.user.uid]);
   
    const renderPosts = () => {
        //Firestore Error Handling return Nothing if Null// 

        if (posts === null || posts === undefined || posts.length === 0 || posts === ""); 

        else {
            //Number of Items in Shopping Cart// 
            return <span className="numberFix">{posts.length}</span>;
            
        }
    }
    return (
        <li><Link aria-label="Shopping Cart For Signed in Users" to="/shoppingcart">Shopping Cart {renderPosts()} </Link></li>
    )
}

export default ShoppingCartCounter; 