import "./HeroSection.css";
import heroImage from "../../assets/images/Ecommerce-hero-img.svg";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-image">
        <img src={heroImage} alt="Hero" />
      </div>
      <div className="hero-content">
        <p>
          Your <span>one-stop</span> destination for all your shopping needs.
        </p>
        <div className="primary-btn">
          <button>Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
