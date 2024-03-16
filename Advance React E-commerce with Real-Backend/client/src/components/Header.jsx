import { Link } from "react-router-dom";

import { FaShoppingCart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoPersonCircleSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";

export default function Header() {
  const bagLength = useSelector((store) => store.bagRedux);

  return (
    <header>
      <div className="header-wrapper container">
        <section>
          <div className="logo_container">
            <Link to="/">
              <h3 className="header-logo">Nextech</h3>
            </Link>
          </div>
          <nav className="nav_bar">
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Kids</a>
            <a href="#">
              Studio <sup>New</sup>
            </a>
          </nav>
        </section>
        <section>
          <div className="search_bar">
            <input className="search-input" placeholder="Search..." />
            <CiSearch className="search-icon" />
          </div>
          <div className="action_bar">
            <a className="icon-ctr" href="">
              <IoPersonCircleSharp />
              <span className="action_name">Profile</span>
            </a>

            <Link className="icon-ctr" to="/bag">
              <FaShoppingCart />
              <span className="action_name">Bag</span>
              <span className="bag-item-count">{bagLength.length}</span>
            </Link>
            <div className="hamburger">
              <GiHamburgerMenu className="icon icon-hamburger" />
              <IoClose className="icon icon-close" />
            </div>
          </div>
        </section>
      </div>
    </header>
  );
}
