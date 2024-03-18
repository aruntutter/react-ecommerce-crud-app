import "./OrderDetail.css";
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";

const OrderDetail = () => {
  return (
    <div className="order-detail">
      <div className="order-detail-head">
        <h4>All Orders</h4>
      </div>
      {/* Table */}
      <div className="order-detail-container">
        <div className="order-detail-table-wrapper">
          {/* table  */}
          <table>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Location Name</th>
                <th>Action</th>
              </tr>
            </thead>
            {/* tbody */}
            <tbody>
              <tr>
                <td>1.</td>
                <td>Name</td>
                <td>
                  {/* Edit */}
                  <button>
                    <MdOutlineEdit />
                  </button>
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

export default OrderDetail;
