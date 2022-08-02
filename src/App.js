import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import AddReview from "./Components/Dashboard/AddReview";
import AssignedTasks from "./Components/Dashboard/EmployeeRoute/AssignedTasks";
import CompletedTaskList from "./Components/Dashboard/EmployeeRoute/CompletedTaskList";
import IncompletedTaskList from "./Components/Dashboard/EmployeeRoute/IncompletedTaskList";
import TaskForwarding from "./Components/Dashboard/EmployeeRoute/TaskForwarding";
import UpdateTaskStatus from "./Components/Dashboard/EmployeeRoute/UpdateTaskStatus";
import EmployeeTask from "./Components/Dashboard/EmployeeTask";
import MangeAteendance from "./Components/Dashboard/MangeAteendance";

import MyProfile from "./Components/Dashboard/MyProfile";
import PurchaseManagement from "./Components/Dashboard/PurchaseManagement";
import TaskDistubation from "./Components/Dashboard/TaskDistubation";

import RequireAuth from "./Components/RequireAuth/RequireAuth";

import AdminLogin from "./Pages/Authentication/Login/AdminLogin";

import AddEmployee from "./Pages/Dashboard/AddEmployee/AddEmployee";
import Dashboard from "./Pages/Dashboard/Dashboard";

import FAQ from "./Pages/FAQ/FAQ";
import Home from "./Pages/HomePage/Home/Home";

import Footer from "./Pages/SharedPages/Footer/Footer";
import Header from "./Pages/SharedPages/Header/Header";
import PageNotFound from "./Pages/SharedPages/PageNotFound/PageNotFound";

function App() {
    const [user, setUser] = useState(null);

    const [reload, setreload] = useState(false);
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("employee")));
    }, [reload]);
    const { pathname } = useLocation();
    return (
        <>
            <div className="min-h-[80vh]">
                <div
                    className={`${pathname.includes("/dashboard") && "hidden"}`}
                >
                    <Header user={user} setUser={setUser} />
                </div>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/admin-login"
                        element={<AdminLogin setreload={setreload} />}
                    />
                    <Route path="/faqs" element={<FAQ />} />
                    <Route path="/addemployee" element={<AddEmployee />} />
                    <Route
                        path="/dashboard"
                        element={
                            <RequireAuth>
                                <Dashboard
                                    user={user}
                                    setUser={setUser}
                                    setreload={setreload}
                                />
                            </RequireAuth>
                        }
                    >

                        <Route
                            path="assignd-tasks"
                            element={
                                <RequireAuth>
                                    <AssignedTasks />
                                </RequireAuth>
                            }
                        />
                        <Route
                            path="update-task-status"
                            element={
                                <RequireAuth>
                                    <UpdateTaskStatus />
                                </RequireAuth>
                            }
                        />
                        <Route
                            path="completed-task-list"
                            element={
                                <RequireAuth>
                                    <CompletedTaskList />
                                </RequireAuth>
                            }
                        />
                        <Route
                            path="incompleted-task-list"
                            element={
                                <RequireAuth>
                                    <IncompletedTaskList />
                                </RequireAuth>
                            }
                        />
                        <Route
                            path="task-forwarding"
                            element={
                                <RequireAuth>
                                    <TaskForwarding />
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
            </div>
            <ToastContainer />
            <div
                className={`${
                    pathname.includes("/dashboard") && "hidden"
                } bg-gray-800`}
            >
                <Footer />
            </div>
        </>
    );
}

export default App;
