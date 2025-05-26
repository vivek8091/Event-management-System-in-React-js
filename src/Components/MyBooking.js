import { useEffect, useState } from "react";
import "../Styles/myBooking.css";
import axios from "axios";

function MyBooking() {
  const [bookings, setBookings] = useState([]);
  const user = JSON.parse(sessionStorage.getItem("user"));
  const user_id = user?.id;

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const token = sessionStorage.getItem("token");
        const response = await axios.get(
          `http://localhost:2121/api/bookings/getBookingsByUser/${user_id}`,
          {
            headers: {
              Authorization: `bearer ${token}`,
            },
          }
        );
        setBookings(response.data.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error while fetching bookings!!!", error);
      }
    };
    fetchBookings();
  }, [user_id]);

  const formatDateTime = (dateTimeString) => {
    const date = new Date(dateTimeString);

    const formattedDate = date.toLocaleDateString("en-IN", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    const formattedTime = date.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    return `${formattedDate}, ${formattedTime}`; // Example: "30 Apr, 2025 11:45 AM"
  };

  const handleDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const deleteBooking = async (bookingId) => {
    if (window.confirm("Are you sure you want to delete this booking?")) {
      try {
        await axios.delete(
          `http://localhost:2121/api/bookings/deleteBooking/${bookingId}`
        );
        alert("Booking deleted successfully...");
        setBookings((prevBookings) =>
          prevBookings.filter((booking) => booking.id !== bookingId)
        );
      } catch (error) {
        console.error("Error while deleting booking!!!", error);
        alert("Failed to delete booking!!!");
      }
    }
  };

  return (
    <>
      <div className="booking-wrapper-outer">
        <div className="booking-wrapper mt-3 mb-3">
          {bookings.length === 0 ? (
            <p>No bookings found!!!</p>
          ) : (
            bookings.map((booking) => (
              <div key={booking.id} className="booking-container">
                <div className="qr-section">
                  <div className="qr-img">
                    <img
                      src={`http://localhost:2121/uploads/${booking.booking_image}`}
                      alt="booking_image"
                      className="qr-code"
                    />
                  </div>
                  <button
                    className="delete-btn"
                    onClick={() => deleteBooking(booking.id)}
                  >
                    <i className="fa-solid fa-trash-arrow-up"></i>{" "}
                    <span>Delete</span>
                  </button>
                </div>
                <div className="details-section">
                  <div className="details-grid">
                    <div>
                      <strong>Ticket ID</strong>
                      <span className="blue-text">{booking.ticket_id}</span>
                    </div>
                    <div>
                      <strong>Date & Time</strong>
                      <span className="blue-text">
                        {formatDateTime(booking.event_date_time)}
                      </span>
                    </div>

                    <div>
                      <strong>Location</strong>
                      <span className="blue-text">
                        {booking.event_location}
                      </span>
                    </div>
                    <div>
                      <strong>Booking Date</strong>
                      <span className="blue-text">
                        {handleDate(booking.booking_date)}
                      </span>
                    </div>

                    <div>
                      <strong>Price</strong>
                      <span className="blue-text">
                        ₹ {booking.booking_price}
                      </span>
                    </div>
                    <div>
                      <strong>Title</strong>
                      <span className="blue-text">{booking.booking_title}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default MyBooking;
