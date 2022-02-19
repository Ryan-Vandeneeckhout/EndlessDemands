import { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import axios from "axios";

const StoreFrontBrands = (props) => {

    const [individualProducts, setIndividualProduct] = useState([]);
    const [arrayOne, setArrayOne] = useState(0);
    const [clickedLeft, setClickedLeft] = useState(false);
    const [clickedRight, setClickedRight] = useState(false); 
    const [arrayTwo, setArrayTwo] = useState(5); 

    useEffect(() => {
        axios({
            method: "GET",
            url: ` https://makeup-api.herokuapp.com/api/v1/products.json`,
            responseType: "json",
            params: {
                product_type: `${props.productType}`,
                price_greater_than: 0,
            },
        
        }).then((jsonResponse) => {
              
            if (jsonResponse.length !== 0) {
                setIndividualProduct(jsonResponse.data);
            }
        
        })
    }, [props.productType]);
    
    const renderProductMap = () => {

        if (individualProducts === null || individualProducts === undefined || individualProducts === "" || individualProducts.length === 0);

        else if (individualProducts !== null || individualProducts !== undefined || individualProducts !== "" || individualProducts.length !== 0){

            return (
                <>
                    {individualProducts.slice(arrayOne, arrayTwo).map((item) => {
                        return (

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
                    
                        );
                    })
                    }
                </>
            )
        }
    }
    const StoreFrontRight = () => {

        setClickedRight((clickedRight) => !clickedRight); 

        if (clickedRight === true) {
            
            setArrayOne(12); 
            setArrayTwo(17); 

        }

        else {

            setArrayOne(0); 
            setArrayTwo(5); 
        }
       
    }
    const StoreFrontLeft = () => {

        setClickedLeft((clickedLeft) => !clickedLeft); 

        if (clickedLeft === true) {
            setArrayOne(6); 
            setArrayTwo(11);

        }
        else {
            
            setArrayOne(0);
            setArrayTwo(5);
        }
     
    }
    return (

        <ul className="productListMakeupAPI storefront">

            <button className="buttonStoreFront Left" onClick={StoreFrontLeft}><i className="fas fa-play"></i></button>
      
            {renderProductMap()}
            
            <button className="buttonStoreFront Right" onClick={StoreFrontRight}><i className="fas fa-play"></i></button>

        </ul>
    )
}
export default StoreFrontBrands; 