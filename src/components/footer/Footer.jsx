import "./Footer.css";
import Logo from "../../assets/images/ezbuy-logo.png";
import { FaXTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="left">
          <div className="footer-logo">
            <img src={Logo} alt="logo" />
          </div>
          <h2></h2>
          <p>&copy; 2024 @ezBuy</p>
        </div>
        <div class="social-icons">
          <ul>
            <li>
              <FaXTwitter />
            </li>
            <li>
              <FaGithub />
            </li>
            <li>
              <FaLinkedinIn />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
