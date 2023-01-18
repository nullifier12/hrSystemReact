import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/mmhrslogo1.png";
import "../CSS/NavbarContent.css";
const NavbarContent = () => {
  return (
    <Fragment>
      <aside
        className="sidebar position-fixed top-0 left-0 overflow-auto h-100 float-left"
        id="show-side-navigation1"
      >
        <i
          className="uil-bars close-aside d-md-none d-lg-none"
          data-close="show-side-navigation1"
        ></i>
        <div className="sidebar-header d-flex justify-content-center align-items-center px-3 py-4">
          <img className="img-fluid" src={logo} alt="" />
        </div>

        <br />
        <ul className="categories list-unstyled">
          <li className="menuDashboard sideMenu active">
            <i className="fa fa-tachometer"></i>
            <NavLink to="dashboard">Dashboard</NavLink>
          </li>
          <li className="menuListOfEmployee sideMenu">
            <i className="fa fa-users"></i>
            <NavLink to="employee" id="btnListOfEmployee">
              {" "}
              Employees
            </NavLink>
          </li>
          <li className="menuAttendance sideMenu">
            <i className="fa fa-calendar"></i>
            <NavLink to="/calendar" id="btnAttendance">
              {" "}
              Attendance
            </NavLink>
          </li>
          <li className="menuRequests sideMenu">
            <i className="fa fa-flag"></i>
            <NavLink to="request" id="btnRequest">
              {" "}
              Requests
            </NavLink>
          </li>
          <li className="menuPayroll sideMenu">
            <i className="fa fa-money"></i>
            <NavLink to="payroll" id="btnPayroll">
              {" "}
              Payroll
            </NavLink>
          </li>
          <li className="menuTrainingSeminar sideMenu">
            <i className="fa fa-certificate"></i>
            <NavLink to="trainings" id="btnTraining">
              {" "}
              Training & Seminars
            </NavLink>
          </li>
          <li className="menuTrainingSeminar sideMenu">
            <form action="/logOut" method="post">
              <button className="btnLogout" type="submit">
                <i className="fa fa-sign-out"></i>{" "}
                &nbsp;&nbsp;&nbsp;&nbsp;Logout
              </button>
            </form>
          </li>
        </ul>
      </aside>
    </Fragment>
  );
};

export default NavbarContent;
