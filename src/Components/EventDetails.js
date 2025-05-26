import { useEffect, useState } from "react";
import "../Styles/eventDetails.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
// import { Toast } from "bootstrap";

const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

function EventDetails() {
  const navigate = useNavigate();
  const { eventId } = useParams();
  const [selectedEvent, setSelectedEvent] = useState([]);

  // Razorpay Logic...
  const displayRazorpay = async (amount, eventData) => {
    const token = sessionStorage.getItem("token");
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("You are offline");
      return;
    }

    const options = {
      key: "rzp_test_dEYhZg38SrkYMD",
      currency: "INR",
      amount: amount * 100,
      name: "data",
      description: "Thanks for buying products from our website",
      image:
        "https://res.cloudinary.com/dtdlad1ud/image/upload/v1707733051/uhwydfqry5wqwkaazbbk.jpg",
      handler: async function (response) {
        console.log(eventData.event_start_date);
        const combineDateAndTime = (date, time) => {
          const dateOnly = date.slice(0, 10); // just pick "YYYY-MM-DD" part from the string
          let formattedTime = time;
          if (time.length === 5) {
            formattedTime = `${time}:00`;
          }
          return `${dateOnly} ${formattedTime}`;
        };

        console.log(
          combineDateAndTime(
            eventData.event_start_date,
            eventData.event_start_time
          )
        );

        const today = new Date();
        const booking_date =
          today.getFullYear() +
          "-" +
          String(today.getMonth() + 1).padStart(2, "0") +
          "-" +
          String(today.getDate()).padStart(2, "0");
        String(today.getDate()).padStart(2, "0");

        const bookingData = {
          event_id: eventData.id,
          user_id: JSON.parse(sessionStorage.getItem("user")).id,
          booking_title: eventData.event_title,
          ticket_id: response.razorpay_payment_id, // or generate your own ticket ID
          event_date_time: combineDateAndTime(
            eventData.event_start_date,
            eventData.event_start_time
          ),
          event_location: eventData.event_location,
          booking_date: booking_date, // today's date
          booking_price: eventData.event_price,
          booking_image: eventData.event_image,
        };
        await axios
          .post(
            "http://localhost:2121/api/bookings/createBooking/",
            bookingData,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then((res) => {
            navigate("/MyBooking");
          })
          .catch((err) => {
            if (err.response) {
              console.error("Booking API Error:", err.response.data);
              alert(`Error: ${err.response.data.message || "Booking failed"}`);
            } else {
              console.error("Booking API Error:", err.message);
              alert(`Error: ${err.message}`);
            }
          });
      },
      prefill: {
        name: "hello",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const handleTime = (timeString) => {
    const [hour, minute] = timeString.split(":");
    const date = new Date();
    date.setHours(hour, minute);
    return date.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const handleDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  useEffect(() => {
    const fetchEventById = async () => {
      const token = sessionStorage.getItem("token");
      try {
        const res = await axios.get(
          `http://localhost:2121/api/events/getEventById/${eventId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(res.data);
        setSelectedEvent(res.data.data);
      } catch (error) {
        console.error("Error while fetching events details!!!");
      }
    };
    fetchEventById();
  }, [eventId]);
  console.log("Selected Event Data:", selectedEvent);

  return (
    <div className="container">
      {selectedEvent.map((event, index) => (
        <div key={event.id} className="event-details p-4">
          <img
            src={`http://localhost:2121/uploads/${event.event_image}`}
            alt={event.event_image}
            className="event-img"
          />

          <div className="event-titles">
            <h2>{event.event_title}</h2>
            <button
              className="btn btn-primary"
              onClick={() => displayRazorpay(event.event_price, event)}
            >
              Book Ticket
            </button>
          </div>

          <p className="pricings">
            <strong>
              <i className="fa-solid fa-indian-rupee-sign"></i>
            </strong>
            {event.event_price?.toLocaleString("en-IN")}
          </p>

          <h5 className="timings">When and Where,</h5>

          <div className="dates">
            <div className="start-date">
              <div className="date-icon">
                <i className="fa-solid fa-calendar-days"></i>
              </div>
              <div className="date-info">
                <h6>Date and Time</h6>
                <div className="duration">
                  <div className="start">
                    <p>
                      <strong>Start Date :</strong>{" "}
                      {handleDate(event.event_start_date)}
                    </p>
                    <p>
                      <strong>Start Time :</strong>{" "}
                      {handleTime(event.event_start_time)}
                    </p>
                  </div>
                  <div className="end">
                    <p>
                      <strong>End Date :</strong>{" "}
                      {handleDate(event.event_end_date)}
                    </p>
                    <p>
                      <strong>End Time :</strong>{" "}
                      {handleTime(event.event_end_time)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="end-date"></div>
          </div>

          <div className="location">
            <div className="location-icon">
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <div className="location-info">
              <h6>Location</h6>
              <p>{event.event_location}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EventDetails;
