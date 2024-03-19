import "./AllProduct.css";
import Layout from "../../components/layout/Layout";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import myContext from "../../context/myContext";
import Loader from "../../components/loader/Loader";

const AllProduct = () => {
  // Navigate to ProductInfo
  const navigate = useNavigate();

  const context = useContext(myContext);
  const { loading, getAllProduct } = context;

  return (
    <Layout>
      <div className="all-product-heading">
        <h2>All Products</h2>
      </div>
      {/* Loader */}
      {loading && <Loader />}
      <div className="all-product-container">
        {/* Product */}
        {getAllProduct.map((item, index) => {
          const { id, title, price, productImageUrl } = item;
          return (
            <div className="all-product" key={index}>
              <div
                className="all-product-image"
                onClick={() => navigate(`/productinfo/${id}`)}
              >
                <img
                  src={productImageUrl}
                  alt={title}
                  className="all-product-image"
                />
              </div>
              <div className="all-product-details">
                <p className="all-product-website-name">ezBuy</p>
                <h2 className="all-product-title">{title.substring(0, 25)}</h2>
                <p className="all-product-price">&#8377;{price}</p>
                <div className="add-to-cart-btn">
                  <button>Add to Cart</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default AllProduct;
