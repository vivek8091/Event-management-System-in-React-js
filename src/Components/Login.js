import { useState } from "react";
import "../Styles/login.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:2121/api/users/login/",
        loginData
      );
      localStorage.setItem("user", JSON.stringify(res.data.user));
      alert(res.data.message);
      console.log("Logged in user:", res.data.user);
      navigate("/Home");
    } catch (error) {
      alert(error.response?.data?.message || "Login Failed!!!");
    }
  };

  return (
    <>
      <div className="login-form">
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              value={loginData.email}
              onChange={handleChange}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              name="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Remember Me
            </label>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Sign in
          </button>

          <div className="register-links">
            <nav>
              <Link>Forgot Password?</Link>
              <Link to="/Registration">Don't have an account? Sign Up</Link>
            </nav>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
