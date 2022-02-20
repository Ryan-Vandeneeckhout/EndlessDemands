const TotalCart = (props) => {
  //Total in Shopping Cart Function had to be dropped down and conditionally render to stop a user error from appearing - i.e no items found but trying to render the total anyways.

  const sumTotal = (arr) =>
    arr.reduce((sum, { price, quantity }) => sum + price * quantity, 0);

  let total = sumTotal(props.posts);

  return (
    <div className="totalCart">
      <p>Total: ${total.toFixed(2)}</p>
    </div>
  );
};
export default TotalCart;
