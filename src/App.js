import { Route, Routes, useLocation } from "react-router-dom";
import AdminLogin from "./Pages/HomePage/FAQs/AdminLogin/AdminLogin";
import FAQs from "./Pages/HomePage/FAQs/FAQs";
import Home from "./Pages/HomePage/Home/Home";
import Header from "./Pages/SharedPages/Header/Header";
import PageNotFound from "./Pages/SharedPages/PageNotFound/PageNotFound";

function App() {
  return (
    <>
      <div className="min-h-[80vh]">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
