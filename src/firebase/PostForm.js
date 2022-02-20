import { useState, useRef } from "react";

//Firebase Imports //
import { db } from "./config";
import { collection, addDoc } from "firebase/firestore";
import "./Postform.css";
import { useAuthContext } from "./firebaseHooks/useAuthContext";

export default function PostForm(props) {
  const [newPost, setNewPost] = useState("");
  const [postContainer, setPostContainer] = useState("");
  const reviewRef = useRef();
  const { user } = useAuthContext();
  //Individual Product Item Passed Props
  let DataBaseDocProps = props.passedprop;
  const [value, setValue] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //Add Post to Item Firestore

    await addDoc(collection(db, `${DataBaseDocProps}`), {
      name: newPost,
      post: postContainer,
      rating: value,
      uid: user.uid,
    });
    //Clear setStates after User Adds Post
    setNewPost("");
    setPostContainer("");
    setValue(0);
  };
  const reviewColourChanger = ({ target: { value: radius } }) => {
    //Rating Selector Colours
    if (radius > 0) {
      reviewRef.current.style.color = "red";
    }

    if (radius > 1) {
      reviewRef.current.style.color = "orange";
    }
    if (radius > 2) {
      reviewRef.current.style.color = "goldenrod";
    }
    if (radius > 3) {
      reviewRef.current.style.color = "lightgreen";
    }

    if (radius > 4) {
      reviewRef.current.style.color = "green";
    }
    setValue(radius);
  };
  return (
    <div className="postFormWrapper">
      <div className="productReviewTitleContianer">
        <h2 className="productReviewh2">Write a Product Review!</h2>
      </div>
      {/*Form JSX*/}
      <form onSubmit={handleSubmit}>
        <label>
          <input
            required
            type="text"
            onChange={(e) => setNewPost(e.target.value)}
            value={newPost}
            placeholder="Name:"
          />
        </label>
        <label>
          <textarea
            required
            id="message"
            name="message"
            className="message"
            placeholder="Write something.."
            onChange={(e) => setPostContainer(e.target.value)}
            value={postContainer}
          ></textarea>
        </label>

        <div>
          <h3 ref={reviewRef}>I Rate this Product {value} Stars!</h3>
          <input
            id="sliderPost"
            type="range"
            min={1}
            max={5}
            value={value}
            onChange={reviewColourChanger}
          />
        </div>
        <input type="submit" className="submit" value="Submit" />
      </form>
    </div>
  );
}