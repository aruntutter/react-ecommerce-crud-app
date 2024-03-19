import { useContext, useState } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../../context/myContext";
import toast from "react-hot-toast";
import { auth, fireDb } from "../../../firebase/FirebaseConfig";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import Loader from "../../../components/loader/Loader";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  const context = useContext(myContext);
  const { loading, setLoading } = context;
  // navigate
  const navigate = useNavigate();
  // user SignUp state
  const [userSignup, setUserSignup] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  // User SignUp Function
  const userSignUpFunction = async () => {
    // validation
    if (
      userSignup.name === "" ||
      userSignup.email === "" ||
      userSignup.password === ""
    ) {
      return toast.error("All Fields are required");
    }

    setLoading(true);

    try {
      const users = await createUserWithEmailAndPassword(
        auth,
        userSignup.email,
        userSignup.password
      );

      // create user object
      const user = {
        name: userSignup.name,
        email: users.user.email,
        uid: users.user.uid,
        role: userSignup.role,
        time: Timestamp.now(),
        date: new Date().toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }),
      };

      // create user reference
      const userRefrence = collection(fireDb, "user");

      // Add User Detail
      addDoc(userRefrence, user);

      setUserSignup({
        name: "",
        email: "",
        password: "",
      });

      toast.success("Signup Successfully");

      setLoading(false);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="signup-container">
      {/* Loader */}
      {loading && <Loader />}

      {/* SignUp */}
      <div className="signup-page">
        <div className="signup-title">
          <h2>Signup</h2>
        </div>
        {/* Name */}
        <div className="input">
          <input
            type="name"
            name="name"
            value={userSignup.name}
            onChange={(e) => {
              setUserSignup({
                ...userSignup,
                name: e.target.value,
              });
            }}
            placeholder="Name"
          />
        </div>
        {/* Email */}
        <div className="input">
          <input
            type="email"
            name="email"
            value={userSignup.email}
            onChange={(e) => {
              setUserSignup({
                ...userSignup,
                email: e.target.value,
              });
            }}
            placeholder="Email"
          />
        </div>
        {/* Password */}
        <div className="input">
          <input
            type="password"
            value={userSignup.password}
            onChange={(e) => {
              setUserSignup({
                ...userSignup,
                password: e.target.value,
              });
            }}
            placeholder="Password"
          />
        </div>
        {/* Signup Btn */}
        <div className="btn-signup">
          <button onClick={userSignUpFunction}>Signup</button>
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
