import "./ProductItem.css"; 

const ProductItem = (props) => {
    
    const renderRating = () => {
        //Product Rating Error Handling For Makeup API// 
        if(props.rating === null || props.rating === '0.0' || props.rating === undefined)
            
            return <p>Rating: Unavailable.</p>
        
        else {
              //Product Rating Success Handling For Makeup API to Two 00s// 
            let Z = parseFloat(`${props.rating}`).toFixed(2);
            return <p>Rating: {Z} Stars.</p>
        
        }
    }
   
    const renderPrice = () => {
         //Product Price Error Handling For Makeup API// 
    
        if (props.price === null || props.price === '0.0')

            return <p className="PriceParagraph">Price: Unavailable.</p>

        else {
        //Product Price Success Handling For Makeup API to two 00s// 
            let Z = parseFloat(`${props.price}`).toFixed(2);

            return <p id="productPriceElement" className="productPriceElement">Price: ${Z}</p>

        }
    }

    const renderProductType = () => {
          //Product Type Error Handling For Makeup API// 
        if (props.productType === null || props.productType === ' ' || props.productType === undefined || props.productType.length === 0)
            
            return 
        
        else {
          //Product Type Success Handling For Makeup API Fix API html chars in Title// 
            return <p className="productName">Product Type: {`${props.productType}`.replaceAll(`_`, ' ')}</p>
        
        }
    }

    return (
        <li >
            <div className="showContainer product">
               
                <div className="image">
                {/*API image for Makeup API 1 Item*/}
                <img src={props.imagealt} alt="Something Went Wrong"/>
                </div>
                <div className="info-content">
                    <h3 className="productHeadingName">{`${props.name}`.replaceAll(`&trade;`, '').replaceAll('<BR>', ' ')}</h3>
                    {/*Coinditionial Rendering for PType*/}
                    {renderProductType()}
                    <p className="productBrandName">Brand Name: {props.brandname} {props.coloursProduct}</p>
                    {/*Conditionial Rendering for Price*/}
                    {renderPrice()}
                    {/*Conditonail Rendering for Rating*/}
                    {renderRating()}
                </div>
            </div>
        </li>
    )
}

export default ProductItem;