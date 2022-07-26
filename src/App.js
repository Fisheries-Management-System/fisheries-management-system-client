import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/HomePage/Home/Home";
import Header from "./Pages/SharedPages/Header/Header";
import PageNotFound from "./Pages/SharedPages/PageNotFound/PageNotFound";
import Footer from "./Pages/SharedPages/Footer/Footer";
import Register from "./Pages/Authentication/Register/Register";

function App() {
  return (
    <>
      <div className="min-h-[80vh]">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Register />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
