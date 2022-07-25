import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/HomePage/Home/Home";
import EmployeeLogin from "./Pages/Login/EmployeeLogin";
import Footer from "./Pages/SharedPages/Footer/Footer";
import Header from "./Pages/SharedPages/Header/Header";
import PageNotFound from "./Pages/SharedPages/PageNotFound/PageNotFound";

function App() {
  return (
    <>
      <div className="min-h-[80vh]">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employee-login" element={<EmployeeLogin />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
