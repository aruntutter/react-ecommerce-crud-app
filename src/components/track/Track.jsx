import "./Track.css";
import shoppingBagIcon from "../../assets/images/shopping-bag.png";

const Track = () => {
  return (
    <div className="track-container">
      <div className="tracks">
        {/* Track 1 */}
        <div className="track">
          <div className="track-icon">
            <img src={shoppingBagIcon} alt="shopping-bag-icon" />
          </div>
          <h3>Premium T-Shirts</h3>
          <h4>Our T-Shirts are 100% made of cotton.</h4>
        </div>
        {/* Track 2 */}
        <div className="track">
          <div className="track-icon">
            <img src={shoppingBagIcon} alt="shopping-bag-icon" />
          </div>
          <h3>Premium T-Shirts</h3>
          <h4>Our T-Shirts are 100% made of cotton.</h4>
        </div>
        {/* Track 3 */}
        <div className="track">
          <div className="track-icon">
            <img src={shoppingBagIcon} alt="shopping-bag-icon" />
          </div>
          <h3>Premium T-Shirts</h3>
          <h4>Our T-Shirts are 100% made of cotton.</h4>
        </div>
      </div>
    </div>
  );
};

export default Track;
