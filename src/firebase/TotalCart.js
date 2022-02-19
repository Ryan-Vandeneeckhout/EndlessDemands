const TotalCart = (props) => {
    

    const sumTotal = arr => arr.reduce((sum, { price, quantity }) => sum + price * quantity, 0);

    let total = sumTotal(props.posts);
    console.log(total.toFixed(2));






    return (
        <div className="totalCart">
            <p>Total: ${total.toFixed(2)}</p>
        </div>
       
    )
}
export default TotalCart; 