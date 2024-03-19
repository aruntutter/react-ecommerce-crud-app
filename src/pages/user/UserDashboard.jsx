import "./UserDashboard.css";
import Layout from "../../components/layout/Layout";
import UserIcon from "../../assets/images/default-user-icon.png";

const products = [
  {
    id: 1,
    name: "Nike Air Force 1 07 LV8",
    imageSrc:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/54a510de-a406-41b2-8d62-7f8c587c9a7e/air-force-1-07-lv8-shoes-9KwrSk.png",
    href: "#",
    price: "61,999",
    color: "Orange",
    imageAlt: "Nike Air Force 1 07 LV8",
    quantity: 1,
  },
];

const UserDashboard = () => {
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
            Name: <span>Arun Kumar</span>
          </p>
          <p>
            Email: <span>User@gmail.com</span>
          </p>
        </div>
        {/* Order Details */}
        <div className="order-detail-section">
          <h2>Order Detail</h2>
          <div className="order-detail-card">
            <div className="card-left">
              <div className="order-id">
                <h5>Order Id</h5>
                <p>#4564562454</p>
              </div>
              <div className="order-date">
                <h5>Order Date</h5>
                <p>18 March, 2024</p>
              </div>
              <div className="order-total-amount">
                <h5>Total Amount</h5>
                <p>&#8377;84,499</p>
              </div>
              <div className="order-status">
                <h5>Order Status</h5>
                <p>Confirmed</p>
              </div>
            </div>
            {products.map((product) => (
              <div className="card-right" key={product.id}>
                <div className="order-img">
                  <img src={product.imageSrc} alt={product.imageAlt} />
                </div>
                <div className="order-text-detail">
                  <h5>{product.name}</h5>
                  <p>{product.color}</p>
                  <p>x{product.quantity}</p>
                  <h5>&#8377;{product.price}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserDashboard;
