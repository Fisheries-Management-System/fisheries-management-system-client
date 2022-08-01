import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import Home from "./Pages/HomePage/Home/Home";
import Header from "./Pages/SharedPages/Header/Header";
import PageNotFound from "./Pages/SharedPages/PageNotFound/PageNotFound";
import Footer from "./Pages/SharedPages/Footer/Footer";
import FAQs from "./Components/FAQs/FAQs";
import About from "./Pages/About/About";
import AdminLogin from "./Pages/Authentication/Login/AdminLogin";
import AddEmployee from "./Pages/Dashboard/AddEmployee/AddEmployee";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyProfile from "./Components/Dashboard/MyProfile";
import MangeEmployee from "./Pages/Dashboard/MangeEmployee/MangeEmployee";
import MangeAttendance from "./Components/Dashboard/MangeAttendance";
import AttendanceReports from "./Components/Dashboard/AttendanceReports/AttendanceReports";
import AddReview from "./Components/Dashboard/AddReview";
import EmployeeTask from "./Components/Dashboard/EmployeeTask";
import TaskDistubation from "./Components/Dashboard/TaskDistubation";
import PurchaseManagement from "./Components/Dashboard/PurchaseManagement";
import SellingFish from "./Components/Dashboard/SellingFish";
import EmployeeLogin from "./Pages/Authentication/Login/EmployeeLogin";

function App() {
  const [user, setUser] = useState(null);

  const [reload, setReload] = useState(false);
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("employee")));
  }, [reload]);
  const { pathname } = useLocation();
  return (
    <>
      <div className="min-h-[80vh]">
        <div className={`${pathname.includes("/dashboard") && "hidden"}`}>
          <Header user={user} setUser={setUser} />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/admin-login"
            element={<AdminLogin setReload={setReload} />}
          />
          <Route
            path="/employee-login"
            element={<EmployeeLogin setReload={setReload} />}
          />
          <Route path="/addemployee" element={<AddEmployee />} />
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard
                  user={user}
                  setUser={setUser}
                  setReload={setReload}
                />
              </RequireAuth>
            }
          >
            <Route
              index
              element={
                <RequireAuth>
                  <MyProfile />
                </RequireAuth>
              }
            />
            <Route
              path="addEmployee"
              element={
                <RequireAuth>
                  <AddEmployee />
                </RequireAuth>
              }
            />
            <Route
              path="manageEmployee"
              element={
                <RequireAuth>
                  <MangeEmployee />
                </RequireAuth>
              }
            />
            <Route
              path="manageAttendences"
              element={
                <RequireAuth>
                  <MangeAttendance />
                </RequireAuth>
              }
            />
            <Route
              path="attendanceReports"
              element={
                <RequireAuth>
                  <AttendanceReports />
                </RequireAuth>
              }
            />
            <Route
              path="employeeTask"
              element={
                <RequireAuth>
                  <EmployeeTask />
                </RequireAuth>
              }
            />
            <Route
              path="taskDistrubition"
              element={
                <RequireAuth>
                  <TaskDistubation />
                </RequireAuth>
              }
            />
            <Route
              path="purchase-management"
              element={
                <RequireAuth>
                  <PurchaseManagement />
                </RequireAuth>
              }
            />
            <Route
              path="sellingFish"
              element={
                <RequireAuth>
                  <SellingFish />
                </RequireAuth>
              }
            />
            <Route
              path="addReview"
              element={
                <RequireAuth>
                  <AddReview />
                </RequireAuth>
              }
            />
            <Route path="*" element={<PageNotFound />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
