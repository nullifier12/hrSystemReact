import { Fragment } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import CalendarEmp from "../Calendar/Calendar";
import NavbarContent from "./NavbarContent";
import Maindashboard from "../dashboard/Maindashboard";
import Employee from "../employee/Employee";

const Navbar = (props) => {
  return (
    <Fragment>
      <NavbarContent />
      <main>
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/dashboard/maindashboard" />}
          />
          <Route path="/maindashboard/*" element={<Maindashboard />} />
          <Route path="/calendar" element={<CalendarEmp />} />
          <Route path="/employee" element={<Employee />} />
        </Routes>
      </main>
    </Fragment>
  );
};
export default Navbar;
