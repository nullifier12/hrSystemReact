import { Fragment, useState, useEffect, useCallback } from "react";
import axios from "axios";
import AddEmployee from "./AddEmployee";
// import { Link } from "react-router-dom";
// import { InfinitySpin } from "react-loader-spinner";
// import { Circles } from "react-loader-spinner";
// import { LineWave } from "react-loader-spinner";

// import { ColorRing } from "react-loader-spinner";
// import { ClockLoader } from "react-spinners";
import { SyncLoader } from "react-spinners";
import Alert from "../Layout/Alert";
import Primarydetails from "./Primarydetails";
import EmployeeAddress from "./EmployeeAdress";
import Governmentdetails from "./Governmentdetails";
import EducationalBackground from "./EducationalBackground";
import EmployeeContent from "./EmployeeContent";
import Nofound from "./Nofound";
import "../CSS/Employee.css";
const Employee = () => {
  const [employeeData, getEmpolyeeData] = useState([]);
  const [employeeInfo, getEmployeeInfo] = useState([]);
  const [employeeAddress, getEmpadd] = useState([]);
  const [employeeEducation, getEmpEduc] = useState([]);
  const [employeeGovdetails, getGovDet] = useState([]);
  const [loadingSpinner, setLoading] = useState(true);
  const [isActive, setIsActive] = useState(1);
  const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const closeModal = () => {
    setShow(false);
  };
  const addEmployee = async (data) => {
    await axios.post("/addEmp", data).then((result) => {
      setShow(false);
    });
    // console.log(data);
  };

  const triggerActive = (index) => {
    setIsActive(index);
  };
  const tabContent = (data) => {
    let show = isActive === data;
    return show;
  };

  const getEmployeeInformation = async (e) => {
    const id = e.currentTarget.id;
    await axios
      .post("/employeeInformation", { id: id })
      .then(async (result) => {
        getEmployeeInfo(result.data);
        await axios
          .post("/employeeAddress", { id: id })
          .then(async (result) => {
            getEmpadd(result.data);
            await axios
              .post("/employeeEducation", { id: id })
              .then(async (result) => {
                getEmpEduc(result.data);
                await axios
                  .post("/employeeGovdetails", { id: id })
                  .then(async (result) => {
                    // console.log(`${id} data receive`);
                    getGovDet(result.data);
                  });
              });
          })
          .catch((err) => {
            console.log(err);
          });
      });
  };

  const searchEmp = async (e) => {
    // console.log("firing");
    const s = e.currentTarget.value;
    await axios
      .post("/search", { searchId: s })
      .then(async (result) => {
        let searchEmp = result.data;
        let newData = searchEmp.map((d) => {
          return {
            id: d.ID,
            fistname: d.emp_fname,
            middlename: d.emp_mname,
            lastname: d.emp_lname,
            sufixname: d.emp_sufix,
            employeenum: d.emp_empnum,
          };
        });
        getEmpolyeeData(newData);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getEmployee = useCallback(async () => {
    // console.log("firing");
    await axios.get("/employee").then(async (result) => {
      let employeeData = await result.data;
      let listOfemployee = employeeData.map((d) => {
        return {
          id: d.ID,
          fistname: d.emp_fname,
          middlename: d.emp_mname,
          lastname: d.emp_lname,
          sufixname: d.emp_sufix,
          employeenum: d.emp_empnum,
          birthday: d.emp_bday,
        };
      });
      getEmpolyeeData(listOfemployee);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    });
  }, []);

  const deleteEmployee = async (e) => {
    const id = e.currentTarget.id;
    Alert.deleteError(
      "Are you sure?",
      "You won't be able to revert this!",
      "warning",
      "popDelete",
      "contDelete",
      "htmlDelete",
      "btnDelete",
      "iconDelete",
      "titleDelete",
      "btnCancelDelete",
      "/delete",
      { id: id },
      getEmployee
    );
  };

  // const updateEmployee = async (e) => {
  //   const id = e.currentTarget.id;
  //   await axios
  //     .post("/employeeInformation", { id: id })
  //     .then(async (result) => {
  //       updateEmployeeInfo(result.data);
  //       await axios
  //         .post("/employeeAddress", { id: id })
  //         .then(async (result) => {
  //           updateEmpadd(result.data);
  //           await axios
  //             .post("/employeeEducation", { id: id })
  //             .then(async (result) => {
  //               updateEmpEduc(result.data);
  //               await axios
  //                 .post("/employeeGovdetails", { id: id })
  //                 .then(async (result) => {
  //                   // console.log(`${id} data receive`);
  //                   updateGovDet(result.data);
  //                 });
  //             });
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //         });
  //     });
  // };
  // console.log(updateInfo);
  // console.log(updateAddress);
  // console.log(updateEducation);
  // console.log(updateGovdetails);
  useEffect(() => {
    getEmployee();
  }, [getEmployee]);

  return (
    <Fragment>
      <div className="divPage">
        <section className="statistics mt-4">
          <div className="row">
            <div className="col-lg-12 ttlLOE">
              <div className="ms-3">
                <div className="row">
                  <div className="col-6 content dash">
                    <h1 className="fs-3">List of Employees</h1>
                    <p className="mb-0">Check details of all employee</p>
                  </div>
                  <div className="col-6 divEmployeeButton" onClick={handleShow}>
                    <span
                      id="btnAddEmployee"
                      className="btn btn-primary addEmployee"
                    >
                      <span className="lnkAddEmployee">
                        Add Employee &nbsp;{" "}
                        <i className="fa-solid fa-plus btnIcon"></i>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 employeePage">
              <div className="divSearchTable">
                <form className="search-form">
                  <input
                    type="search"
                    defaultValue=""
                    placeholder="Search"
                    className="search-input"
                    id="searchEmp"
                    onKeyUp={searchEmp}
                  />
                  /{" "}
                  <button type="submit" className="search-button">
                    <svg className="submit-button">
                      <use
                      // xmlns:xlink="http://www.w3.org/1999/xlink"
                      // xlink:href="#search"
                      ></use>
                    </svg>
                  </button>
                  <div className="search-option">
                    <div>
                      <input
                        name="type"
                        type="radio"
                        defaultValue="type-users"
                        id="type-users"
                      />
                      <label htmlFor="ty /pe-users">
                        <svg className="edit-pen-title">
                          <use></use>
                        </svg>
                        <span>Users</span>
                      </label>
                    </div>

                    <div>
                      <input
                        name="type"
                        type="radio"
                        defaultValue="type-posts"
                        id="type-posts"
                      />
                      <label htmlFor="ty /pe-posts">
                        <svg className="edit-pen-title">
                          <use
                          // xmlns:xlink="http://www.w3.org/1999/xlink"
                          // xlink:href="#post"
                          ></use>
                        </svg>
                        <span>Posts</span>
                      </label>
                    </div>
                  </div>
                </form>
                <svg
                  //   xmlns="http://www.w3.org/2000/svg"
                  width="0"
                  height="0"
                  display="none"
                >
                  <symbol id="search" viewBox="0 0 32 32">
                    <path d="M 19.5 3 C 14.26514 3 10 7.2651394 10 12.5 C 10 14.749977 10.810825 16.807458 12.125 18.4375 L 3.28125 27.28125 L 4.71875 28.71875 L 13.5625 19.875 C 15.192542 21.189175 17.250023 22 19.5 22 C 24.73486 22 29 17.73486 29 12.5 C 29 7.2651394 24.73486 3 19.5 3 z M 19.5 5 C 23.65398 5 27 8.3460198 27 12.5 C 27 16.65398 23.65398 20 19.5 20 C 15.34602 20 12 16.65398 12 12.5 C 12 8.3460198 15.34602 5 19.5 5 z" />
                  </symbol>
                  <symbol id="user" viewBox="0 0 32 32">
                    <path d="M 16 4 C 12.145852 4 9 7.1458513 9 11 C 9 13.393064 10.220383 15.517805 12.0625 16.78125 C 8.485554 18.302923 6 21.859881 6 26 L 8 26 C 8 21.533333 11.533333 18 16 18 C 20.466667 18 24 21.533333 24 26 L 26 26 C 26 21.859881 23.514446 18.302923 19.9375 16.78125 C 21.779617 15.517805 23 13.393064 23 11 C 23 7.1458513 19.854148 4 16 4 z M 16 6 C 18.773268 6 21 8.2267317 21 11 C 21 13.773268 18.773268 16 16 16 C 13.226732 16 11 13.773268 11 11 C 11 8.2267317 13.226732 6 16 6 z" />
                  </symbol>

                  <symbol id="post" viewBox="0 0 32 32">
                    <path d="M 3 5 L 3 6 L 3 23 C 3 25.209804 4.7901961 27 7 27 L 25 27 C 27.209804 27 29 25.209804 29 23 L 29 13 L 29 12 L 28 12 L 23 12 L 23 6 L 23 5 L 22 5 L 4 5 L 3 5 z M 5 7 L 21 7 L 21 12 L 21 13 L 21 23 C 21 23.73015 21.221057 24.41091 21.5625 25 L 7 25 C 5.8098039 25 5 24.190196 5 23 L 5 7 z M 7 9 L 7 10 L 7 13 L 7 14 L 8 14 L 18 14 L 19 14 L 19 13 L 19 10 L 19 9 L 18 9 L 8 9 L 7 9 z M 9 11 L 17 11 L 17 12 L 9 12 L 9 11 z M 23 14 L 27 14 L 27 23 C 27 24.190196 26.190196 25 25 25 C 23.809804 25 23 24.190196 23 23 L 23 14 z M 7 15 L 7 17 L 12 17 L 12 15 L 7 15 z M 14 15 L 14 17 L 19 17 L 19 15 L 14 15 z M 7 18 L 7 20 L 12 20 L 12 18 L 7 18 z M 14 18 L 14 20 L 19 20 L 19 18 L 14 18 z M 7 21 L 7 23 L 12 23 L 12 21 L 7 21 z M 14 21 L 14 23 L 19 23 L 19 21 L 14 21 z" />
                  </symbol>
                </svg>
                <br />
                <br />
                <table className="table tblListOfEmployee">
                  <thead className="employeeThead">
                    <tr>
                      <th scope="col" className="colName">
                        Name of Employees
                      </th>

                      <th scope="col" className="colAction">
                        Action
                      </th>
                    </tr>
                  </thead>
                  {loadingSpinner ? (
                    <tbody>
                      <tr>
                        <td>
                          {/* <InfinitySpin width="200" color="#434242" /> */}
                          {/* <ColorRing
                            visible={true}
                            height="80"
                            width="80"
                            ariaLabel="blocks-loading"
                            wrapperStyle={{}}
                            wrapperClass="blocks-wrapper"
                            colors={[
                              "#434242",
                              "#434242",
                              "#434242",
                              "#434242",
                              "#434242",
                            ]}
                          /> */}
                          <SyncLoader
                            color="#434242"
                            speedMultiplier={1}
                            margin={10}
                            size={24}
                          />
                        </td>
                      </tr>
                    </tbody>
                  ) : (
                    <tbody className="employeeData">
                      {employeeData.length > 0 ? (
                        <EmployeeContent
                          data={employeeData}
                          id={getEmployeeInformation}
                          delete={deleteEmployee}
                          // update={updateEmployee}
                        />
                      ) : (
                        <tr>
                          <td>
                            <Nofound />
                          </td>
                        </tr>
                      )}
                    </tbody>
                  )}
                </table>
              </div>
            </div>

            <div className="col-lg-8 employeeDetail">
              <div className="divEmployeeDetail">
                <ul className="form-tabs">
                  <li
                    className={
                      isActive === 1
                        ? "form-tab form-tab-first active-tab tabPrimaryDetails"
                        : "form-tab form-tab-first tabPrimaryDetails"
                    }
                    data-tabgroup="One"
                    onClick={() => triggerActive(1)}
                  >
                    Primary
                  </li>
                  <li
                    className={
                      isActive === 2
                        ? "form-tab form-tab-first active-tab tabPrimaryDetails"
                        : "form-tab form-tab-first tabPrimaryDetails"
                    }
                    data-tabgroup="Two"
                    onClick={() => triggerActive(2)}
                  >
                    Address
                  </li>
                  <li
                    className={
                      isActive === 3
                        ? "form-tab form-tab-first active-tab tabPrimaryDetails"
                        : "form-tab form-tab-first tabPrimaryDetails"
                    }
                    data-tabgroup="Three"
                    onClick={() => triggerActive(3)}
                  >
                    Government Information
                  </li>
                  <li
                    className={
                      isActive === 4
                        ? "form-tab form-tab-first active-tab tabPrimaryDetails"
                        : "form-tab form-tab-first tabPrimaryDetails"
                    }
                    data-tabgroup="Four"
                    onClick={() => triggerActive(4)}
                  >
                    Educational Background
                  </li>
                  <li
                    className={
                      isActive === 5
                        ? "form-tab form-tab-first active-tab tabPrimaryDetails"
                        : "form-tab form-tab-first tabPrimaryDetails"
                    }
                    data-tabgroup="Five"
                    onClick={() => triggerActive(5)}
                  >
                    Scanned Documents
                  </li>
                </ul>
                <br />
                <Primarydetails tab={tabContent} data={employeeInfo} />
                <EmployeeAddress tab={tabContent} data={employeeAddress} />
                <Governmentdetails tab={tabContent} data={employeeGovdetails} />
                <EducationalBackground
                  tab={tabContent}
                  data={employeeEducation}
                />
              </div>
            </div>
          </div>
          <AddEmployee
            setshow={show}
            setClose={addEmployee}
            onClose={closeModal}
          />
        </section>
      </div>
    </Fragment>
  );
};

export default Employee;
