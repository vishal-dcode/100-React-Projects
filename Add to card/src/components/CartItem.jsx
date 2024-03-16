import React from "react";
import useGlobalContext from "../context/context.jsx";
import {
  RiArrowUpSLine,
  RiArrowDownSLine,
  RiDeleteBin7Fill
} from "react-icons/ri";

export default function CartItem({ ...item }) {
  const { removeItem, increase, decrease, quantity } = useGlobalContext();

  const { id, title, price } = item;

  return (
    <section className="product-ctr">
      <div className="product-info">
        <img
          className="product-banner"
          src={`https://source.unsplash.com/random/?${title}`}
          alt={title}
        />
        <div className="product-content">
          <h3 className="product-title">{title}</h3>
          <p className="product-price">${price}</p>
          <button className="remove-btn" onClick={() => removeItem(id)}>
            <RiDeleteBin7Fill />
          </button>
        </div>
      </div>
      <div className="product-amount">
        <button onClick={() => increase(id)}>
          <RiArrowUpSLine />
        </button>

        <span>{quantity}</span>

        <button onClick={() => decrease(id)}>
          <RiArrowDownSLine />
        </button>
      </div>
    </section>
  );
}
