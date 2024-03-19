import "./ProductDetail.css";
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import { useContext } from "react";
import myContext from "../../../context/myContext";
import Loader from "../../loader/Loader";

const ProductDetail = () => {
  const context = useContext(myContext);
  const { loading, getAllProduct } = context;

  return (
    <div className="product-detail">
      <div className="product-detail-head">
        <h4>All Products</h4>
        <div className="add-product-btn">
          <Link to={"/addproduct"}>
            <button>Add Product</button>
          </Link>
        </div>
      </div>
      {loading && <Loader />}
      {/* Table */}
      <div className="container">
        <div className="table-wrapper">
          {/* table  */}
          <table className="product-detail-table">
            <thead>
              <tr>
                <th className="product-detail-custom-th">S.No</th>
                <th className="product-detail-custom-th">Product Image</th>
                <th className="product-detail-custom-th">Product Title</th>
                <th className="product-detail-custom-th">Product Price</th>
                <th className="product-detail-custom-th">Product Category</th>
                <th className="product-detail-custom-th">Date</th>
                <th className="product-detail-custom-th">Action</th>
              </tr>
            </thead>
            {/* tbody */}
            <tbody>
              {getAllProduct.map((item, index) => {
                const { id, title, price, category, date, productImageUrl } =
                  item;
                return (
                  <tr key={index}>
                    <td>{index + 1}.</td>
                    <td>
                      <div className="product-detail-thumbnail">
                        <img src={productImageUrl} alt={title} />
                      </div>
                    </td>
                    <td>{title}</td>
                    <td>
                      &#8377;
                      {price}
                    </td>
                    <td>{category}</td>
                    <td>{date}</td>
                    <td>
                      {/* Edit */}
                      <Link to={"/updateproduct"}>
                        <button className="action-button">
                          <MdOutlineEdit />
                        </button>
                      </Link>
                      {/* Delete */}
                      <button className="action-button">
                        <MdDeleteOutline />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
