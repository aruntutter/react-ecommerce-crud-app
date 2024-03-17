import "./CartPage.css";
import Layout from "../../components/layout/Layout";
import { CiTrash } from "react-icons/ci";

const products = [
  {
    id: 1,
    name: "Nike Air Force 1 07 LV8",
    href: "#",
    price: "₹47,199",
    originalPrice: "₹48,900",
    discount: "5% Off",
    color: "Orange",
    size: "8 UK",
    imageSrc:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/54a510de-a406-41b2-8d62-7f8c587c9a7e/air-force-1-07-lv8-shoes-9KwrSk.png",
  },
  {
    id: 2,
    name: "Nike Blazer Low 77 SE",
    href: "#",
    price: "₹1,549",
    originalPrice: "₹2,499",
    discount: "38% off",
    color: "White",
    leadTime: "3-4 weeks",
    size: "8 UK",
    imageSrc:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e48d6035-bd8a-4747-9fa1-04ea596bb074/blazer-low-77-se-shoes-0w2HHV.png",
  },
  {
    id: 3,
    name: "Nike Air Max 90",
    href: "#",
    price: "₹2219 ",
    originalPrice: "₹999",
    discount: "78% off",
    color: "Black",
    imageSrc:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fd17b420-b388-4c8a-aaaa-e0a98ddf175f/dunk-high-retro-shoe-DdRmMZ.png",
  },
];

const CartPage = () => {
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
              {products.map((product) => (
                <div className="cart-single-product" key={product.id}>
                  {/* Product Img */}
                  <div className="cart-product-img">
                    <img src={product.imageSrc} alt={product.name} />
                  </div>
                  {/* Product Details */}
                  <div className="cart-product-details">
                    <h4>{product.name}</h4>
                    <div>
                      {product.color}
                      {product.size ? <span>{product.size}</span> : null}
                    </div>
                    <div>
                      <del>{product.originalPrice}</del>
                      {product.price}
                      <span>{product.discount}</span>
                    </div>
                    <div className="cart-action">
                      <div className="cart-action-btns">
                        <button type="button">+</button>
                        <button type="button">1</button>
                        <button type="button">-</button>
                      </div>
                      <div className="cart-delete">
                        <button type="button">
                          <CiTrash />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Pricing */}
            <div className="cart-pricing">
              <div className="pricing">
                {/* Heading */}
                <h3>Price Details</h3>
                <div className="price-division">
                  {/* Total Of */}
                  <div className="total-of">
                    <p>Price (3 item)</p>
                    <p>&#x20B9; 52,398</p>
                  </div>
                  {/* Discount */}
                  <div className="discount">
                    <p>Discount</p>
                    <p>-&#x20B9; 3,431</p>
                  </div>
                  {/* Delivery */}
                  <div className="delivery">
                    <p>Delivery Charges</p>
                    <p>Free</p>
                  </div>
                  {/* Total Amount */}
                  <div className="total-amount">
                    <p>Total Amount</p>
                    <p>&#x20B9; 48,967</p>
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
