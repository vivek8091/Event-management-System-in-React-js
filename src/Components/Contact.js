import { useState } from "react";
import "../Styles/contact.css";
import axios from "axios";

function Contact() {
  const [getContacts, setContacts] = useState({
    name: "",
    email: "",
    country: "",
    phone_no: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContacts({
      ...getContacts,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post(
        "http://localhost:2121/api/contact/createContact",
        getContacts
      );
      alert(result.data.message);
      console.log("Submitted data...", result.data.data);

      setContacts({
        name: "",
        email: "",
        country: "",
        phone_no: "",
        message: "",
      });
    } catch (error) {
      console.error("Count not post contact!!!", error);
      alert("Failed to post contact details!!!");
    }
  };
  return (
    <>
      <div className="position-relative w-100 h-100">
        <div className="contact-form">
          <div className="contact-title">
            <div className="contact-logo">
              <i className="fa-solid fa-user-lock"></i>
            </div>
            <h5>Contact Us</h5>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputName1" className="form-label">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={getContacts.name}
                onChange={handleChange}
                className="form-control"
                id="exampleInputName1"
                aria-describedby="NameHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={getContacts.email}
                onChange={handleChange}
                className="form-control"
                id="email"
                aria-describedby="EmailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="country" className="form-label">
                Country
              </label>
              <input
                type="text"
                name="country"
                value={getContacts.country}
                onChange={handleChange}
                className="form-control"
                id="country"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phoneNumber" className="form-label">
                Phone Number
              </label>
              <input
                type="number"
                name="phone_no"
                value={getContacts.phone_no}
                onChange={handleChange}
                className="form-control"
                id="phoneNumber"
              />
            </div>
            <div className="form-floating mb-3">
            <textarea
              className="form-control"
              placeholder="Leave a message here..."
              id="floatingTextarea"
              name="message"
              value={getContacts.message}
              onChange={handleChange}
            ></textarea>
            <label htmlFor="floatingTextarea">Message</label>
          </div>
            <button type="submit" className="btn btn-primary w-100">
              Contact Us
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
