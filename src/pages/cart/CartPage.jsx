import "./CartPage.css";
import Layout from "../../components/layout/Layout";
import { CiTrash } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  deleteFromCart,
  incrementQuantity,
} from "../../redux/cartSlice";
import toast from "react-hot-toast";
import { useEffect } from "react";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    toast.success("Product removed");
  };

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };

  // cartItem total
  const cartItemTotal = cartItems
    .map((item) => item.quantity)
    .reduce((prevValue, currValue) => prevValue + currValue, 0);

  const cartTotal = cartItems
    .map((item) => item.price * item.quantity)
    .reduce((prevValue, currValue) => prevValue + currValue, 0);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Discount
  const originalAmount = cartTotal;
  const discountPercentage = 8;
  const discountAmount = (originalAmount * discountPercentage) / 100;
  const totalAmount = originalAmount - discountAmount.toFixed(0);

  return (
    <Layout>
      <div className="cart-page">
        {/* Heading */}
        <h2>Your Cart</h2>
        <div className="list-pricing">
          {/* Product List */}
          <div className="cart-products-list-price">
            <div className="cart-all-products">
              {/* Single Product */}
              {cartItems.length > 0 ? (
                <>
                  {cartItems.map((item, index) => {
                    const {
                      id,
                      title,
                      price,
                      productImageUrl,
                      quantity,
                      category,
                    } = item;
                    return (
                      <div className="cart-single-product" key={index}>
                        {/* Product Img */}
                        <div className="cart-product-img">
                          <img src={productImageUrl} alt={title} />
                        </div>
                        {/* Product Details */}
                        <div className="cart-product-details">
                          <h4>{title}</h4>
                          <div>{category}</div>
                          <div>&#8377;{price}</div>
                          <div className="cart-action">
                            <div className="cart-action-btns">
                              <button
                                onClick={() => {
                                  handleIncrement(id);
                                }}
                                type="button"
                              >
                                +
                              </button>
                              <button type="button" value={quantity}>
                                {quantity}
                              </button>
                              <button
                                onClick={() => {
                                  handleDecrement(id);
                                }}
                                type="button"
                              >
                                -
                              </button>
                            </div>
                            <div className="cart-delete">
                              <button
                                onClick={() => deleteCart(item)}
                                type="button"
                              >
                                <CiTrash />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </>
              ) : (
                <h2 className="cart-empty">Cart is empty!</h2>
              )}
            </div>
            {/* Pricing */}
            <div className="cart-pricing">
              <div className="pricing">
                {/* Heading */}
                <h3>Price Details</h3>
                <div className="price-division">
                  {/* Total Of */}
                  <div className="total-of">
                    <p>Price ({cartItemTotal} item)</p>
                    <p>&#x20B9; {cartTotal}</p>
                  </div>
                  {/* Discount */}
                  <div className="discount">
                    <p>Discount</p>
                    <p>8%</p>
                  </div>
                  {/* Delivery */}
                  <div className="delivery">
                    <p>Delivery Charges</p>
                    <p>Free</p>
                  </div>
                  {/* Total Amount */}
                  <div className="total-amount">
                    <p>Total Amount</p>
                    <p>&#x20B9; {totalAmount}</p>
                  </div>
                  {/* Buy Button */}
                  <div className="cart-buy-now-btn">
                    <button>Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
