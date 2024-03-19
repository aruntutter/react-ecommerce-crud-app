import "./ProductDetail.css";
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";
import { Link } from "react-router-dom";

const ProductDetail = () => {
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
              <tr>
                <td>1.</td>
                <td>
                  <div className="product-detail-thumbnail">
                    <img
                      src="https://st.mngbcn.com/rcs/pics/static/T6/fotos/S20/67026731_01_D6.jpg?ts=1709900045822&imwidth=332&imdensity=2&impolicy=featured"
                      alt=""
                    />
                  </div>
                </td>
                <td>Title</td>
                <td>Price</td>
                <td>Category</td>
                <td>Date</td>
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
              {/* More rows can be added here */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
