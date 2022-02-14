import PostForm from "./PostForm";
import PostList from "./Postscollection";
import React from "react";

export default function Posts(props) {
    
    let Check = "1020"; 
    let page = props.page; 
    let Products = props.individualProducts;
    
    
    const renderForm = () => {

        if (page === null || page === undefined); 

        if (page === true) {
            
            return ( 
             <>
                <PostForm Products={Products} passedprop={Check} />
                <div className="productReviewTitleContianer"> 
                    <h2 className="productReviewh2">Product Reviews</h2>
                </div> 
             </>
                
            )
        }
    }
    
    return (

        <>
            {renderForm()}
            <PostList Check={Check} page={page} />
        </>         
    
    );

}