import { useNavigate } from "react-router-dom";
import "./HomePageProductCard.css";
import { useContext } from "react";
import myContext from "../../context/myContext";
import Loader from "../loader/Loader";

const HomePageProductCard = () => {
  // Navigate to ProductInfo
  const navigate = useNavigate();

  const context = useContext(myContext);
  const { loading, getAllProduct } = context;

  return (
    <>
      <div className="heading">
        <h2>Best Selling Products</h2>
      </div>
      {loading && <Loader />}
      <div className="product-card-container">
        {/* Product */}
        {getAllProduct.slice(0, 8).map((item, index) => {
          const { id, title, price, productImageUrl } = item;
          return (
            <div key={index} className="product-card">
              <div
                className="product-image"
                onClick={() => navigate(`/productinfo/${id}`)}
              >
                <img
                  src={productImageUrl}
                  alt={title}
                  className="product-image"
                />
              </div>
              <div className="product-details">
                <p className="website-name">ezBuy</p>
                <h2 className="product-title">{title.substring(0, 25)}</h2>
                <p className="product-price">&#8377;{price}</p>
                <div className="add-to-cart-btn">
                  <button>Add to Cart</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HomePageProductCard;
