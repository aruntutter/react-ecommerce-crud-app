import "./UserDashboard.css";
import Layout from "../../components/layout/Layout";
import UserIcon from "../../assets/images/default-user-icon.png";
import { useContext } from "react";
import myContext from "../../context/myContext";
import Loader from "../../components/loader/Loader";

const UserDashboard = () => {
  // user
  const user = JSON.parse(localStorage.getItem("users"));

  const context = useContext(myContext);
  const { loading, getAllOrder } = context;

  console.log("getAllOrder:", getAllOrder);
  console.log("user:", user);

  return (
    <Layout>
      <div className="user-dashboard">
        {/* Heading */}
        <h3>User Dashboard</h3>
        {/* User Detail */}
        <div className="user-profile-section">
          {/* Image */}
          <div className="user-img">
            <img src={UserIcon} alt="user - Image" />
          </div>
          <p>
            Role: <span>{user?.role}</span>
          </p>
          <p>
            Name: <span>{user?.name}</span>
          </p>
          <p>
            Email: <span>{user?.email}</span>
          </p>
        </div>
        {/* Order Details */}
        <div className="order-detail-section">
          <h2>Order Detail</h2>

          {loading && <Loader />}

          {getAllOrder
            .filter((order) => order.userid === user?.uid)
            .map((order, index) => (
              <div key={index} className="order-detail-card">
                {/* Left */}
                <div className="card-left">
                  <div className="order-id">
                    <h5>Order Id</h5>
                    <p>#{order.id}</p>
                  </div>
                  <div className="order-date">
                    <h5>Order Date</h5>
                    <p>{order.date}</p>
                  </div>
                  {/* <div className="order-total-amount">
                    <h5>Total Amount</h5>
                    <p>&#8377; {order.price}</p>
                  </div> */}
                  <div className="order-status">
                    <h5>Order Status</h5>
                    <p>{order.status}</p>
                  </div>
                </div>
                {/* Right */}
                {order.cartItems.map((item, index) => {
                  const { title, quantity, productImageUrl, category, price } =
                    item;

                  return (
                    <div key={index} className="card-right">
                      <div className="order-img">
                        <img src={productImageUrl} alt={title} />
                      </div>
                      <div className="order-text-detail">
                        <h5>{title}</h5>
                        <p>{category}</p>
                        <p>x {quantity}</p>
                        <h5>&#8377; {price}</h5>
                        <h5>
                          <span>Total:</span> &#8377; {price * quantity}
                        </h5>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
        </div>
      </div>
    </Layout>
  );
};

export default UserDashboard;
