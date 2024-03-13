import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {/* minHeight: "100vh"  this can also used*/}
      <div
        className="main-content"
        style={{ flex: 1, minHeight: "calc(100vh - 50px)" }}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
