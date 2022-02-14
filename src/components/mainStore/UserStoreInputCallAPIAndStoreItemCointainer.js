import Banner from "../../pages/Banner.jsx";
import { useRef, useState } from "react";
import useStateRef from 'react-usestateref'; 
import axios from "axios";
import MainStoreForm from "./MainStoreForm.jsx";
import StoreItems from "./StoreItems.jsx";
import "./UserStoreInputCallAPIAndStoreItemCointainer.css";
import PriceSliderInput from "./formInputButtons/PriceSliderInput";
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
    const [alphabetical, setAlphabetical] = useState(false); 
    const [query, setQuery, queryRef] = useStateRef(""); 
    const [tagValue, setTagValue, tagValueRef] = useStateRef(""); 
    const [errorAPI, setErrorAPI] = useState(false);
    const [alphabeticalText, setAlphabeticalText] = useState("Click to Sort A-Z"); 
    const [count, setCount] = useState(0); 
    const [tagsarray, setTagsArray, TagsArrayRef] = useStateRef([]);
    const sortButtonRef = useRef(); 

    const BrandInput = (e) =>{
        setBranding(e.target.value);
        console.log(branding);
        console.log(productCatgorySelected);
        console.log(price);
        console.log(errorAPI);
        console.log(tagValue);
        APIMAKEUPHEROCallFunction();
        
    }

    const ProductTypeInput = (e) => {
        setProductTypeSelected(e.target.value);
        APIMAKEUPHEROCallFunction();
    }

    const ProductCatgoryInput = (e) => {
        setProductCatgorySelected(e.target.value);
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
        
        if(alphabetical === false) {

            const copyOfProducts = productItem;
            const orderedPrice = copyOfProducts.sort((a, b) => { 
                let fa = a.name,
                    fb = b.name;
                
                if (fa < fb) {
                    return -1;
                }
                if (fa > fb) {
                    return 1;
                }
                return 0;
            })
             //set product is updated to alphabetical order false for decscending true for ascending// 
            setProductItem([...orderedPrice]); 
            setAlphabeticalText("Click to Sort A-Z");
            setAlphabetical(true); 
            sortButtonRef.current.classList.add("clickedSortButton");
        renderStoreItems();

        }

        else { 

            const copyOfProducts = productItem;
            const orderedPrice = copyOfProducts.sort((a, b) => { 
                let fa = a.name,
                    fb = b.name;
                
                if (fa > fb) {
                    return -1;
                }
                if (fa < fb) {
                    return 1;
                }
                return 0;
            })

            setProductItem([...orderedPrice]); 
            sortButtonRef.current.classList.remove("clickedSortButton");
            setAlphabetical(false); 
            setAlphabeticalText("Click to Sort Z-A");
            renderStoreItems();
        }
        
       
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

                <StoreItems productItem={productItemRef.current} />
          
            )
        }
       
    }

  const tagArray = () => {  
 
    
    if (!tagsarray.includes(tagValueRef.current)) {   
        setTagsArray(tagsarray => [...tagsarray, tagValueRef.current]);
        console.log(TagsArrayRef.current);
    }

    else {
      
        setTagsArray(tagsarray.filter(item => item !== tagValueRef.current));
        console.log(TagsArrayRef.current);
    }
  }
    return (
        <section className="mainStoreCatologue">
            <Banner />
            <MainStoreForm APIMAKEUPHEROCallFunction={APIMAKEUPHEROCallFunction} slide={setPrice} ProductCatgoryInput={ProductCatgoryInput} productTypeRef={productTypeSelected} BrandInput={BrandInput} ProductTypeInput={ProductTypeInput} SearchInputAPI={SearchInputAPI} />
            <div className="secondForm">
                <PriceSliderInput slide={setPrice} />
                <button ref={sortButtonRef} className="sortButtonForm" onClick={handleChangeOption}>{alphabeticalText}</button>
            </div>
            <TaglistInput setTagValue={setTagValue} tagArray={tagArray}/>
            <div className="mainStoreContainer">
                {renderStoreItems()}
            </div>
            
        </section>
    )

}

export default UserStoreInputCallAPIAndStoreItemCointainer; 