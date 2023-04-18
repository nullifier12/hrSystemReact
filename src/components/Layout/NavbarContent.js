import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap";
import logo from "../img/mmhrslogo1.png";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import "../CSS/NavbarContent.css";
// import Swal from "sweetalert2";

const NavbarContent = (props) => {
  const navigate = useNavigate();
  let activeStyle = {
    textDecoration: "underline 1px",
  };
  const activeSideBar = ({ isActive }) => {
    return isActive ? activeStyle : undefined;
  };
  // const logout = (e) => {
  //   const cookie = new Cookies();
  //   cookie.remove("authCookie", { path: "/" });

  //   navigate("/login", { replace: true });
  // };
  const logOut = (e) => {
    Swal.fire({
      title: "Are you sure you want to log out? ",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Log Out",
      customClass: {
        popup: `popDelete`,
        container: `contDelete`,
        htmlContainer: `htmlDelete`,
        confirmButton: `btnDelete`,
        icon: `iconDelete`,
        title: `titleDelete`,
        cancelButton: `btnCancelDelete`,
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const cookie = new Cookies();
        cookie.remove("authCookie", { path: "/" });
        navigate("/login", { replace: true });
        // e.preventDefault();
        // e.stopPropagation();
        // e.nativeEvent.stopImmediatePropagation();
        // window.location = "/login";
      }
    });
  };
  return (
    <Fragment>
      <aside
        className="sidebar position-fixed top-0 left-0 overflow-auto float-left d-flex flex-column flex-shrink-0"
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
        <ul className="categories list-unstyled ">
          <li className="menuDashboard">
            <i className="fa fa-tachometer"></i>
            <NavLink
              to="maindashboard"
              className={"sideMenu"}
              style={activeSideBar}
            >
              Dashboard
            </NavLink>
          </li>
          <li className="menuListOfEmployee ">
            <i className="fa fa-users"></i>
            <NavLink to="employee" className={"sideMenu"} style={activeSideBar}>
              Employees
            </NavLink>
          </li>
          <li className="menuAttendance ">
            <i className="fa fa-calendar"></i>
            <NavLink to="calendar" className={"sideMenu"} style={activeSideBar}>
              Attendance
            </NavLink>
          </li>
          <li className="menuRequests">
            <i className="fa fa-flag"></i>
            <NavLink to="request" className={"sideMenu"}>
              Requests
            </NavLink>
          </li>
          <li className="menuPayroll ">
            <i className="fa fa-money"></i>
            <NavLink to="payroll" className={"sideMenu"} id="btnPayroll">
              Payroll
            </NavLink>
          </li>
          <li className="menuTrainingSeminar ">
            <i className="fa fa-certificate"></i>
            <NavLink to="trainings" className={"sideMenu"}>
              Training & Seminars
            </NavLink>
          </li>
          <li className="menuTrainingSeminar ">
            <button className="btnLogout sideMenu" onClick={logOut}>
              <i className="fa fa-sign-out"></i>
              &nbsp;&nbsp;&nbsp;&nbsp;Logout
            </button>

            {/* <Link
              to="/login"
              className={"btnLogout sideMenu"}
              onClick={props.onLogOut}
            >
              <i className="fa fa-sign-out"></i>
              &nbsp;&nbsp;&nbsp;&nbsp;Logout
            </Link> */}
          </li>
        </ul>
      </aside>
    </Fragment>
  );
};

export default NavbarContent;
