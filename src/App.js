import { Fragment } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Layout/Navbar";
import Maindashboard from "./components/dashboard/Maindashboard";
import Employee from "./components/employee/Employee";

function App() {
  return (
    <Fragment>
      <Navbar>
        <Routes>
          <Route path="/" element={<Navigate to={"/dashboard"} />} />
          <Route path="/dashboard/*" element={<Maindashboard />} />
          <Route path="/employee" element={<Employee />} />
        </Routes>
      </Navbar>
    </Fragment>
  );
}

export default App;
