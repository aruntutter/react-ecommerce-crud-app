import "./BuyNowModal.css";

const BuyNowModal = ({ addressInfo, setAddressInfo, buyNowFunction }) => {
  return (
    <div className={`buy-now-page ${open ? "modal-open" : ""}`}>
      {/* Buy Now Form */}
      <div className="buy-now-form">
        {/* Top Heading */}
        <div className="buy-now-heading">
          <h2>Buy Now</h2>
        </div>
        {/* Name Input */}
        <div className="buy-now-input-container">
          <input
            type="text"
            name="name"
            value={addressInfo.name}
            onChange={(e) => {
              setAddressInfo({
                ...addressInfo,
                name: e.target.value,
              });
            }}
            placeholder="Your Name"
            className="buy-now-input-field"
          />
        </div>
        {/* Address Input */}
        <div className="buy-now-input-container">
          <input
            type="text"
            name="address"
            value={addressInfo.address}
            onChange={(e) => {
              setAddressInfo({
                ...addressInfo,
                address: e.target.value,
              });
            }}
            placeholder="Your Address"
            className="buy-now-input-field"
          />
        </div>
        {/* Pin Code Input */}
        <div className="buy-now-input-container">
          <input
            type="text"
            name="pincode"
            value={addressInfo.pincode}
            onChange={(e) => {
              setAddressInfo({
                ...addressInfo,
                pincode: e.target.value,
              });
            }}
            placeholder="Pin Code"
            className="buy-now-input-field"
          />
        </div>
        {/* Mobile Number Input */}
        <div className="buy-now-input-container">
          <input
            type="tel"
            name="mobile"
            value={addressInfo.mobileNumber}
            onChange={(e) => {
              setAddressInfo({
                ...addressInfo,
                mobileNumber: e.target.value,
              });
            }}
            placeholder="Mobile Number"
            className="buy-now-input-field"
          />
        </div>
        {/* Buy Now Button */}
        <div className="buy-now-button-container">
          <button
            onClick={() => {
              buyNowFunction();
            }}
            type="button"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyNowModal;
