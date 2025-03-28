import "../Styles/login.css";
import { Link } from "react-router-dom";

function Registration() {
  return (
    <>
      <div className="signup-form pt-5">
        <div className="signup-title">
          <div className="sign-logo">
            <i class="fa-solid fa-user-lock"></i>
          </div>
          <h5>Sign Up</h5>
        </div>
        <form>
          <div class="mb-3">
            <label for="inputName" class="form-label">
              Full Name
            </label>
            <input
              type="text"
              class="form-control"
              id="inputName"
              aria-describedby="NameHelp"
            />
          </div>
          <div class="mb-3">
            <label for="inputEmail" class="form-label">
              Email
            </label>
            <input
              type="text"
              class="form-control"
              id="inputEmail"
              aria-describedby="EmailHelp"
            />
          </div>
          <div class="mb-3 d-inline-flex gap-3">
            <div className="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="male"
              />
              <label for="male" className="form-check-label">
                Male
              </label>
            </div>
            <div className="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="female"
              />
              <label for="female" className="form-check-label">
                Female
              </label>
            </div>
            <div className="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="other"
              />
              <label for="other" className="form-check-label">
                Other
              </label>
            </div>
          </div>
          <div class="mb-3">
            <label for="inputPhone" class="form-label">
              Phone Number
            </label>
            <input
              type="number"
              class="form-control"
              id="inputPhone"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="rememberMe"
            />
            <label class="form-check-label" for="rememberMe">
              Remember Me
            </label>
          </div>
          <button type="submit" class="btn btn-primary w-100">
            Sign Up
          </button>

          <div className="login-link">
            <nav>
              <Link to="/Login">Already have an account? Sign In</Link>
            </nav>
          </div>
        </form>
      </div>
    </>
  );
}

export default Registration;
