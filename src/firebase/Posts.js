import PostForm from "./PostForm";
import PostList from "./Postscollection";
import React from "react";

export default function Posts(props) {
  let page = props.page;

  //Product Posts Section Component

  const renderForm = () => {
    if (page === null || page === undefined);

    if (page === true) {
      return (
        <>
          <PostForm passedprop={props.passedprops} />
          <div className="productReviewTitleContianer">
            <h2 className="productReviewh2">Product Reviews</h2>
          </div>
        </>
      );
    }
  };

  return (
    <>
      {renderForm()}
      <PostList Check={props.passedprops} page={page} />
    </>
  );
}
