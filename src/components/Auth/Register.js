import { Fragment } from "react";
import { Link } from "react-router-dom";
import { MDBContainer, MDBCard, MDBCardBody, MDBInput } from "mdb-react-ui-kit";
import Logo from "../img/mmhrslogo1.png";
const Register = () => {
  const registerNew = (e) => {
    e.preventDefault();
  };
  return (
    <Fragment>
      <section id="registerSection">
        <div className="row register">
          <MDBContainer
            fluid
            className="d-flex align-items-center justify-content-center bg-image col-6 mx-0 px-0"
            style={{
              backgroundImage: `url(${Logo})`,

              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="mask gradient-custom-3"></div>
          </MDBContainer>
          <MDBCard className="col-6 form mx-0 px-0">
            <form onSubmit={registerNew}>
              <MDBCardBody className="px-5">
                <h2 className="text-uppercase text-center mb-5">
                  Create an account
                </h2>
                <MDBInput
                  wrapperClass="mb-4"
                  label="Your Name"
                  size="lg"
                  id="form1"
                  type="text"
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Your Email"
                  size="lg"
                  id="form2"
                  type="email"
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  size="lg"
                  id="form3"
                  type="password"
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Repeat your password"
                  size="lg"
                  id="form4"
                  type="password"
                />
                <Link to={"/login"}>
                  <span
                    style={{
                      textAlign: "center",
                    }}
                  >
                    I have already an account
                  </span>
                </Link>

                {/* <MDBBtn className="w-100 gradient-custom-4" size="lg">
                  Register
                </MDBBtn> */}
                <button className="btn btn-primary w-100 gradient-custom-4">
                  Register
                </button>
              </MDBCardBody>
            </form>
          </MDBCard>
        </div>
      </section>
    </Fragment>
  );
};
export default Register;
