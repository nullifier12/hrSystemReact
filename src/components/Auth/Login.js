import { Fragment, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import Logo from "../img/mmhrslogo1.png";
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
import "../CSS/Login.css";
import axios from "axios";
// import Footer from "../Layout/Footer";
const Login = (props) => {
  let [foundUser, setFoundUser] = useState("");
  // const [pword, setPass] = useState("");
  // const [uname, setUname] = useState("");
  let navigate = useNavigate();

  // console.log(props);
  // const location = useLocation();
  const form = useRef();
  const email = useRef("");
  const password = useRef("");
  const subMit = (e) => {
    e.preventDefault();
    // // console.log(email.current.value);
    // // console.log(password.current.value);
    // console.log(uname);
    // console.log(pword);

    axios({
      method: "POST",
      data: {
        username: email.current.value,
        password: password.current.value,
      },
      // data: {
      //   username: uname,
      //   password: pword,
      // },

      withCredentials: true,
      url: "/adminLogin",
    }).then((res) => {
      console.log(res.data);
      if (res.data === false) {
        setFoundUser("No user found");
      } else if (res.data === "logged") {
        const cookies = new Cookies();
        cookies.set("authCookie", res.headers.etag, { path: "/" });
        navigate("/dashboard/maindashboard");
      } else {
        navigate("/");
      }
    });
    // const params = new URLSearchParams();
    // params.append("username", email.current.value);
    // params.append("password", password.current.value);
    // axios
    //   .post("/login", {
    //     username: uname,
    //     password: pword,
    //   })
    //   .then((res) => {
    //     console.log(res.data);
    //   });
    form.current.reset();
  };

  return (
    <Fragment>
      <div className="header" />
      <MDBContainer className="login">
        <MDBCard className="loginCard">
          <MDBRow className="g-0">
            <MDBCol md="6">
              <MDBCardImage
                src={Logo}
                alt="login form"
                className="rounded-start w-100"
              />
            </MDBCol>

            <MDBCol md="6">
              <MDBCardBody className="d-flex flex-column">
                <div className="d-flex flex-row mt-2">
                  <MDBIcon
                    fas
                    icon="fa-duotone fa-user"
                    style={{ color: "#850000", fontSize: "5rem" }}
                  />
                  <span className="h1 fw-bold mb-0">MMHR</span>
                  {foundUser && (
                    <div className="alert alert-danger" role="alert">
                      {foundUser}
                    </div>
                  )}
                </div>

                <h5
                  className="fw-normal my-4 pb-3"
                  style={{ letterSpacing: "1px" }}
                >
                  Sign into your account
                </h5>
                {/* {messages.error && (
                  <div
                    class="alert alert-danger "
                    role="alert"
                    id="errorMessage"
                  >
                    {messages.error}
                  </div>
                )} */}
                <form onSubmit={subMit} ref={form}>
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Email address"
                    name="UserName"
                    //   id="formControlLg"
                    // value={uname}
                    ref={email}
                    // onChange={(e) => setUname(e.target.value)}
                    id="emp_email"
                    // type="email"
                    size="lg"
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Password"
                    // onChange={(e) => setPass(e.target.value)}
                    //   id="formControlLg"
                    // value={pword}
                    ref={password}
                    name="Password"
                    id="emp_password"
                    type="password"
                    size="lg"
                  />

                  {/* <MDBBtn
                    type="submit"
                    className="mb-4 px-5"
                    color="danger"
                    size="lg"
                  >
                    Login
                  </MDBBtn> */}
                  <button className="btn btn-danger" type="submit">
                    Login
                  </button>
                </form>
                <Link to="" className="small text-muted">
                  Forgot password?
                </Link>
                <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                  Don't have an account?{" "}
                  {/* <a href="#!" style={{ color: "#393f81" }}>
                    Register here
                  </a> */}
                  <Link to="/login/register">Register here</Link>
                </p>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBContainer>
      {/* <Footer /> */}
    </Fragment>
  );
};

export default Login;
