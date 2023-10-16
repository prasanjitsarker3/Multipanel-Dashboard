import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/Layout/Main";
import Home from "./components/MainLayOutPage/Page/Home";
import About from "./components/MainLayOutPage/Page/About";
import Profile from "./components/MainLayOutPage/Page/Profile";
import MainDashboard from "./components/Layout/MainDashboard";
import Dashboard from "./components/Layout/DashboardLayoutPage/Dashboard";
import Inbox from "./components/Layout/DashboardLayoutPage/Inbox";
import AdminPanel from "./components/Layout/AdminPanel";
import AdminInfo from "./components/Layout/DashboardLayoutPage/AdminInfo";
import AdminHome from "./components/Layout/DashboardLayoutPage/AdminHome";
import PrivateRoute from "./components/CustomUser/PrivateRoute";
import ErrorPage from "./components/CustomUser/ErrorPage";
import Login from "./components/CustomFrom/Login";

function App() {
  // const userJSON = localStorage.getItem("user");
  // const user = JSON.parse(userJSON);
  // console.log("Info",users.role);
  const user = {
    name: "Lition",
    role: "admin",
  };

  let userPath;
  if (user.role == "instruct") {
    userPath = "/mainDashboard/info";
  } else if (user.role == "admin") {
    userPath = "admin/adminInfo";
  } else {
    userPath = "/";
  }

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute
              element={<Main />}
              allowedRoles={["user"]}
              userRole={user.role}
              userPath={userPath}
            />
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        <Route
          path="mainDashboard"
          element={
            <PrivateRoute
              element={<MainDashboard />}
              allowedRoles={["instruct"]}
              userRole={user.role}
              userPath={userPath}
            />
          }
        >
          <Route path="info" element={<Dashboard />} />
          <Route path="inbox" element={<Inbox />} />
        </Route>

        <Route
          path="admin"
          element={
            <PrivateRoute
              element={<AdminPanel />}
              allowedRoles={["admin"]}
              userRole={user.role}
              userPath={userPath}
            />
          }
        >
          <Route path="adminInfo" element={<AdminInfo />} />
          <Route path="adminHome" element={<AdminHome />} />
        </Route>
        <Route path="unauthorized" element={<ErrorPage />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
