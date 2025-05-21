import { useState } from "react";
import "../Styles/login.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Registration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    mobile_no: "",
    password: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData((formData) => ({
        ...formData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("gender", formData.gender);
    data.append("mobile_no", formData.mobile_no);
    data.append("password", formData.password);
    data.append("image", formData.image);

    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:2121/api/users/register",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert(res.data.message);
      console.log("Submitted Data", {
        ...formData,
        image: formData.image?.name || "No image selected...",
      });

      setFormData({
        name: "",
        email: "",
        gender: "",
        mobile_no: "",
        password: "",
        image: "",
      });

      document.getElementById("file").value = null;
    } catch (err) {
      console.log(err);
      alert("Registration Failed");
    }
  };

  return (
    <>
      <div className="signup-form">
        <div className="signup-title">
          <div className="sign-logo">
            <i className="fa-solid fa-user-lock"></i>
          </div>
          <h5>Sign Up</h5>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 file-input-container">
            <input
              type="file"
              name="image"
              accept="image/*"
              className="file-input"
              id="file"
              onChange={handleChange}
            />
            <label htmlFor="file" className="custom-file-label">
              <span className="choose-btn">Choose an Image</span>
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="inputName" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={formData.name}
              id="inputName"
              aria-describedby="NameHelp"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="inputEmail" className="form-label">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              name="email"
              value={formData.email}
              id="inputEmail"
              aria-describedby="EmailHelp"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3 d-inline-flex gap-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                value="male"
                name="gender"
                id="male"
                checked={formData.gender === 'male'}
                onChange={handleChange}
              />
              <label htmlFor="male" className="form-check-label">
                Male
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                value="female"
                name="gender"
                id="female"
                checked={formData.gender === 'female'}
                onChange={handleChange}
              />
              <label htmlFor="female" className="form-check-label">
                Female
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                value="other"
                name="gender"
                id="other"
                checked={formData.gender === 'other'}
                onChange={handleChange}
              />
              <label htmlFor="other" className="form-check-label">
                Other
              </label>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="inputPhone" className="form-label">
              Phone Number
            </label>
            <input
              type="number"
              className="form-control"
              id="inputPhone"
              name="mobile_no"
              value={formData.mobile_no}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="rememberMe"
            />
            <label className="form-check-label" htmlFor="rememberMe">
              Remember Me
            </label>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Sign Up
          </button>

          <div className="login-link">
            <nav>
              <Link to="/">Already have an account? Sign In</Link>
            </nav>
          </div>
        </form>
      </div>
    </>
  );
}

export default Registration;
