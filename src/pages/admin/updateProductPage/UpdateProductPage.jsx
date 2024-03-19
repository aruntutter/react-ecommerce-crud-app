import { useContext, useEffect, useState } from "react";
import "./UpdateProductPage.css";
import myContext from "../../../context/myContext";
import { useNavigate, useParams } from "react-router-dom";
import { Timestamp, doc, getDoc, setDoc } from "firebase/firestore";
import { fireDb } from "../../../firebase/FirebaseConfig";
import toast from "react-hot-toast";

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

const UpdateProductPage = () => {
  const context = useContext(myContext);
  const { loading, setLoading, getAllProductFunction } = context;

  // navigate
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  // product state
  const [product, setProduct] = useState({
    title: "",
    price: "",
    productImageUrl: "",
    category: "",
    description: "",
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  // Get Single Product Function
  const getSingleProductFunction = async () => {
    setLoading(true);
    try {
      const productTemp = await getDoc(doc(fireDb, "products", id));
      //   console.log(product.data())
      const product = productTemp.data();
      setProduct({
        title: product?.title,
        price: product?.price,
        productImageUrl: product?.productImageUrl,
        category: product?.category,
        description: product?.description,
        quantity: product?.quantity,
        time: product?.time,
        date: product?.date,
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const updateProduct = async () => {
    setLoading(true);
    try {
      await setDoc(doc(fireDb, "products", id), product);
      toast.success("Product Updated successfully");
      getAllProductFunction();
      setLoading(false);
      navigate("/admin-dashboard");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getSingleProductFunction();
  }, []);
  return (
    <div className="update-product-page">
      {/* Update Product Form */}
      <div className="update-product-form">
        {/* Top Heading */}
        <div className="update-product-heading">
          <h2>Add Product</h2>
        </div>
        {/* Title Input */}
        <div className="update-product-input-container">
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
            className="update-product-input-field"
          />
        </div>
        {/* Price Input */}
        <div className="update-product-input-container">
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
            className="update-product-input-field"
          />
        </div>
        {/* Image Input  */}
        <div className="update-product-input-container">
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
            className="update-product-input-field"
          />
        </div>
        {/* Category Input */}
        <div className="update-product-input-container">
          <select
            value={product.category}
            onChange={(e) => {
              setProduct({
                ...product,
                category: e.target.value,
              });
            }}
            className="update-product-select-field"
          >
            <option disabled value="">
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
        <div className="update-product-input-container">
          <textarea
            name="description"
            value={product.description}
            onChange={(e) => {
              setProduct({
                ...product,
                description: e.target.value,
              });
            }}
            placeholder="Product Description"
            rows="5"
            className="update-product-textarea-field"
          ></textarea>
        </div>
        {/* Add Product Button */}
        <div className="update-product-button-container">
          <button onClick={updateProduct} type="button">
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateProductPage;
