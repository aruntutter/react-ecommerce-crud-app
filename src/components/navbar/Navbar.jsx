import "./Navbar.css";
import SearchBar from "../searchBar/SearchBar";
import Logo from "../../assets/images/ezbuy-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { HiUser } from "react-icons/hi";
import { useSelector } from "react-redux";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("users"));
  console.log(user);

  // Navigate
  const navigate = useNavigate();

  // Logout
  const logout = () => {
    localStorage.clear("users");
    navigate("/login");
  };

  // cartItems
  const cartItems = useSelector((state) => state.cart);

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
          {!user ? (
            <li>
              <Link to={"/signup"}>Signup</Link>
            </li>
          ) : (
            ""
          )}
          {/* Profile */}
          {user?.role === "user" ? (
            <li>
              <Link to={"/user-dashboard"}>
                <div className="profile-pic">
                  <HiUser />
                </div>
              </Link>
            </li>
          ) : (
            <li>
              <Link to={"/admin-dashboard"}>
                <div className="profile-pic">
                  <HiUser />
                </div>
              </Link>
            </li>
          )}

          {/* Logout */}
          {user && (
            <li onClick={logout}>
              <Link>Logout</Link>
            </li>
          )}
          {/* Cart */}
          <li>
            <Link to={"/cart"}>Cart({cartItems.length})</Link>
          </li>
        </ul>
      </div>
      {/* Search Bar */}
      <SearchBar />
    </div>
  );
};

export default Navbar;
