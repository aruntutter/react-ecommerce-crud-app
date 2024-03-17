import "./AllProduct.css";
import Layout from "../../components/layout/Layout";
import { useNavigate } from "react-router-dom";

// productData
const productData = [
  {
    id: 1,
    image:
      "https://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec79ac175ea8490a67939.jpg",
    title: "Hand Painted Blue Kaushalam Tea Pot in Aluminium",
    desc: "Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
    price: 150,
    trendingProductName: "Featured",
    quantity: 1,
  },
  {
    id: 2,
    image:
      "https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg",
    title: "Kaushalam kalash Copper Pot",
    desc: "Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
    price: 120,
    trendingProductName: "Featured",
    quantity: 1,
  },
  {
    id: 3,
    image:
      "https://i.pinimg.com/564x/fd/50/68/fd50688767adb47aba7204f034554cbd.jpg",
    title: "Hand Painted Blue Kaushalam Tea Pot in Aluminium",
    desc: "Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
    price: 130,
    trendingProductName: "Featured",
    quantity: 1,
  },
  {
    id: 4,
    image:
      "https://i.pinimg.com/564x/22/80/8d/22808d88ada424962f2e064f3075b2d1.jpg",
    title: "Hand Painted Blue Kaushalam Tea Pot in Aluminium",
    desc: "Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
    price: 120,
    trendingProductName: "Featured",
    quantity: 1,
  },
  {
    id: 1,
    image:
      "https://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec79ac175ea8490a67939.jpg",
    title: "Hand Painted Blue Kaushalam Tea Pot in Aluminium",
    desc: "Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
    price: 150,
    trendingProductName: "Featured",
    quantity: 1,
  },
  {
    id: 2,
    image:
      "https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg",
    title: "Kaushalam kalash Copper Pot",
    desc: "Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
    price: 120,
    trendingProductName: "Featured",
    quantity: 1,
  },
  {
    id: 3,
    image:
      "https://i.pinimg.com/564x/fd/50/68/fd50688767adb47aba7204f034554cbd.jpg",
    title: "Hand Painted Blue Kaushalam Tea Pot in Aluminium",
    desc: "Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
    price: 130,
    trendingProductName: "Featured",
    quantity: 1,
  },
  {
    id: 4,
    image:
      "https://i.pinimg.com/564x/22/80/8d/22808d88ada424962f2e064f3075b2d1.jpg",
    title: "Hand Painted Blue Kaushalam Tea Pot in Aluminium",
    desc: "Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
    price: 120,
    trendingProductName: "Featured",
    quantity: 1,
  },
];

const AllProduct = () => {
  // Navigate to ProductInfo
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="all-product-heading">
        <h2>All Products</h2>
      </div>
      <div className="all-product-container">
        {/* Product */}
        {productData.map((item, index) => {
          const { image, title, price } = item;
          return (
            <div className="all-product" key={index}>
              <div
                className="all-product-image"
                onClick={() => navigate("/productinfo")}
              >
                <img src={image} alt={title} className="all-product-image" />
              </div>
              <div className="all-product-details">
                <p className="all-product-website-name">ezBuy</p>
                <h2 className="all-product-title">{title.substring(0, 25)}</h2>
                <p className="all-product-price">${price}</p>
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
