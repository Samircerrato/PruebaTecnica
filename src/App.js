import Header from "./components/Header"; //Incluir Header
import Footer from "./components/Footer"; //incluir Footer
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Abaut from "./pages/Abaut";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Wishes from "./pages/Wishes";
import Products from "./pages/Products";
import P1 from "./pages/P1";
import P2 from "./pages/P2";
import P3 from "./pages/P3";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart.js";
import Login from "./components/Login";
import Signup from "./components/Signup.js";
import ForgotPassword from "./components/ForgotPassword";
import Ofert from "./pages/Ofert";
import CrearFactura from "../src/pages/admin/CrearFactura"
import ActualizarProductos from "../src/pages/admin/ActualizarProductos"
import ReporteVentas from "../src/pages/admin/ReporteVentas"
import {
  BrowserRouter,
  Routes,
  Route,
  //Link,
  //Outlet
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          {/* {Admin} */}
          <Route exact path="/venta" element={<CrearFactura />} />
          <Route exact path="/reporte" element={<ReporteVentas />} />
          <Route exact path="/actualizar" element={<ActualizarProductos />} />

          <Route exact path="/" element={<Home />} />
          <Route exact path="/shop" element={<Shop />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/ofert" element={<Ofert />} />
          <Route exact path="/wishes" element={<Wishes />} />
          <Route exact path="/p1" element={<P1 />} />
          <Route exact path="/p2" element={<P2 />} />
          <Route exact path="/p3" element={<P3 />} />
          <Route exact path="/abaut" element={<Abaut />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/singnup" element={<Signup />} />
          <Route exact path="/forgotPassword" element={<ForgotPassword />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;