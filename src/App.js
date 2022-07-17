import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Header from "./SharedComponents/Header/Header";
import { library } from "@fortawesome/fontawesome-svg-core";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import Footer from "./SharedComponents/Footer/Footer";
import Page404 from "./SharedComponents/Page404/Page404";
import Signin from "./SharedComponents/Signin/Signin";
import Signup from "./SharedComponents/Signup/Signup";
import ForgotPass from "./SharedComponents/Signup/ForgotPass/ForgotPass";
import ProductPage from "./Components/ProductPage/ProductPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RequireAuth from "./SharedComponents/RequireAuth/RequireAuth";
import InventoryPage from "./Components/InventoryPage/InventoryPage";
import AddInventory from "./Components/AddInventory/AddInventory";
import Blogs from "./Components/Blogs/Blogs";
import Myitems from "./Components/MyItems/Myitems";

function App() {
  // font awesome global declear
  const iconList = Object.keys(Icons)
    .filter((key) => key !== "fas" && key !== "prefix")
    .map((icon) => Icons[icon]);
  library.add(...iconList);
  // font awesome global declear
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/forgotpass" element={<ForgotPass />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/additem" element={<AddInventory />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/myitems" element={<Myitems />} />
        <Route
          path="/product/:id"
          element={
            <RequireAuth redirectTo="/login">
              <ProductPage />
            </RequireAuth>
          }
        />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
