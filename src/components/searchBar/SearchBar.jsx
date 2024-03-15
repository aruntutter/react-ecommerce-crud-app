import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="search-container">
      <input type="text" className="search-input" placeholder="Search..." />
      <div className="search-icon">
        <FaSearch />
      </div>
    </div>
  );
};

export default SearchBar;
