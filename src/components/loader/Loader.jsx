import "./Loader.css";
import Spinner from "../../assets/images/loader-spinner.gif";

const Loader = () => {
  return (
    <div className="loader">
      <div className="loader-icon">
        <img src={Spinner} alt="Spinner Loader" />
      </div>
    </div>
  );
};

export default Loader;
