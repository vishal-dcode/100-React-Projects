import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/actions/bagSlice.js";

import { IoClose } from "react-icons/io5";
import { IoIosReturnRight } from "react-icons/io";

export default function Bag() {
  const dispatch = useDispatch();
  const bagItems = useSelector((store) => store.bagRedux);
  const itemsList = useSelector((store) => store.itemsRedux);

  // Left side
  const finalItems = itemsList.filter((item) => {
    const itemIdx = bagItems.indexOf(item.id);
    return itemIdx >= 0;
  });

  // Right side
  let totalItems = finalItems.length;
  let totalMRP = 0; // Initialize totalMRP
  let discountPrice = 0;
  const CONVENIENCE_FEE = 0;
  finalItems.forEach((item) => {
    totalMRP += item.original_price;
    discountPrice += item.original_price - item.current_price;
  });
  let totalAmount = totalMRP - discountPrice;

  return (
    <main className="bag-wrapper">
      <section className="bag-item-wrapper">
        {finalItems.length === 0 ? (
          <span className="bag-empty">Bag is empty.</span>
        ) : (
          finalItems.map((item, idx) => (
            <div key={idx} className="bag-item-container ">
              <div className="item-left-part">
                <img className="bag-item-img" src={item.image} />
              </div>
              <div className="item-right-part">
                <div>
                  <div className="item-name line-clamp">{item.item_name}</div>
                  <div className="company">Sold by: {item.company}</div>
                  <div className="price-container">
                    <span className="current-price">
                      Rs. {item.current_price}
                    </span>
                    <span className="original-price">
                      Rs. {item.original_price}
                    </span>
                    <span className="discount-percentage">
                      {item.discount_percentage}% OFF
                    </span>
                  </div>
                </div>
                <div className="delivery-details-ctr">
                  <IoIosReturnRight className="delivery-icon" />
                  <div>
                    <div className="return-period">
                      <span className="return-period-days">
                        {item.return_period} days
                      </span>{" "}
                      return available
                    </div>
                    <div className="delivery-details">
                      Delivery by
                      <span className="delivery-details-days">
                        {item.delivery_date}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="remove-from-cart"
                onClick={() => {
                  dispatch(bagActions.removeFromBag(item.id));
                }}
              >
                <IoClose />
              </div>
            </div>
          ))
        )}
      </section>

      <aside>
        <section className="bag-details-container">
          <div className="price-header">PRICE DETAILS ({totalItems} Items)</div>
          <div className="price-item">
            <span className="price-item-tag">Total MRP</span>
            <span className="price-item-value">₹{totalMRP}</span>
          </div>
          <div className="price-item">
            <span className="price-item-tag">Discount on MRP</span>
            <span className="price-item-value priceDetail-base-discount">
              -₹{discountPrice}
            </span>
          </div>
          <div className="price-item">
            <span className="price-item-tag">Convenience Fee</span>
            <span className="price-item-value">₹{CONVENIENCE_FEE}</span>
          </div>
          <div className="divider-dark"></div>
          <div className="price-footer">
            <span className="price-item-tag">Total Amount</span>
            <span className="price-item-value">₹{totalAmount}</span>
          </div>
        </section>
        <button className="btn-place-order">
          <div className="css-xjhrni">PLACE ORDER</div>
        </button>
      </aside>
    </main>
  );
}
