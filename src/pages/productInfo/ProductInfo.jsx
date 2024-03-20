import "./ProductInfo.css";
import Layout from "../../components/layout/Layout";
import { useContext, useEffect, useState } from "react";
import myContext from "../../context/myContext";
import { useParams } from "react-router-dom";
import { fireDb } from "../../firebase/FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import Loader from "../../components/loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import toast from "react-hot-toast";

const ProductInfo = () => {
  const context = useContext(myContext);
  const { loading, setLoading } = context;

  const [product, setProduct] = useState("");

  const { id } = useParams();

  // getProductData
  const getProductData = async () => {
    setLoading(true);
    try {
      const productTemp = await getDoc(doc(fireDb, "products", id));
      setProduct({ ...productTemp.data(), id: productTemp.id });
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const cartItems = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  // add to cart
  const addCart = (item) => {
    // console.log(item);
    dispatch(addToCart(item));
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

  useEffect(() => {
    getProductData();
  }, []);
  return (
    <Layout>
      <div className="product-info">
        {loading ? (
          <Loader />
        ) : (
          <div className="product-info-container">
            <div className="product-custom-card">
              {/* Thumbnail */}
              <div className="product-custom-post-thumbnail">
                <div className="product-thumbnail-img">
                  <img src={product?.productImageUrl} alt={product?.title} />
                </div>
              </div>

              {/* Details */}
              <div className="product-custom-post-details">
                <div className="product-post-detail-text">
                  {/* Title */}
                  <h3>{product?.title}</h3>
                  {/* Price */}
                  <h3>&#8377;{product?.price}</h3>
                  {/* Description */}
                  <p>{product?.description}</p>
                  {/* Add to Cart Btn */}
                  <div className="product-info-add-to-cart-btn">
                    {cartItems.some((p) => p.id === product.id) ? (
                      <button onClick={() => deleteCart(product)}>
                        Delete from cart
                      </button>
                    ) : (
                      <button onClick={() => addCart(product)}>
                        Add to cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProductInfo;
