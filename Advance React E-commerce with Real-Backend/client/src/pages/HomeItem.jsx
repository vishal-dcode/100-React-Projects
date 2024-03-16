import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/actions/bagSlice.js";

function StarRating({ rating }) {
  const fullStars = Math.floor(rating); // Get the number of full stars
  const hasHalfStar = rating % 1 !== 0; // Check if there's a half star
  const starElements = [];

  // Push full stars
  for (let i = 0; i < fullStars; i++) {
    starElements.push(<FaStar key={`full-${i}`} />);
  }

  // Push half star if applicable
  if (hasHalfStar) {
    starElements.push(<FaStarHalfAlt key="half" />);
  }

  // Fill the remaining stars with empty stars
  const totalStars = 5;
  const remainingStars = totalStars - fullStars - (hasHalfStar ? 1 : 0);
  for (let i = 0; i < remainingStars; i++) {
    starElements.push(<FaRegStar key={`empty-${i}`} />);
  }

  return <>{starElements}</>;
}

export default function HomeItem({ item }) {
  const bagLengthID = useSelector((store) => store.bagRedux);
  const elFound = bagLengthID.indexOf(item.id) >= 0;

  const dispatch = useDispatch();
  const handleAddToBag = () => {
    {
      dispatch(bagActions.addToBag(item.id));
    }
  };
  const handleRemoveFromBag = () => {
    {
      dispatch(bagActions.removeFromBag(item.id));
    }
  };
  return (
    <div className="item-container">
      <div className="image-ctr">
        <img className="item-image" src={item.image} alt="item image" />
        <div className="rating">
          <StarRating rating={item.rating.stars} />
        </div>
      </div>
      <div className="item-details">
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs. {item.current_price}</span>
          <span className="original-price">Rs. {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>
      </div>
      <button
        className="btn-add-bag"
        onClick={elFound ? handleRemoveFromBag : handleAddToBag}
      >
        {elFound ? "Remove from bag" : "Add to bag"}
      </button>
    </div>
  );
}
