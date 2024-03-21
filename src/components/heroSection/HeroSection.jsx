import "./HeroSection.css";
import heroImage from "../../assets/images/Ecommerce-hero-img.svg";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-image">
        <img src={heroImage} alt="Hero" />
      </div>
    </div>
  );
};

export default HeroSection;
