import { Fragment } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Protected from "./components/Layout/Protected";
import Navbar from "./components/Layout/Navbar";
// import RouteGuard from "./components/Layout/RouteGuard";
import Cookies from "universal-cookie";
import LoginPro from "./components/Layout/LoginPro";
import PageNotFound from "./components/Layout/PageNotFound";

function App() {
  let cookie = new Cookies();
  let Auth = cookie.get("authCookie");
  return (
    <Fragment>
      <Routes>
        <Route
          path="/"
          element={<Navigate to={Auth ? "/dashboard" : "/login"} />}
        />
        {Auth ? (
          <Route
            path="/dashboard/*"
            element={
              <Protected>
                <Navbar />
              </Protected>
            }
          />
        ) : (
          <Route path="/login/*" element={<Login />} />
        )}
        <Route
          path="/login/register"
          element={
            <LoginPro>
              <Register />
            </LoginPro>
          }
        />
        <Route
          path="/login/*"
          element={
            <LoginPro>
              <Login />
            </LoginPro>
          }
        />
        <Route
          path="/dashboard/*"
          element={
            <Protected>
              <Navbar />
            </Protected>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Fragment>
  );
}

export default App;
