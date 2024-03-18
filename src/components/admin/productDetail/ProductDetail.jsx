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
          <table>
            <thead>
              <tr>
                <th className="custom-th">S.No</th>
                <th className="custom-th">Location Name</th>
                <th className="custom-th">Action</th>
              </tr>
            </thead>
            {/* tbody */}
            <tbody>
              <tr>
                <td>1.</td>
                <td>Name</td>
                <td>
                  {/* Edit */}
                  <Link to={"/updateproduct"}>
                    <button>
                      <MdOutlineEdit />
                    </button>
                  </Link>
                  {/* Delete */}
                  <button>
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
