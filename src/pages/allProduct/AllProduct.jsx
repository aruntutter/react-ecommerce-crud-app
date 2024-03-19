import "./AllProduct.css";
import Layout from "../../components/layout/Layout";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import myContext from "../../context/myContext";
import Loader from "../../components/loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import toast from "react-hot-toast";

const AllProduct = () => {
  // Navigate to ProductInfo
  const navigate = useNavigate();

  const context = useContext(myContext);
  const { loading, getAllProduct } = context;

  const cartItems = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  // add to cart
  const addCart = (item) => {
    // console.log(item);
    const { seconds, nanoseconds } = item.time;
    const serializedItem = {
      ...item,
      time: { seconds, nanoseconds }, // Store only the serializable data
    };
    dispatch(addToCart(serializedItem));
    toast.success("Add to cart");
  };

  // delete from cart
  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    toast.success("Removed from cart");
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

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
                  {cartItems.some((p) => p.id === item.id) ? (
                    <button onClick={() => deleteCart(item)}>
                      Delete from cart
                    </button>
                  ) : (
                    <button onClick={() => addCart(item)}>Add to cart</button>
                  )}
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
