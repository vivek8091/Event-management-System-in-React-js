import "../Styles/userAccountDetails.css";

function ChangeAccountDetails() {
  return (
    <>
      <div className="signup-form pt-5">
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Full Name
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputName1"
              aria-describedby="NameHelp"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputName1"
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
            <label for="exampleInputPhone1" class="form-label">
              Phone Number
            </label>
            <input
              type="number"
              class="form-control"
              id="exampleInputPhone1"
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
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default ChangeAccountDetails;
