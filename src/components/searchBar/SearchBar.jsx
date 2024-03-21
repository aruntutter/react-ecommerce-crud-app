import { useContext, useState } from "react";
import "./SearchBar.css";
import myContext from "../../context/myContext";
import { useNavigate } from "react-router";

const SearchBar = () => {
  const context = useContext(myContext);
  const { getAllProduct } = context;
  // Search State
  const [search, setSearch] = useState("");

  // Filter Search Data
  const filterSearchData = getAllProduct
    .filter((obj) => obj.title.toLowerCase().includes(search))
    .slice(0, 8);

  const navigate = useNavigate();

  return (
    <div className="search-container">
      {/* search input  */}
      <input
        type="text"
        placeholder="Search here"
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      {/* search drop-down  */}
      <div className="search-results">
        {search && (
          <div className="search-results-list">
            {filterSearchData.length > 0 ? (
              <>
                {filterSearchData.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="search-results-product"
                      onClick={() => navigate(`/productinfo/${item.id}`)}
                    >
                      <div className="search-results-title">
                        <p>{item.title}</p>
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              <>
                <p>No matches found</p>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
