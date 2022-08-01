import { Route, Routes, useLocation } from "react-router-dom";
import About from "./Pages/About/About";
import EmployeeLogin from "./Pages/Authentication/Login/EmployeeLogin";
import Home from "./Pages/HomePage/Home/Home";
import PurchaseManagement from "./Pages/PurchaseMangement/PurchaseManagement";
import SellingFishManagement from "./Pages/SellingFishMangement/SellingFishManagement";
import Header from "./Pages/SharedPages/Header/Header";
import PageNotFound from "./Pages/SharedPages/PageNotFound/PageNotFound";

function App() {
  return (
    <>
      <div className="min-h-[80vh]">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/about" element={<About />} />
          {/* these are all nested routes later will be aligned */}
          <Route
            path="/purchaseManagement"
            element={<PurchaseManagement></PurchaseManagement>}
          />
          <Route
            path="/sellingFishManagement"
            element={<SellingFishManagement></SellingFishManagement>}
          />
          <Route
            path="/employee-login"
            element={<EmployeeLogin></EmployeeLogin>}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
