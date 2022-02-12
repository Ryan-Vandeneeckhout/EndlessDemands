import "./ProductItem.css"; 

const ProductItem = (props) => {
    
    const renderRating = () => {
        if(props.rating === null || props.rating === '0.0' || props.price === undefined)
            
            return <p>Rating: Unavailable.</p>
        
        else {
            let Z = parseFloat(`${props.rating}`).toFixed(2);
            return <p>Rating: {Z} Stars.</p>
        
        }
    }
   
    const renderPrice = () => {
       
    
        if (props.price === null || props.price === '0.0')

            return <p className="PriceParagraph">Price: Unavailable.</p>

        else {

            let Z = parseFloat(`${props.price}`).toFixed(2);

            return <p id="productPriceElement" className="productPriceElement">Price: ${Z}</p>

        }
    }

    const renderProductType = () => {
        if (props.productType === null || props.productType === ' ' || props.productType === undefined || props.productType.length === 0)
            
            return 
        
        else {
        
            return <p className="productName">Product Type: {`${props.productType}`.replaceAll(`_`, ' ')}</p>
        
        }
    }

    return (
        <li >
            <div className="showContainer product">
                <div className="image">
                <img src={props.imagealt} alt="Something Went Wrong"/>
                </div>
                <div className="info-content">
                    <h3 className="productHeadingName">{`${props.name}`.replaceAll(`&trade;`, '').replaceAll('<BR>', ' ')}</h3>
                    {renderProductType()}
                    <p className="productBrandName">Brand Name: {props.brandname} {props.coloursProduct}</p>
                    {renderPrice()}
                    {renderRating()}
                </div>
            </div>
        </li>
    )
}

export default ProductItem;