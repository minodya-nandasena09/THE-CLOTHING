import Nav from "./Components/Nav/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
import men_b from "./Components/Assets/banner_mens.png";
import women_b from "./Components/Assets/banner_women.png";
import kid_b from "./Components/Assets/banner_kids.png";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Shop />} />

          <Route
            path="/mens"
            element={<ShopCategory banner={men_b} category="men" />}
          />
          <Route
            path="/womens"
            element={<ShopCategory banner={women_b} category="women" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={kid_b} category="kid" />}
          />

          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>

          <Route path="/cart" element={<Cart />} />

          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
