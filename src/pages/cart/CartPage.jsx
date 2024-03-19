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

// const products = [
//   {
//     id: 1,
//     name: "Nike Air Force 1 07 LV8",
//     href: "#",
//     price: "₹47,199",
//     originalPrice: "₹48,900",
//     discount: "5% Off",
//     color: "Orange",
//     size: "8 UK",
//     imageSrc:
//       "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/54a510de-a406-41b2-8d62-7f8c587c9a7e/air-force-1-07-lv8-shoes-9KwrSk.png",
//   },
//   {
//     id: 2,
//     name: "Nike Blazer Low 77 SE",
//     href: "#",
//     price: "₹1,549",
//     originalPrice: "₹2,499",
//     discount: "38% off",
//     color: "White",
//     leadTime: "3-4 weeks",
//     size: "8 UK",
//     imageSrc:
//       "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e48d6035-bd8a-4747-9fa1-04ea596bb074/blazer-low-77-se-shoes-0w2HHV.png",
//   },
//   {
//     id: 3,
//     name: "Nike Air Max 90",
//     href: "#",
//     price: "₹2219 ",
//     originalPrice: "₹999",
//     discount: "78% off",
//     color: "Black",
//     imageSrc:
//       "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fd17b420-b388-4c8a-aaaa-e0a98ddf175f/dunk-high-retro-shoe-DdRmMZ.png",
//   },
// ];

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
