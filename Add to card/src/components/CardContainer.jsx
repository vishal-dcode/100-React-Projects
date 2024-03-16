import CartItem from "./CartItem.jsx";
import useGlobalContext from "../context/context.jsx";
import Loading from "./Loading.jsx";

export default function CardContainer() {
  const { carts, loading, total, clearCart } = useGlobalContext();

  return (
    <>
      <div className="product-wrapper">
        {loading ? (
          <Loading />
        ) : (
          <>
            {carts.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
            <hr />
            <footer>
              <div>
                <h4>TOTAL</h4>
                <span>${total}</span>
              </div>
              <button className="btn" onClick={clearCart}>
                Clear Cart
              </button>
            </footer>
          </>
        )}
      </div>
    </>
  );
}
