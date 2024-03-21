import { useContext, useEffect, useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../../context/myContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, fireDb } from "../../../firebase/FirebaseConfig";
import toast from "react-hot-toast";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import Loader from "../../../components/loader/Loader";

const Login = () => {
  const context = useContext(myContext);
  const { loading, setLoading } = context;

  // navigate
  const navigate = useNavigate();

  // User Signup State
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const user = localStorage.getItem("users");
    if (user) {
      const parsedUser = JSON.parse(user);
      if (parsedUser.role === "user") {
        navigate("/user-dashboard");
      } else {
        navigate("/admin-dashboard");
      }
    }
  }, [navigate]);

  // user login function
  const userLoginFunction = async () => {
    // validation
    if (userLogin.email === "" || userLogin.password === "") {
      toast.error("All Fields are required");
    }

    setLoading(true);
    try {
      const users = await signInWithEmailAndPassword(
        auth,
        userLogin.email,
        userLogin.password
      );
      // console.log(users.user)

      try {
        const q = query(
          collection(fireDb, "user"),
          where("uid", "==", users?.user?.uid)
        );
        const data = onSnapshot(q, (QuerySnapshot) => {
          let user;
          QuerySnapshot.forEach((doc) => (user = doc.data()));
          localStorage.setItem("users", JSON.stringify(user));
          setUserLogin({
            email: "",
            password: "",
          });
          toast.success("Login Successfully");
          setLoading(false);
          if (user.role === "user") {
            navigate("/user-dashboard");
          } else {
            navigate("/admin-dashboard");
          }
        });
        return () => data;
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Login Failed");
    }
  };

  return (
    <div className="login-container">
      {/* Loader */}
      {loading && <Loader />}

      {/* Login Page */}
      <div className="login-page">
        <div className="login-title">
          <h2>Login</h2>
        </div>
        <div className="input">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={userLogin.email}
            onChange={(e) => {
              setUserLogin({
                ...userLogin,
                email: e.target.value,
              });
            }}
          />
        </div>
        <div className="input">
          <input
            type="password"
            placeholder="Password"
            value={userLogin.password}
            onChange={(e) => {
              setUserLogin({
                ...userLogin,
                password: e.target.value,
              });
            }}
          />
        </div>
        <div className="btn-login">
          <button type="button" onClick={userLoginFunction}>
            Login
          </button>
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
            <p>Email: user01@gmail.com</p>
            <p>password: 12345678</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
