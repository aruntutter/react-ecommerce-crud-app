import "./BuyNowModal.css";

const BuyNowModal = ({ onClose }) => {
  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };
  return (
    <div className="buy-now-page">
      {/* Buy Now Form */}
      <div className="buy-now-form">
        {/* Top Heading */}
        <div className="buy-now-heading">
          <h2>Buy Now</h2>
          {/* Close Button */}
          <button className="close-button" onClick={handleClose}>
            X
          </button>
        </div>
        {/* Name Input */}
        <div className="buy-now-input-container">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="buy-now-input-field"
          />
        </div>
        {/* Address Input */}
        <div className="buy-now-input-container">
          <input
            type="text"
            name="address"
            placeholder="Your Address"
            className="buy-now-input-field"
          />
        </div>
        {/* Pin Code Input */}
        <div className="buy-now-input-container">
          <input
            type="text"
            name="pincode"
            placeholder="Pin Code"
            className="buy-now-input-field"
          />
        </div>
        {/* Mobile Number Input */}
        <div className="buy-now-input-container">
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            className="buy-now-input-field"
          />
        </div>
        {/* Buy Now Button */}
        <div className="buy-now-button-container">
          <button type="button">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default BuyNowModal;
