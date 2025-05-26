import { useEffect, useState } from "react";
import "../Styles/userAccountDetails.css";
import axios from "axios";

function ChangeAccountDetails() {
  const [accountData, setAccountData] = useState({
    name: "",
    email: "",
    gender: "",
    mobile_no: "",
    image: "",
  });

  const [userData, setUserData] = useState({});

  useEffect(() => {
    const storedUser = JSON.parse(sessionStorage.getItem("user"));
    setUserData(storedUser);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setAccountData({
        ...accountData,
        [name]: files[0],
      });
    } else {
      setAccountData((accountData) => ({
        ...accountData,
        [name]: value,
      }));
    }
  };
  const handleSubmit = async (e) => {
    const changeData = new FormData();
    changeData.append("name", accountData.name);
    changeData.append("email", accountData.email);
    changeData.append("gender", accountData.gender);
    changeData.append("mobile_no", accountData.mobile_no);
    changeData.append("image", accountData.image);

    e.preventDefault();

    try {
      const token = sessionStorage.getItem("token");
      const result = await axios.put(
        `http://localhost:2121/api/users/updateUser/${userData.id}`,
        changeData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert(result.data.message);
      setAccountData({
        name: "",
        email: "",
        gender: "",
        mobile_no: "",
        image: "",
      });
      document.getElementById("file").value = null;

      const updateUser = {
        ...userData,
        name: accountData.name,
        email: accountData.email,
        gender: accountData.gender,
        mobile_no: accountData.mobile_no,
        image: result.data.updatedUser.image,
      };

      sessionStorage.setItem("user", JSON.stringify(updateUser));
      setUserData(updateUser);
    } catch (error) {
      console.error("Error while updating user account details!!!", error);
      alert("Could not update user!!!");
    }
  };
  return (
    <>
      <div className="signup-form">
        <div className="signup-title mb-4">
          <div className="sign-logo">
            <i className="fa-solid fa-user-pen"></i>
          </div>
          <h5>Change account details</h5>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 file-input-container">
            <input
              type="file"
              name="image"
              accept="image/*"
              className="file-input"
              onChange={handleChange}
              id="file"
            />
            <label htmlFor="file" className="custom-file-label">
              <span className="choose-btn">Choose an Image</span>
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={accountData.name}
              onChange={handleChange}
              className="form-control"
              id="exampleInputName1"
              aria-describedby="NameHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              type="text"
              name="email"
              value={accountData.email}
              onChange={handleChange}
              className="form-control"
              id="exampleInputName1"
              aria-describedby="EmailHelp"
            />
          </div>
          <div className="mb-3 d-inline-flex gap-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                value="male"
                checked={accountData.gender === "male"}
                onChange={handleChange}
                id="male"
              />
              <label htmlFor="male" className="form-check-label">
                Male
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                value="female"
                checked={accountData.gender === "female"}
                onChange={handleChange}
                id="female"
              />
              <label htmlFor="female" className="form-check-label">
                Female
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                value="other"
                checked={accountData.gender === "other"}
                onChange={handleChange}
                id="other"
              />
              <label htmlFor="other" className="form-check-label">
                Other
              </label>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPhone1" className="form-label">
              Phone Number
            </label>
            <input
              type="number"
              name="mobile_no"
              value={accountData.mobile_no}
              onChange={handleChange}
              className="form-control"
              id="exampleInputPhone1"
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Remember Me
            </label>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default ChangeAccountDetails;
