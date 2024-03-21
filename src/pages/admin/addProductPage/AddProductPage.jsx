import { useContext, useState } from "react";
import "./AddProductPage.css";
import myContext from "../../../context/myContext";
import toast from "react-hot-toast";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { fireDb } from "../../../firebase/FirebaseConfig";
import { useNavigate } from "react-router-dom";
import Loader from "../../../components/loader/Loader";

const categoryList = [
  {
    name: "fashion",
  },
  {
    name: "shirt",
  },
  {
    name: "jacket",
  },
  {
    name: "mobile",
  },
  {
    name: "laptop",
  },
  {
    name: "shoes",
  },
  {
    name: "home",
  },
  {
    name: "books",
  },
];

const AddProductPage = () => {
  const context = useContext(myContext);
  const { loading, setLoading } = context;

  // navigate
  const navigate = useNavigate();

  // product state
  const [product, setProduct] = useState({
    title: "",
    price: "",
    productImageUrl: "",
    category: "",
    description: "",
    quantity: 1,
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  // Add Product Function
  const addProductFunction = async () => {
    if (
      product.title == "" ||
      product.price == "" ||
      product.productImageUrl == "" ||
      product.category == "" ||
      product.description == ""
    ) {
      return toast.error("all fields are required");
    }

    setLoading(true);
    try {
      const productRef = collection(fireDb, "products");
      await addDoc(productRef, product);
      toast.success("Product Added successfully");
      navigate("/admin-dashboard");
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Add product failed");
    }
  };

  return (
    <div className="add-product-page">
      {loading && <Loader />}

      {/* Add Product Form */}
      <div className="add-product-form">
        {/* Top Heading */}
        <div className="add-product-heading">
          <h2>Add Product</h2>
        </div>
        {/* Title Input */}
        <div className="add-product-input-container">
          <input
            type="text"
            name="title"
            value={product.title}
            onChange={(e) => {
              setProduct({
                ...product,
                title: e.target.value,
              });
            }}
            placeholder="Product Title"
            className="add-product-input-field"
          />
        </div>
        {/* Price Input */}
        <div className="add-product-input-container">
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={(e) => {
              setProduct({
                ...product,
                price: e.target.value,
              });
            }}
            placeholder="Product Price"
            className="add-product-input-field"
          />
        </div>
        {/* Image Input  */}
        <div className="add-product-input-container">
          <input
            type="text"
            name="productImageUrl"
            value={product.productImageUrl}
            onChange={(e) => {
              setProduct({
                ...product,
                productImageUrl: e.target.value,
              });
            }}
            placeholder="Product Image Url"
            className="add-product-input-field"
          />
        </div>
        {/* Category Input */}
        <div className="add-product-input-container">
          <select
            value={product.category}
            onChange={(e) => {
              setProduct({
                ...product,
                category: e.target.value,
              });
            }}
            className="add-product-select-field"
          >
            <option value="" disabled>
              Product Category
            </option>
            {categoryList.map((value, index) => {
              const { name } = value;
              return (
                <option key={index} value={name}>
                  {name}
                </option>
              );
            })}
          </select>
        </div>
        {/* Input Five */}
        <div className="add-product-input-container">
          <textarea
            value={product.description}
            onChange={(e) => {
              setProduct({
                ...product,
                description: e.target.value,
              });
            }}
            name="description"
            placeholder="Product Description"
            rows="5"
            className="add-product-textarea-field"
          ></textarea>
        </div>
        {/* Add Product Button */}
        <div className="add-product-button-container">
          <button onClick={addProductFunction} type="button">
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProductPage;
