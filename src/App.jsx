import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import SenjataPage from "./pages/SenjataPage";
import AmunisiPage from "./pages/AmunisiPage";
import KendaraanKhususPage from "./pages/KendaraanKhususPage";
import SpesifikasiAmunisi from './pages/SpesifikasiAmunisi';
import SpesifikasiSenjata from './pages/SpesifikasiSenjata';
import SpesifikasiKendaraan from './pages/SpesifikasiKendaraan';
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/weapons" element={<SenjataPage />} />
        <Route path="/products/ammunition" element={<AmunisiPage />} />
        <Route path="/products/vehicles" element={<KendaraanKhususPage />} />
        <Route path="/amunisi/:name" element={<SpesifikasiAmunisi />} />
        <Route path="/senjata/:name" element={<SpesifikasiSenjata />} />
        <Route path="/kendaraan/:name" element={<SpesifikasiKendaraan />} />
      </Routes>
    </Router>
  );
}

export default App;
