import { useState } from "react";
import "../Styles/login.css";
import axios from "axios";

function ChangePassword() {
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user?.id;

    try {
      const response = await axios.put(
        `http://localhost:2121/api/users/changePassword/${userId}`,
        formData
      );

      setFormData({
        oldPassword: "",
        newPassword: "",
      });
      console.log(response.data);
      alert(response.data.message);
    } catch (error) {
      console.error("Error while changing password!!!", error);
      alert("Failed to change password!!!");
    }
  };

  return (
    <>
      <div className="change-pass">
        <div className="pass-title mb-5">
          <div className="pass-logo">
            <i className="fa-solid fa-key"></i>
          </div>
          <h5>Change Password</h5>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="oldPassword" className="form-label">
              Current Password
            </label>
            <input
              type="password"
              name="oldPassword"
              value={formData.oldPassword}
              onChange={handleChange}
              className="form-control"
              id="oldPassword"
              aria-describedby="currentPass"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="newPassword" className="form-label">
              New Password
            </label>
            <input
              type="password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              className="form-control"
              id="newPassword"
              aria-describedby="newPass"
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Change Password
          </button>
        </form>
      </div>
    </>
  );
}

export default ChangePassword;
