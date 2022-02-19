import { useCollection } from "../../firebase/firebaseHooks/useMakeupPosts";
import { Link } from "react-router-dom";

const ShoppingCartCounter = (props) => { 

    const { posts } = useCollection(`${props.user.uid}`, ['uid', '==', props.user.uid]);
   
    const renderPosts = () => {

        if (posts === null || posts === undefined || posts.length === 0 || posts === ""); 

        else {
            
            return <span className="numberFix">{posts.length}</span>;
            
        }
    }
    return (
        <li><Link aria-label="Shopping Cart For Signed in Users" to="/shoppingcart">Shopping Cart {renderPosts()} </Link></li>
    )
}

export default ShoppingCartCounter; 