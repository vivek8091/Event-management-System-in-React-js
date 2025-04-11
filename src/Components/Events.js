import { Link, useNavigate } from "react-router-dom";
import "../Styles/events.css";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Events() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    CategoryEvent();
  }, []);

  const CategoryEvent = async (e) => {
    try {
      const res = await axios.get(
        "http://localhost:2121/api/category/getCategory/"
      );
      setCategories(res.data.data);
    } catch (error) {
      console.error("Errorfetching categories!!!", error);
    }
  };
  const navigate = useNavigate();

  const handleCategoryClick = (CategoryEvent) => {
    navigate(`/Events/${CategoryEvent}`);
  };
  return (
    <>
      <div className="events-harmoni">
        <div className="content">
          <h1>Events</h1>
        </div>

        <nav>
          <Link to="/">Home</Link>
          <span>|</span>
          <Link to="/Events">Events</Link>
        </nav>
      </div>

      <div className="events-cat">
        <div className="container-fluid">
          <div className="row">
            {categories.map((cat, index) => (
              <div key={index} className="col-lg-4 col-md-4 col-sm-6 col-12">
                <div
                  className="category"
                  onClick={() => handleCategoryClick(cat.category_title)}
                >
                  <div className="cat-img">
                    <img
                      src={`http://localhost:2121/uploads/${cat.image}`}
                      alt={cat.category_title}
                      className="img-fluid"
                    />
                  </div>
                  <div className="cat-name">
                    <p>{cat.category_title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
