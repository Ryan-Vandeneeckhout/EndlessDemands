import Banner from "../../pages/Banner.jsx";
import { useState } from "react";
import useStateRef from 'react-usestateref'; 
import axios from "axios";
import MainStoreForm from "./MainStoreForm.jsx";
import StoreItems from "./StoreItems.jsx";
import "./UserStoreInputCallAPIAndStoreItemCointainer.css";

import { ProductTypeCatgory } from "../inputmaps/storeCatologueMaps/ProductTypeCatgoryItemsNavList.js";
import { TaglistCatgoryItemsNavList } from "../inputmaps/storeCatologueMaps/TaglistCatgoryITemsNavList.jsx";
import { BrandCatgory } from "../inputmaps/storeCatologueMaps/BrandCatgoryItemsNavList.js";
import TaglistInput from "./formInputButtons/TaglistInput.js";

const UserStoreInputCallAPIAndStoreItemCointainer = () => {
    
    const [productItem, setProductItem, productItemRef] = useStateRef([]);
    const [branding, setBranding, brandRef] = useStateRef("");
    const [productTypeSelected, setProductTypeSelected, productTypeRef] = useStateRef("");
    const [productCatgorySelected, setProductCatgorySelected, productCatgorySelectedRef] = useStateRef("");
    const [price, setPrice, priceRef] = useStateRef("");
    const [query, setQuery, queryRef] = useStateRef(""); 
    const [errorAPI, setErrorAPI] = useState(false);
    const [count, setCount] =useState(0); 

    const BrandInput = (e) =>{
        setBranding(e.target.value);
        console.log(branding);
        console.log(productCatgorySelected);
        console.log(price);
        console.log(errorAPI);
        APIMAKEUPHEROCallFunction();
        
    }

    const ProductTypeInput = (e) => {
        setProductTypeSelected(e.target.value);
        console.log(productTypeRef.current);
        APIMAKEUPHEROCallFunction();
    }

    const ProductCatgoryInput = (e) => {
        setProductCatgorySelected(e.target.value);
        console.log(productCatgorySelectedRef.current);
        APIMAKEUPHEROCallFunction();
    }

    const APIMAKEUPHEROCallFunction = () => {

        if (productTypeRef.current === "" && brandRef.current === "" && priceRef.current === "" && productCatgorySelectedRef.current === "") {
            
            setErrorAPI(true);
        }

        else {
        
            axios({
                method: "GET",
                url: ` https://makeup-api.herokuapp.com/api/v1/products.json`,
                responseType: "json",
                params: {
                    product_type: `${productTypeRef.current}`,
                    brand: `${brandRef.current}`,
                    price_greater_than: `${priceRef.current}`,
                    product_category: `${productCatgorySelectedRef.current}`,
                },
            
            }).then((jsonResponse) => {
                setCount(1); 
                  
                if (jsonResponse.length !== 0) {
                    setProductItem(jsonResponse.data);
                }

                else if (productItem.length === 0) {
                    setProductItem("");
                    throw new Error(jsonResponse.statusText);
                }
            
            }).catch((err) => {
                //Api error handling. 
                if (err.message === "Not Found") {
                  alert("Something went wrong.");
                } else {
                  alert("Please try again.");
                }
            })
        }

     }
      
    const SearchInputAPI = (event) => {
        
        let queryType = ""; 
        setQuery(event.target.value); 
            
        if (!BrandCatgory.includes(`${query}`) && `${query}`.length > 3) {
            queryType = "brand";
            calling();
        }
            
        if (!ProductTypeCatgory.includes(`${query}`) && `${query}`.length > 3) {
            
            queryType = "product_type";
            calling();
        
        }
            
        if (!TaglistCatgoryItemsNavList.includes(`${query}`) && `${query}`.length > 3) {
            
            queryType = "product_tags";
            calling();
        
        }
            
        function calling(){
        
            axios({
            method: "GET",
            url: ` https://makeup-api.herokuapp.com/api/v1/products.json?${queryType}=${queryRef.current}`,
                responseType: "json",
                
            }).then((jsonResponse) => {
                      
                if (jsonResponse.length !== 0) {
                    setProductItem(jsonResponse.data);
                }

                else if (productItem.length === 0) {
                    setProductItem("");
                    throw new Error(jsonResponse.statusText);
                }
               
            }).catch((err) => {
            //Api error handling. 
            if (err.message === "Not Found") {
              alert("Something went wrong.");
            } else {
              alert("Please try again.");
            }
        })
        
        }
    
    }
    const handleChangeOption = () => { 

            //a copy of all the data is made so it can be sorted alphabetically
        const copyOfProducts = productItem;
        const orderedPrice = copyOfProducts.sort((a, b) => { 
            let fa = a.brand,
                fb = b.brand;
            
                if (fa < fb) {
                    return -1;
                }
                if (fa > fb) {
                    return 1;
                }
                return 0;
            })
            //set product is updated to alphabetical order
        setProductItem([...orderedPrice]); 
        renderStoreItems();
    }

    const renderStoreItems = () => {
        
        if ((productItem === [] && count === 1 )|| (productItem === null && count === 1)|| (productItem.length === 0 && count === 1) || (productItem === undefined && count === 1)) {

            return (
                <ul className="productListMakeupAPI resultsNone">
                    <p>No Results Found for the Current Selections, Please Try Again</p>
                </ul>
            )
        }

        else if (productItem === [] || productItem === null || productItem.length === 0 || productItem === undefined) {
            
            
            return (
                <ul className="productListMakeupAPI initalPageLoad">
                    <p>Use the Form Inputs Above to Search For your Favourite Products!</p>
                </ul>
            )
        }
        
        else {

            return (

                <StoreItems productItem={productItemRef.current}/>
            )
        }
       
    }
    
    return (
        <section className="mainStoreCatologue">
            <Banner />
            <MainStoreForm APIMAKEUPHEROCallFunction={APIMAKEUPHEROCallFunction} slide={setPrice} ProductCatgoryInput={ProductCatgoryInput} productTypeRef={productTypeSelected} BrandInput={BrandInput} ProductTypeInput={ProductTypeInput} SearchInputAPI={SearchInputAPI} />
            <button onClick={handleChangeOption}>Click to sort alphabetical</button>
            <TaglistInput/>
            {renderStoreItems()}
        </section>
    )

}

export default UserStoreInputCallAPIAndStoreItemCointainer; 