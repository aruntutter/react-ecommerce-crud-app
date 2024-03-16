import "./ProductInfo.css";
import Layout from "../../components/layout/Layout";

const ProductInfo = () => {
  return (
    <Layout>
      <div className="product-info">
        <div className="product-info-container">
          <div className="product-custom-card">
            {/* Thumbnail */}
            <div className="product-custom-post-thumbnail">
              <div className="product-thumbnail-img">
                <img
                  src="https://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec79ac175ea8490a67939.jpg"
                  alt="shirt-image"
                />
              </div>
            </div>

            {/* Details */}
            <div className="product-custom-post-details">
              <div className="product-post-detail-text">
                {/* Title */}
                <h3>Hand Painted Blue Kaushalam Tea Pot in Aluminium</h3>
                {/* Price */}
                <h3>Rs.7,000</h3>
                {/* Description */}
                <p>
                  Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium,
                  handmade by Mrinalika Jain. Fair pricing. Ethically made.
                  Positive impact.
                </p>
                {/* Add to Cart Btn */}
                <div className="product-info-add-to-cart-btn">
                  <button>Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductInfo;
