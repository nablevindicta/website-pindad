import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import SenjataPage from "./pages/SenjataPage";
import AmunisiPage from "./pages/AmunisiPage";
import KendaraanKhususPage from "./pages/KendaraanKhususPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/weapons" element={<SenjataPage />} />
        <Route path="/products/ammunition" element={<AmunisiPage />} />
        <Route path="/products/vehicles" element={<KendaraanKhususPage />} />
      </Routes>
    </Router>
  );
}

export default App;
