import "../Styles/login.css";
import Header from "./Header";

function Login() {
  return (
    <>
      <Header />
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
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
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
                <a href="#">Forgot Password?</a>
                <a href="#">Don't have an account? Sign Up</a>
            </div>
          </form>
        </div>
    </>
  );
}

export default Login;
