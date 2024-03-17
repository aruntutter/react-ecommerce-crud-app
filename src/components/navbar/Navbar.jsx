import "./Navbar.css";
import SearchBar from "../searchBar/SearchBar";
import Logo from "../../assets/images/ezbuy-logo.png";
import { Link } from "react-router-dom";
import { HiUser } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Logo */}
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      {/* Links */}
      <div className="links">
        <ul>
          {/* Home */}
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          {/* All Products */}
          <li>
            <Link to={"/allproduct"}>All</Link>
          </li>
          {/* Signup */}
          <li>
            <Link to={"/signup"}>Signup</Link>
          </li>
          {/* Profile */}
          <li>
            <Link to={"/user-dashboard"}>
              <div className="profile-pic">
                <HiUser />
              </div>
            </Link>
          </li>
          {/* Cart */}
          <li>
            <Link to={"/cart"}>Cart-0</Link>
          </li>
        </ul>
      </div>
      {/* Search Bar */}
      <SearchBar />
    </div>
  );
};

export default Navbar;
