import { useCollection } from "./firebaseHooks/useMakeupPosts";
import { Link, useLocation } from "react-router-dom";

const ShoppingCartCounter = (props) => {
  //Child Componet Drop Down to Fix if User Signs out While Shopping Cart has Items Fix //
  const { posts } = useCollection(`${props.user.uid}`, [
    "uid",
    "==",
    props.user.uid,
  ]);

  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");
  const renderPosts = () => {
    //Firestore Error Handling return Nothing if Null//
    if (
      posts === null ||
      posts === undefined ||
      posts.length === 0 ||
      posts === ""
    );
    else {
      //Number of Items in Shopping Cart//
      return <span className="numberFix">{posts.length}</span>;
    }
  };
  return (
    <li>
      <Link aria-label="Shopping Cart For Signed in Users" className={splitLocation[1] === "shoppingcart" ? "active" : "not"} to="/shoppingcart">
        <span className="iconNav">
          <i className="fa-solid fa-basket-shopping darkgreen" />
        </span>
        <span className="navText">Shopping <span className="secondNavText">Cart</span></span> {renderPosts()}
      </Link>
    </li>
  );
};

export default ShoppingCartCounter;