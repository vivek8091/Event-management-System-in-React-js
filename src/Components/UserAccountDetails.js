import { useEffect, useState } from "react";
import "../Styles/userAccountDetails.css";
import userDetails from "../assets/userDetails.png";
import { Link } from "react-router-dom";

function UserAccountDetails() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUserData(storedUser);
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-lg-5 col-md-8 col-sm-12 col-12 m-auto">
          <div className="user-details">
            <div className="user-title">
              <span>
                <img src={userDetails} alt="userDetails" />
              </span>
              <h6>Account Details</h6>
            </div>

            <div className="navigations">
              <nav>
                <Link to="/">
                  <span>
                    <i className="fa-solid fa-house"></i>
                  </span>
                  Home
                </Link>
                <Link to="/ChangePassword">Change Password</Link>
              </nav>
            </div>

            <div className="user-data">
              <div className="user-img">
                <img
                  src={`http://localhost:2121/uploads/${userData.image}`}
                  alt="user_logo"
                />
                <span>
                  <i className="fa-solid fa-camera-rotate"></i>
                </span>
              </div>

              <div className="profile-container mt-4">
                <ul className="profile-list">
                  <li className="profile-item">
                    <i className="fa-solid fa-users"></i>
                    <span>{userData.name}</span>
                    <i className="fa-solid fa-pen"></i>
                  </li>
                  <li className="profile-item">
                    <i className="fa-solid fa-envelope-circle-check"></i>
                    <span>{userData.email}</span>
                    <i className="fa-solid fa-pen"></i>
                  </li>
                  <li className="profile-item">
                    <i className="fa-solid fa-mars"></i>
                    <span>{userData.gender}</span>
                    <i className="fa-solid fa-pen"></i>
                  </li>
                  <li className="profile-item">
                    <i className="fa-solid fa-phone-volume"></i>
                    <span>{userData.mobile_no}</span>
                    <i className="fa-solid fa-pen"></i>
                  </li>
                </ul>
              </div>
            </div>
            <div className="change-details">
              <nav>
                <Link to="/ChangeAccountDetails">Change Account Details</Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserAccountDetails;
