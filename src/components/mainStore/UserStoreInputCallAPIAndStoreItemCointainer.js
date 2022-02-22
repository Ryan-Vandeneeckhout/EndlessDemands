//Banner Import
import Banner from "../../pages/Banner.jsx";
//React Imports
import { useRef, useState, useEffect } from "react";
import useStateRef from "react-usestateref";
import axios from "axios";
//Store Items Import
import StoreItems from "./StoreItems.jsx";
import MainStoreForm from "./MainStoreForm.jsx";
import "./UserStoreInputCallAPIAndStoreItemCointainer.scss";
//Input for Forms and Check Maps Imports//
import PriceSliderInput from "./formInputButtons/PriceSliderInput";
import { ProductTypeCatgory } from "../inputmaps/storeCatologueMaps/ProductTypeCatgoryItemsNavList.js";
import { TaglistCatgoryItemsNavList } from "../inputmaps/storeCatologueMaps/TaglistCatgoryITemsNavList.jsx";
import { BrandCatgory } from "../inputmaps/storeCatologueMaps/BrandCatgoryItemsNavList.js";
import TaglistInput from "./formInputButtons/TaglistInput.js";

const UserStoreInputCallAPIAndStoreItemCointainer = () => {
  const [productItem, setProductItem, productItemRef] = useStateRef([]);
  const [, setBranding, brandRef] = useStateRef("");
  const [productTypeSelected, setProductTypeSelected, productTypeRef] =
    useStateRef("");
  const [
    ,
    setProductCatgorySelected,
    productCatgorySelectedRef,
  ] = useStateRef("");
  const [, setPrice, priceRef] = useStateRef("");
  const [alphabetical, setAlphabetical] = useState(false);
  const [priceSort, setPriceSort] = useState(false); 
  const [taglistVisbility, setTaglistVisbility] = useState(false); 
  const [query, setQuery, queryRef] = useStateRef("");
  const [, setTagValue, tagValueRef] = useStateRef("");
  const [, setErrorAPI] = useState(false);
  const [alphabeticalText, setAlphabeticalText] = useState("Click to Sort A-Z");
  const [priceText, setPriceText] = useState("Click to Sort Low to High Price")
  const [count, setCount] = useState(0);
  const [tagsarray, setTagsArray, TagsArrayRef] = useStateRef([]);
  const sortButtonRef = useRef();
  const sortPriceButtonRef = useRef(); 

  //If the Brand Input is Selected by User Change Value//
  const BrandInput = (e) => {
    setBranding(e.target.value);
   
    APIMAKEUPHEROCallFunction();
  };
  //If Product Type is Selected by User Change Value
  const ProductTypeInput = (e) => {
    setProductTypeSelected(e.target.value);
    APIMAKEUPHEROCallFunction();
  };
  //If Product Cat Input is Selected by User Change Value
  const ProductCatgoryInput = (e) => {
    setProductCatgorySelected(e.target.value);
    APIMAKEUPHEROCallFunction();
  };
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  //API Makeup Call Function//
  const APIMAKEUPHEROCallFunction = () => {
    //If User Selects None but Trys to Call the API stops Call
    if (
      productTypeRef.current === "" &&
      brandRef.current === "" &&
      priceRef.current === "" &&
      productCatgorySelectedRef.current === "" &&
      TagsArrayRef.current === []
    ) {
      setErrorAPI(true);
    }
    //Call API Function Makeup//
    else {
      axios({
        method: "GET",
        url: ` https://mycorsproxywinner.herokuapp.com/https://makeup-api.herokuapp.com/api/v1/products.json`,
        responseType: "json",
        params: {
          product_type: `${productTypeRef.current}`,
          brand: `${brandRef.current}`,
          price_greater_than: `${priceRef.current}`,
          product_category: `${productCatgorySelectedRef.current}`,
          product_tags: `${TagsArrayRef.current}`,
        },
      })
        .then((jsonResponse) => {
          setCount(1);

          if (jsonResponse.length !== 0) {
            setProductItem(jsonResponse.data);
          } else if (productItem.length === 0) {
            setProductItem([]);
            throw new Error(jsonResponse.statusText);
          }
        })
        .catch((err) => {
          //Api error handling.
          if (err.message === "Not Found") {
            alert("Something went wrong.");
          } else {
            alert("Please try again.");
          }
        });
    }
  };

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

    if (
      !TaglistCatgoryItemsNavList.includes(`${query}`) &&
      `${query}`.length > 3
    ) {
      queryType = "product_tags";
      calling();
    } else if (`${query}`.length > 4) {
      setCount(1);
    }
    //If user wishes to Search by their input instead of predetermined Selection API call
    function calling() {
      axios({
        method: "GET",
        url: ` https://makeup-api.herokuapp.com/api/v1/products.json?${queryType}=${queryRef.current}`,
        responseType: "json",
      })
        .then((jsonResponse) => {
          if (jsonResponse.length !== 0) {
            setProductItem(jsonResponse.data);
          } else if (productItem.length === 0) {
            setProductItem("");
            throw new Error(jsonResponse.statusText);
          }
        })
        .catch((err) => {
          //Api error handling.
          if (err.message === "Not Found") {
            alert("Something went wrong.");
          } else {
            alert("Please try again.");
          }
        });
    }
  };
  const handlePriceSortOption = () => {
    //a copy of all the data is made so it can be sorted alphabetically
    if (priceSort === false) {
      const copyOfProducts = productItem;
      const orderedPrice = copyOfProducts.sort((a, b) => {
        let pa = a.price,
          pb = b.price;

        if (pa < pb) {
          return -1;
        }
        if (pa > pb) {
          return 1;
        }
        return 0;
      });
      //set product is updated to alphabetical order false for decscending true for ascending//
      setProductItem([...orderedPrice]);
      setPriceText("Click to Sort Low to High Price");
      sortPriceButtonRef.current.classList.add("clickedSortButton");
      setPriceSort(true);
      renderStoreItems();
    } else {
      //a copy of all the data is made so it can be sorted alphabetically
      const copyOfProducts = productItem;
      const orderedPrice = copyOfProducts.sort((a, b) => {
        let pa = a.price,
          pb = b.price;

        if (pa > pb) {
          return -1;
        }
        if (pa < pb) {
          return 1;
        }
        return 0;
      });
      //set product is updated to alphabetical order false for decscending true for ascending//
      setProductItem([...orderedPrice]);
      sortPriceButtonRef.current.classList.remove("clickedSortButton");
      setPriceSort(false);
      setPriceText("Click to Sort High to Low Price");
      renderStoreItems();
    }
  };

  const handleChangeOption = () => {
    //a copy of all the data is made so it can be sorted alphabetically
    if (alphabetical === false) {
      const copyOfProducts = productItem;
      const orderedPrice = copyOfProducts.sort((a, b) => {
        let pa = a.name,
          pb = b.name;

        if (pa < pb) {
          return -1;
        }
        if (pa > pb) {
          return 1;
        }
        return 0;
      });
      //set product is updated to alphabetical order false for decscending true for ascending//
      setProductItem([...orderedPrice]);
      setAlphabeticalText("Click to Sort A-Z");
      setAlphabetical(true);
      sortButtonRef.current.classList.add("clickedSortButton");
      renderStoreItems();
    } else {
      //a copy of all the data is made so it can be sorted alphabetically
      const copyOfProducts = productItem;
      const orderedPrice = copyOfProducts.sort((a, b) => {
        let pa = a.name,
          pb = b.name;

        if (pa > pb) {
          return -1;
        }
        if (pa < pb) {
          return 1;
        }
        return 0;
      });
      //set product is updated to alphabetical order false for decscending true for ascending//
      setProductItem([...orderedPrice]);
      sortButtonRef.current.classList.remove("clickedSortButton");
      setAlphabetical(false);
      setAlphabeticalText("Click to Sort Z-A");
      renderStoreItems();
    }
  };
  const renderStoreItems = () => {
    //If User Inputs but there is no Products for their Selection Error Handling
    if (
      (productItem === [] && count === 1) ||
      (productItem === null && count === 1) ||
      (productItem.length === 0 && count === 1) ||
      (productItem === undefined && count === 1)
    ) {
      return (
        <ul className="productListMakeupAPI resultsNone">
          <h3>No Results Found for the Current Selections, Please Try Again</h3>
        </ul>
      );
    }
    //Initial State for Product Input when User Lands on the Page
    else if (
      productItem === [] ||
      productItem === null ||
      productItem.length === 0 ||
      productItem === undefined
    ) {
      return (
        <ul className="productListMakeupAPI initalPageLoad">
          <h3>
            Use the Form Inputs Above to Search For your Favourite Products!
          </h3>
        </ul>
      );
    } else {
      //Success on User Input(s) render Store Items//
      return <StoreItems productItem={productItemRef.current} />;
    }
  };

  const tagArray = () => {
    //If the Taglist Array Does not Contain the Selection
    if (!tagsarray.includes(tagValueRef.current)) {
      setTagsArray((tagsarray) => [...tagsarray, tagValueRef.current]);
      APIMAKEUPHEROCallFunction();
    } else {
      //If the User Wishes to Remove the Current Clicked Tag from the secelction Array
      setTagsArray(tagsarray.filter((item) => item !== tagValueRef.current));
      //If the User Removes all Tags input
      if (tagsarray.length === 0 || tagsarray === []) {
          setProductItem([]);
      }
      //If the Tags input is not zero after the User Remove a Tag input Update the Store Selection//
      else {
          APIMAKEUPHEROCallFunction();
      }
    }
  };
   
  return (
    <section className="mainStoreCatologue">
      <Banner />
      {/*Store Form JSX*/}
      <MainStoreForm
        APIMAKEUPHEROCallFunction={APIMAKEUPHEROCallFunction}
        slide={setPrice}
        ProductCatgoryInput={ProductCatgoryInput}
        productTypeRef={productTypeSelected}
        BrandInput={BrandInput}
        ProductTypeInput={ProductTypeInput}
        SearchInputAPI={SearchInputAPI}
      />
      {/*Price Slider and Alpha Inputs*/}
      <div className="secondForm">
        <PriceSliderInput slide={setPrice} />
        <button
          ref={sortButtonRef}
          className="sortButtonForm"
          onClick={handleChangeOption}
        >
          {alphabeticalText}
        </button>
        <button ref={sortPriceButtonRef} className="sortButtonForm" onClick={handlePriceSortOption}>{priceText}</button>
        <button onClick={() => { setTaglistVisbility((taglistVisbility) => !taglistVisbility);}} className="sortButtonForm"
        >Search by Product Tags</button>
      </div>

      {/*Taglist JSX*/}
      <TaglistInput taglistVisbility={taglistVisbility} setTagValue={setTagValue} tagArray={tagArray} />
      <div className="mainStoreContainer">{renderStoreItems()}</div>
    </section>
  );
};

export default UserStoreInputCallAPIAndStoreItemCointainer;