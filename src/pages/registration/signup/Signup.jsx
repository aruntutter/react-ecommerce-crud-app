import "./Signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-page">
        <div className="signup-title">
          <h2>Signup</h2>
        </div>
        {/* Email */}
        <div className="input">
          <input type="email" name="email" placeholder="Email" />
        </div>
        {/* Password */}
        <div className="input">
          <input type="password" placeholder="Password" />
        </div>
        {/* Signup Btn */}
        <div className="btn-signup">
          <button>Signup</button>
        </div>
        <div>
          {/* Login Btn */}
          <h3 className="btn-login">
            Already have an account{" "}
            <Link className="login-link" to={"/login"}>
              Login
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Signup;
