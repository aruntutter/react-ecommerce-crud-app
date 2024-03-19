import { TabList, Tab, Tabs, TabPanel } from "react-tabs";
import "./AdminDashboard.css";
import ProductDetail from "../../components/admin/productDetail/ProductDetail";
import OrderDetail from "../../components/admin/orderDetail/OrderDetail";
import UserDetail from "../../components/admin/userDetail/UserDetail";
import Layout from "../../components/layout/Layout";

const AdminDashboard = () => {
  const user = JSON.parse(localStorage.getItem("users"));

  return (
    <Layout>
      <div className="admin-dashboard">
        <h2>Admin Dashboard</h2>
        {/* Admin Detail */}
        <div className="admin-profile-section">
          {/* Image */}
          <div className="admin-img">
            <img
              src="https://media.licdn.com/dms/image/D5603AQFTO6H1GfGZJg/profile-displayphoto-shrink_400_400/0/1703827335820?e=1716422400&v=beta&t=djdsBokKKWUKVO86EIdKlPyfl7tJXJVE0yQXHdULM8M"
              alt="admin - Image"
            />
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

        {/* Product/ Order/ User */}
        <div className="product-order-user">
          <div className="counts">
            <Tabs className="tabs">
              <TabList className="tablist">
                {/* Product */}
                <Tab className="inner-list">
                  <p>Products</p>
                  <p>0</p>
                </Tab>
                {/* Order */}
                <Tab className="inner-list">
                  <p>Orders</p>
                  <p>0</p>
                </Tab>
                {/* User */}
                <Tab className="inner-list">
                  <p>Users</p>
                  <p>0</p>
                </Tab>
              </TabList>

              {/* Tab Panel */}
              <TabPanel>
                <ProductDetail />
              </TabPanel>
              <TabPanel>
                <OrderDetail />
              </TabPanel>
              <TabPanel>
                <UserDetail />
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
