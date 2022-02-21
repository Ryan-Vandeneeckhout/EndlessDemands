import { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import axios from "axios";
import { Link } from "react-router-dom";

const StoreFrontBrands = (props) => {

    const [individualProducts, setIndividualProduct] = useState([]);
    const [arrayOne, setArrayOne] = useState(0);
    // UseState for Buttons Left and Right// 
    const [clickedLeft, setClickedLeft] = useState(false);
    const [clickedRight, setClickedRight] = useState(false); 
    const [arrayTwo, setArrayTwo] = useState(4); 
    //API call for Makeup Products// 
    useEffect(() => {
        axios({
            method: "GET",
            url: ` https://makeup-api.herokuapp.com/api/v1/products.json`,
            responseType: "json",
            params: {
                product_type: `${props.productType}`,
                price_greater_than: 0,
            },
        //Return Products Specificed by Props and with a Price Greater then 0// 
        }).then((jsonResponse) => {
              
            if (jsonResponse.length !== 0) {
                setIndividualProduct(jsonResponse.data);
            }
        
        })
    }, [props.productType]);
    
    const renderProductMap = () => {
        //Error Handling for When the API Call Fails// 
        if (individualProducts === null || individualProducts === undefined || individualProducts === "" || individualProducts.length === 0);

        else if (individualProducts !== null || individualProducts !== undefined || individualProducts !== "" || individualProducts.length !== 0){

            return (
                <>
                    {individualProducts.slice(arrayOne, arrayTwo).map((item) => {
                        return (
                        // Product Item Creator From API Props Passed // 
                        <Link to={`/${item.id}`}>
                        <ProductItem
                        key={item.id}
                        brandname={item.brand}
                        productType={item.category}
                        currencyType={item.currency}
                        name={item.name}
                        image={item.image_link}
                        imagealt={item.api_featured_image}
                        price={item.price}
                        rating={item.rating}
                        tags={item.tag_list}
                        />
                        </Link>
                        );
                    })
                    }
                </>
            )
        }
    }

    //Array Handler Button Right for StoreFront/HomePage //
    const StoreFrontRight = () => {

        setClickedRight((clickedRight) => !clickedRight); 

        if (clickedRight === true) {
            
            setArrayOne(10); 
            setArrayTwo(14); 

        }

        else {

            setArrayOne(0); 
            setArrayTwo(4); 
        }
       
    }

    
    //Array Handler Button Left for StoreFront/HomePage //
    const StoreFrontLeft = () => {

        setClickedLeft((clickedLeft) => !clickedLeft); 

        if (clickedLeft === true) {
            setArrayOne(5); 
            setArrayTwo(9);

        }
        else {
            
            setArrayOne(0);
            setArrayTwo(4);
        }
     
    }
    return (

        <ul className="productListMakeupAPI storefront">

            {/*//Array Handler Button Right JSX for StoreFront/HomePage */}
            <button aria-label='Click to scroll left on the display elments for more options' className="buttonStoreFront Left" onClick={StoreFrontLeft}><i className="fas fa-play"></i></button>
      
            {renderProductMap()}
             {/*//Array Handler Button Left JSX for StoreFront/HomePage */}
            <button aria-label='Click to scroll Right on the display elments for more options' className="buttonStoreFront Right" onClick={StoreFrontRight}><i className="fas fa-play"></i></button>

        </ul>
    )
}
export default StoreFrontBrands; 