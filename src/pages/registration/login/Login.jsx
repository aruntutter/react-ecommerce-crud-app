import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-page">
        <div className="login-title">
          <h2>Login</h2>
        </div>
        <div className="input">
          <input type="email" name="email" placeholder="Email" />
        </div>
        <div className="input">
          <input type="password" placeholder="Password" />
        </div>
        <div className="btn-login">
          <button>Login</button>
        </div>
        <div>
          <h3 className="btn-signup">
            Don't have an account{" "}
            <Link className="signup-link" to={"/signup"}>
              Signup
            </Link>
          </h3>
        </div>

        {/* Credential */}
        <div className="credential">
          <p className="credential-heading">Credential</p>
          <div className="admin-credential">
            <p>Admin</p>
            <p>Email: admin@gmail.com</p>
            <p>password: 12345678</p>
          </div>
          <div className="user-credential">
            <p>User</p>
            <p>Email: user@gmail.com</p>
            <p>password: 12345678</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
