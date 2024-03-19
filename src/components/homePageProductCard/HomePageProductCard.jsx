import { useNavigate } from "react-router-dom";
import "./HomePageProductCard.css";
import { useContext, useEffect } from "react";
import myContext from "../../context/myContext";
import Loader from "../loader/Loader";
import toast from "react-hot-toast";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const HomePageProductCard = () => {
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
    </>
  );
};

export default HomePageProductCard;
