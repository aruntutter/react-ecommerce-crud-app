import { useContext } from "react";
import "./OrderDetail.css";
import myContext from "../../../context/myContext";
import { MdDeleteOutline } from "react-icons/md";

const OrderDetail = () => {
  const context = useContext(myContext);
  const { getAllOrder, orderDelete } = context;

  return (
    <div className="order-detail">
      <div className="order-detail-head">
        <h4>All Orders</h4>
      </div>
      {/* Table */}
      <div className="order-detail-container">
        <div className="order-detail-table-wrapper">
          {/* table  */}
          <table className="order-detail-table">
            <thead>
              <tr>
                <th className="order-detail-custom-th serial-number">S.No</th>
                <th className="order-detail-custom-th order-id">Order ID</th>
                <th className="order-detail-custom-th image">Image</th>
                <th className="order-detail-custom-th title">Title</th>
                <th className="order-detail-custom-th category">Category</th>
                <th className="order-detail-custom-th price">Price</th>
                <th className="order-detail-custom-th quantity">Quantity</th>
                <th className="order-detail-custom-th total-price">
                  Total Price
                </th>
                <th className="order-detail-custom-th status">Status</th>
                <th className="order-detail-custom-th name">Name</th>
                <th className="order-detail-custom-th address">Address</th>
                <th className="order-detail-custom-th pin-code">Pin code</th>
                <th className="order-detail-custom-th phone-number">
                  Phone No
                </th>
                <th className="order-detail-custom-th email">Email</th>
                <th className="order-detail-custom-th date">Date</th>
                <th className="order-detail-custom-th action">Action</th>
              </tr>
            </thead>
            {/* tbody */}
            <tbody>
              {getAllOrder.map((order, orderIndex) => {
                return (
                  <>
                    {order.cartItems.map((item, itemIndex) => {
                      const {
                        id,
                        productImageUrl,
                        title,
                        category,
                        price,
                        quantity,
                      } = item;
                      const serialNumber =
                        orderIndex * order.cartItems.length + itemIndex;
                      return (
                        <tr key={serialNumber}>
                          <td className="serial-number">{serialNumber + 1}.</td>
                          <td className="order-detail-uid">{id}</td>
                          <td className="order-detail-custom-td image">
                            <div className="order-detail-img">
                              <img src={productImageUrl} alt={title} />
                            </div>
                          </td>
                          <td className="title">{title}</td>
                          <td className="category">{category}</td>
                          <td className="price">{price}</td>
                          <td className="quantity">{quantity}</td>
                          <td className="total-price">{price * quantity}</td>
                          <td className="status">{order.status}</td>
                          <td className="name">{order.addressInfo.name}</td>
                          <td className="address">
                            {order.addressInfo.address}
                          </td>
                          <td className="pin-code">
                            {order.addressInfo.pincode}
                          </td>
                          <td className="phone-number">
                            {order.addressInfo.mobileNumber}
                          </td>
                          <td className="email">{order.email}</td>
                          <td className="date">{order.date}</td>
                          <td className="order-action">
                            {/* Delete */}
                            <button
                              onClick={() => orderDelete(order.id)}
                              className="order-action-button"
                            >
                              <MdDeleteOutline />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
