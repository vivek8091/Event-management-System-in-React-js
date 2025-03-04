import "../Styles/login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
        <div className="login-form">
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
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
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                Remember Me
              </label>
            </div>
            <button type="submit" class="btn btn-primary w-100">
              Sign in
            </button>

            <div className="register-links">
                <nav>
                  <Link>Forgot Password?</Link>
                  <Link to="/Registration">Don't have an account? Sign Up</Link>
                </nav>
            </div>
          </form>
        </div>
    </>
  );
}

export default Login;
