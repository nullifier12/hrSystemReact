import { Fragment, useState, useEffect } from "react";

import axios from "axios";

import "../CSS/Dashboard.css";
const Maindashboard = () => {
  const [adminInfo, setAdminInfo] = useState({});

  // const getUser = useCallback(async () => {}, []);

  //   const cookies = new Cookies();
  //   const authCookie = cookies.get("authCookie");
  //   if (authCookie) {
  //     navigate("/dashboard/maindashboard");
  //   } else {
  //     navigate("/");
  //   }
  // }, [navigate]);

  useEffect(() => {
    axios.get("/getUserLogged").then((res) => {
      setAdminInfo(res.data);
    });
  }, []);
  return (
    <Fragment>
      <div className="divPage1">
        <div className="welcome">
          <div className="content dash">
            <h1 className="fs-3">Welcome to Dashboard {adminInfo.name}</h1>
            <p className="mb-0">Monitoring of employee</p>
          </div>
        </div>

        <section className="statistics mt-4">
          <div className="row">
            <div className="col-md-8">
              <div className="row cardsCounter">
                <div className="col-md-4 cardHire1">
                  <div
                    className="box d-flex rounded-3 align-items-center p-3 card"
                    id="traineeBtn"
                  >
                    <div className="ms-3">
                      <div className="d-flex align-items-center">
                        <h3 className="mb-0 newHire" id="newHire">
                          2
                        </h3>
                        <span className="d-block ms-2 lblNewHire">
                          New Hire Queue
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 cardHire2">
                  <div
                    className="box d-flex rounded-3 align-items-center p-3 card"
                    id="onboardComplete"
                  >
                    <div className="ms-3">
                      <div className="d-flex align-items-center">
                        <h3 className="mb-0 onBoarding" id="onBoard">
                          3
                        </h3>
                        <span className="d-block ms-2 lblOnboarding">
                          Onboarding Initiated
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 cardHire3">
                  <div
                    className="box d-flex rounded-3 align-items-center p-3 card"
                    id="hiredEmp"
                  >
                    <div className="ms-3">
                      <div className="d-flex align-items-center">
                        <h3 className="mb-0 onCompleted" id="onBoardingComp">
                          4
                        </h3>
                        <span className="d-block ms-2 lblCompleted">
                          Onboarding Completed
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row emplistCard">
                <div className="box rounded-2 align-items-center p-3 pgEmployedList">
                  <ul className="list-group" id="traiNee"></ul>
                </div>
              </div>
            </div>
            <div className="col-4 pendingreq">
              <div className="box rounded-2 align-items-center w-100 p-3 pendingrequest">
                <div className="">
                  <h5 className="requestheader">
                    Pending Request
                    <span className="badge bg-primary" id="reqNumber"></span>
                  </h5>
                </div>

                <ul className="list-group" id="reqItems"></ul>
              </div>
            </div>
          </div>

          <div
            className="modal fade"
            id="modalDetails"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title textArea" id="exampleModalLabel">
                    Information
                  </h5>
                  <button
                    type="button"
                    className="close btn btn-danger"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="empName"
                      readOnly
                    />
                    <label htmlFor="floatingInput" className="textArea">
                      Name
                    </label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="empPosition"
                      readOnly
                    />
                    <label htmlFor="floatingPassword" className="textArea">
                      Position
                    </label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="dateOfApp"
                      readOnly
                    />
                    <label htmlFor="floatingInput" className="textArea">
                      Date of Application
                    </label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="Text"
                      className="form-control"
                      id="empAddress"
                      readOnly
                    />
                    <label htmlFor="floatingPassword" className="textArea">
                      Address
                    </label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="empCourse"
                      readOnly
                    />
                    <label htmlFor="floatingInput" className="textArea">
                      Course
                    </label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="empGradYear"
                      readOnly
                    />
                    <label htmlFor="floatingPassword" className="textArea">
                      Graduated Year
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};
export default Maindashboard;
