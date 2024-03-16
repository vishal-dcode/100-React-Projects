import React from "react";

export default function Menu({ items }) {
  return (
    <div className="Menu">
      {items.map((item) => {
        const { title, price, img, desc } = item;
        return (
          <div className="menu-ctr">
            <div>
              <img src={img} alt={title} />
              <p className="price-tag">${price}</p>
            </div>
            <div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
