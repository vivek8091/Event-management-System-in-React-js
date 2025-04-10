import "../Styles/login.css";
// import { Link } from "react-router-dom";

function ChangePassword() {
  return (
    <>
      <div className="change-pass">
        <div className="pass-title mb-5">
          <div className="pass-logo">
            <i className="fa-solid fa-key"></i>
          </div>
          <h5>Change Password</h5>
        </div>

        <form>
          <div className="mb-3">
            <label for="currentPassword" className="form-label">
              Current Password
            </label>
            <input
              type="password"
              className="form-control"
              id="currentPassword"
              aria-describedby="currentPass"
            />
          </div>
          <div className="mb-3">
            <label for="newPassword" className="form-label">
              New Password
            </label>
            <input
              type="password"
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
